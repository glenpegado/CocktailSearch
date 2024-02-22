import { QueryClient } from '@tanstack/react-query';

export let queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, //1 minute
    },
  },
});
