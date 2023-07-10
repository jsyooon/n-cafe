import { useRecoilState, useSetRecoilState } from 'recoil';
import { toastListState } from '@/atom';
import type { ToastType, ToastConfig } from '@/types/toast';

export default function useToast(props?: ToastConfig) {
  const setToastList = useSetRecoilState(toastListState);

  const addToastList = (type: ToastType, message: string, config: ToastConfig) => {
    const id = Symbol(`${message}${+new Date()}`);

    return setToastList((previous) => [...previous, { id, message, type, config }]);
  };

  const success = (message: string, config = props) => addToastList('success', message, config);

  const tip = (message: string, config = props) => addToastList('tip', message, config);

  const fail = (message: string, config = props) => addToastList('fail', message, config);

  return {
    success,
    tip,
    fail,
  };
}
