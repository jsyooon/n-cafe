export type ToastType = 'tip' | 'success' | 'fail';

export interface ToastConfig {
  message: string;
  showCloseButton?: boolean;
  closeTime?: number;
}
