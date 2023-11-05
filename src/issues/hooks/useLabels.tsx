import { useQuery } from '@tanstack/react-query';
import { githubApi } from '../../api/githubApi';
import { Label } from '../interfaces/label';

import { sleep } from '../../helpers/sleep';

const getLabels = async (): Promise<Label[]> => {
  await sleep(2);

  const { data } = await githubApi.get<Label[]>('/labels?per_page=100');
  return data;
};

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
    placeholderData: [
      {
        id: 791921801,
        node_id: 'MDU6TGFiZWw3OTE5MjE4MDE=',
        url: 'https://api.github.com/repos/facebook/react/labels/%E2%9D%A4%EF%B8%8F',
        name: '❤️',
        color: 'ffffff',
        default: false,
      },
      {
        id: 1249821345,
        node_id: 'MDU6TGFiZWwxMjQ5ODIxMzQ1',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20ESLint%20Rules',
        name: 'Component: ESLint Rules',
        color: 'f7afdb',
        default: false,
      },
      {
        id: 1649755876,
        node_id: 'MDU6TGFiZWwxNjQ5NzU1ODc2',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Fast%20Refresh',
        name: 'Component: Fast Refresh',
        color: '473bcc',
        default: false,
      },
      {
        id: 2192194047,
        node_id: 'MDU6TGFiZWwyMTkyMTk0MDQ3',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Flight',
        name: 'Component: Flight',
        color: 'c4523e',
        default: false,
      },
      {
        id: 1109410193,
        node_id: 'MDU6TGFiZWwxMTA5NDEwMTkz',
        url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Hooks',
        name: 'Component: Hooks',
        color: 'c2f27b',
        default: false,
      },
    ],
  });

  return labelsQuery;
};
