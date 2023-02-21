import { headerStyle } from './style';

export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header css={headerStyle}>
      <h1>n cafe</h1>
    </header>
  );
}
