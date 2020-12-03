import * as React from "react";
import { useEffect, useState } from "react";
import HighLightNotification from "../../Components/HighLightNotification";
import IssueList from "../../Components/IssueList";
import { IIssue } from "../../typings";
// Module scope css
import styles from './App.module.css';

const DEFAULT_PAGE_SIZE = 5;

function App() {
  const [activePageIssues, setActivePageIssues] = useState<IIssue[]>([]);
  const [activePageNumber, setActivePageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchIssues() {
      setIsLoading(true);
      const data = await fetch(
        `https://api.github.com/repos/rails/rails/issues?page=${activePageNumber}&per_page=${DEFAULT_PAGE_SIZE}`
      ).then((res) => res.json());
      setIsLoading(false);
      setActivePageIssues(data);
    }

    fetchIssues();
  }, [activePageNumber]);

  return (
    <React.Fragment>
      <HighLightNotification/>
      {isLoading ? "Loading..." : <IssueList issues={activePageIssues} />}
      <button
        className={styles['next-btn']}
        onClick={() => {
          setActivePageNumber(activePageNumber + 1);
        }}
      >
        next
      </button>
    </React.Fragment>
  );
}

export default App;
