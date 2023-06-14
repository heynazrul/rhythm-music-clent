// this hooks to load classes data from server

import { useQuery } from '@tanstack/react-query';

const useClass = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['classes'],
    queryFn: async () => {
      const res = await fetch('https://rhythm-music-server.vercel.app/classes');
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default useClass;
