import { render, screen, fireEvent } from "@testing-library/react";
import { Documents } from "./Documents";

// Mock Redux store and selectedAccount value
jest.mock("react-redux", () => ({
  useSelector: jest.fn().mockReturnValue({ selectedAccount: "account_key" }),
}));

describe("Documents", () => {
  const mockDocuments = [
    { document_type: "Doc A", is_paper_flag: true },
    { document_type: "Doc B", is_paper_flag: false },
    { document_type: "Doc C", is_paper_flag: true },
  ];

  beforeEach(() => {
    // Mock the filter logic and initial documents state
    jest
      .spyOn(Array.prototype, "filter")
      .mockReturnValue([{ docs: mockDocuments }]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders documents table", () => {
    render(<Documents />);

    // Verify that the table headers are rendered
    expect(screen.getByText("Document Type")).toBeInTheDocument();
    expect(screen.getByText("Delivery Method")).toBeInTheDocument();

    // Verify that the table rows are rendered
    mockDocuments.forEach((document) => {
      expect(screen.getByText(document.document_type)).toBeInTheDocument();
      expect(
        screen.getByText(document.is_paper_flag ? "Paper" : "Paperless")
      ).toBeInTheDocument();
    });
  });

  test('sorts documents in ascending order when "Sort Document Type (ASC)" button is clicked', () => {
    render(<Documents />);

    // Click the "Sort Document Type (ASC)" button
    fireEvent.click(screen.getByText("Sort Document Type (ASC)"));

    // Verify that the documents are sorted in ascending order
    const sortedDocuments = [...mockDocuments].sort((a, b) =>
      a.document_type.localeCompare(b.document_type)
    );
    sortedDocuments.forEach((document, index) => {
      expect(screen.getAllByRole("row")[index + 1]).toHaveTextContent(
        document.document_type
      );
    });
  });

  test('sorts documents in descending order when "Sort Document Type (DESC)" button is clicked', () => {
    render(<Documents />);

    // Click the "Sort Document Type (DESC)" button
    fireEvent.click(screen.getByText("Sort Document Type (DESC)"));

    // Verify that the documents are sorted in descending order
    const sortedDocuments = [...mockDocuments].sort((a, b) =>
      b.document_type.localeCompare(a.document_type)
    );
    sortedDocuments.forEach((document, index) => {
      expect(screen.getAllByRole("row")[index + 1]).toHaveTextContent(
        document.document_type
      );
    });
  });
});
