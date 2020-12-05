interface GitHubPaginationPointer {
  page: number;
  link: string;
}

interface GithubPagination {
  next?: GitHubPaginationPointer
  last?: GitHubPaginationPointer
  first?: GitHubPaginationPointer
  prev?: GitHubPaginationPointer
}

export function parseGitHubLinkHeader(link: string | null): GithubPagination {
  if (typeof link !== 'string') {
    return {};
  };

  return link.split(', ').reduce(function (result, part) {
    var match = part.match('<(.*?)>; rel="(.*?)"');

    if (match && match.length === 3) {
      // @ts-ignore
      result[match[2]] = {
        page: new URL(match[1]).searchParams.get('page'),
        link: match[1],
      };
    }

    return result;
  }, {})
};