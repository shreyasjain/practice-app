import React from "react";
import QueryForm from "./QueryForm";
import ResultTable from "./ResultTable";

export const FormTable = () => {
  return (
    <React.Fragment>
      <QueryForm />
      <ResultTable />
    </React.Fragment>
  );
};
