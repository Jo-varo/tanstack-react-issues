import { useQuery } from '@tanstack/react-query';
import { Issue } from '../interfaces';
import { githubApi } from '../../api/githubApi';
import { sleep } from '../../helpers/sleep';

export const getIssueInfo = async (issueNumber: number): Promise<Issue> => {
  await sleep(2);
  const { data } = await githubApi.get(`issues/${issueNumber}`);
  return data;
};

export const getIssueInfoComments = async (issueNumber: number): Promise<Issue[]> => {
  await sleep(2);
  const { data } = await githubApi.get(`issues/${issueNumber}/comments`);
  return data;
};

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issue', issueNumber],
    queryFn: () => getIssueInfo(issueNumber),
  });

  const commentsQuery = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => getIssueInfoComments(issueQuery.data!.number),
    enabled: issueQuery.data !== undefined
  });

  return { issueQuery, commentsQuery };
};
