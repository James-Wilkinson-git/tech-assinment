export const defaultAccount = {
  data: {
    default_accounts: [
      {
        preference_type: "EquityTrading",
        account_key: "NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",
        currency_code: "CAD",
      },
    ],
  },
  notifications: [],
};

export const accounts = [
  {
    id: "11112345",
    key: "NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",
    description: "Company A",
    type: "1",
    typeDesc: "TFSA",
    currencyCode: null,
  },
  {
    id: "11112346",
    key: "S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=",
    description: "Company B",
    type: "2",
    typeDesc: "Margin",
    currencyCode: null,
  },
  {
    id: "11112347",
    key: "LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=",
    description: "Company C",
    type: "1",
    typeDesc: "RRSP",
    currencyCode: null,
  },
  {
    id: "11111T",
    key: "_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=",
    description: "Company D",
    type: "1",
    typeDesc: "IMA",
    currencyCode: null,
  },
  {
    id: "11112348",
    key: "ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=",
    description: "Company E",
    type: "1",
    typeDesc: "",
    currencyCode: null,
  },
];

export const prefDocuments = [
  {
    account_key: "NrjT8DvwYNWu3lJjUBDvw3TKqIkSHo3FNO3IfP3nH4Y=",
    docs: [
      { document_type: "A", is_paper_flag: false },
      { document_type: "C", is_paper_flag: false },
      { document_type: "S", is_paper_flag: false },
      { document_type: "T", is_paper_flag: false },
    ],
  },
  {
    account_key: "S2KYccuaQwcv_ThMlFRRNXc1wAEecPHMu7O8kB_Phcw=",
    docs: [
      { document_type: "T", is_paper_flag: false },
      { document_type: "A", is_paper_flag: false },
      { document_type: "C", is_paper_flag: false },
      { document_type: "S", is_paper_flag: false },
    ],
  },
  {
    account_key: "LiKvx-bfXeb8os2P4fjUMIfQgeZTeYzMDNCqqSxp904=",
    docs: [
      { document_type: "A", is_paper_flag: false },
      { document_type: "C", is_paper_flag: false },
      { document_type: "S", is_paper_flag: false },
      { document_type: "T", is_paper_flag: false },
    ],
  },
  {
    account_key: "_ew_Muidp2ai62bo45_QGnU2mGKn66D_ocAZepW_CaM=",
    docs: [{ document_type: "ALL", is_paper_flag: false }],
  },
  {
    account_key: "ps7jCLmR5M1ZiED5tpBwjJyuXzSmrjs7N73Y-0ckd7c=",
    docs: [{ document_type: "ALL", is_paper_flag: false }],
  },
];
