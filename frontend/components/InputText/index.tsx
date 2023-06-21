'use client';

import useInput from '@/hooks/useInput';

interface Props {
  initialValue: string;
  className?: string;
}

function InputText({ initialValue, className }: Props) {
  const [value, onChange] = useInput(initialValue);
  return <input type='text' value={value} className={className} onChange={onChange} />;
}

export default InputText;
