import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { prefDocuments } from "../mockData";
export const Documents = () => {
  const { selectedAccount } = useSelector((state) => state.account);
  const [documents, setDocuments] = useState();
  useEffect(() => {
    const docs = prefDocuments.filter((account) => {
      return account.account_key === selectedAccount;
    });
    setDocuments(docs[0].docs);
  }, [selectedAccount]);

  return (
    <>
      <div>Documents for Account: {selectedAccount}</div>
      <div>
        {documents &&
          documents.map((document) => {
            return (
              <p>
                {document.document_type}, {document.is_paper_flag.toString()}
              </p>
            );
          })}
      </div>
    </>
  );
};
