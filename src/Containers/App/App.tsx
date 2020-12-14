import * as React from "react";
import { useEffect, useState } from "react";
import { IIssue } from "../../typings";
// Module scope css
import "antd/dist/antd.css";
import { List, Skeleton, Anchor } from "antd";
import { parseGitHubLinkHeader } from "../../Utils";
const { Link } = Anchor;

const DEFAULT_PAGE_SIZE = 5;
const DEFAULT_PAGINATION = {
  curr: 1,
  total: 1,
};

function App() {
  const [activePageIssues, setActivePageIssues] = useState<IIssue[]>([]);
  const [pagination, setPagination] = useState(DEFAULT_PAGINATION);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchIssues() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.github.com/repos/rails/rails/issues?page=${pagination.curr}&per_page=${DEFAULT_PAGE_SIZE}`
      );
      const parsedValue = parseGitHubLinkHeader(res.headers.get("link"));
      setPagination({
        ...pagination,
        total: parsedValue.last?.page || pagination.total,
      });
      const data = await res.json();

      setIsLoading(false);
      setActivePageIssues(data);
    }

    fetchIssues();
  }, [pagination.curr, pagination.total]);

  return (
    <React.Fragment>
      <List
        dataSource={activePageIssues}
        renderItem={(item) => (
          <Skeleton loading={isLoading}>
            <List.Item>{item.title}</List.Item>
          </Skeleton>
        )}
        loading={isLoading}
        itemLayout="vertical"
        pagination={{
          position: "bottom",
          total: pagination.total,
          current: pagination.curr,
          showSizeChanger: false,
          defaultPageSize: DEFAULT_PAGE_SIZE,
          onChange: (page, _pageSize) => {
            if (page !== pagination.curr)
              setPagination({ ...pagination, curr: page });
          },
        }}
      />
      <Anchor>
        <Link
          href={"https://github.com/trmaphi/interview-challenge-1"}
          title="Github Link"
        />
      </Anchor>
    </React.Fragment>
  );
}

export default App;
