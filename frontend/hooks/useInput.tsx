import { type ChangeEvent, useState, useCallback } from 'react';

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue ?? '');

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, []);

  return [value, onChange, setValue] as const;
}
