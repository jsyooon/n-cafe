'use client';

import { RecoilRoot } from 'recoil';

export default function RecoilClientRoot({ children }: { children: React.ReactNode }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
