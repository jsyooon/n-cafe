import getQueryClient from '@/hooks/getQueryClient';
import { dehydrate, Hydrate } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import type { QueryKey, QueryFunction } from '@tanstack/react-query';

export default async function HydratePage({ queryKey, queryFn, children }: PropsWithChildren<{ queryKey: QueryKey; queryFn: QueryFunction }>) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(queryKey, queryFn);

  const dehydratedState = dehydrate(queryClient);
  return <Hydrate state={dehydratedState}>{children}</Hydrate>;
}
