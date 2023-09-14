export const formatNumber = (number: number) => Intl.NumberFormat('ko-KR').format(number) ?? 0;
