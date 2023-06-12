// this hooks to load classes data from server

import { useQuery } from '@tanstack/react-query';

const useClass = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch
  } = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/classes');
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default useClass;
