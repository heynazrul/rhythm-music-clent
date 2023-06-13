import { useQuery } from '@tanstack/react-query';

const useUser = () => {
  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('https://rhythm-music-server.vercel.app/users');
      return res.json();
    },
  });

  return [users, loading, refetch];
};

export default useUser;
