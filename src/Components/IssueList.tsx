import * as React from "react";
import { IIssue } from "../typings";

interface IIssueListProps {
  issues: IIssue[];
}

const IssueList: React.FC<IIssueListProps> = ({ issues }) => {
  return (
    <ul>
      {issues.map((issue, i) => (
        <li key={i}>{JSON.stringify(issue.title)}</li>
      ))}
    </ul>
  );
};

export default IssueList;
