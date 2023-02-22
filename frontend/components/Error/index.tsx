import { errorStyle } from '@/components/Error/style';

interface PropsType {
  code: number;
  type: string;
  message: string;
}

export default function ErrorLayout({ code, type, message }: PropsType) {
  return (
    <div css={errorStyle}>
      <h3 className='title'>
        <span className='code'>{code}</span>
        <span className='type'>{type}</span>
      </h3>
      <p className='message'>{message}</p>
    </div>
  );
}
