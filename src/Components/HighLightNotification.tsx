import * as React from "react";

interface IHighLightNotification {
  highlightedIssueNum?: number;
}

const HighLightNotification: React.FC<IHighLightNotification> = ({
  highlightedIssueNum = 0,
}) => {
  return <div>{highlightedIssueNum}</div>;
};

export default HighLightNotification;
