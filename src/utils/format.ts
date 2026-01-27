import dayjs from 'dayjs';

/**
 * 时间格式化
 * @param date 时间/时间戳
 * @param format 格式 YYYY-MM-DD HH:mm:ss
 */
export const formatTime = (
  date: Date | number | string,
  format = 'YYYY-MM-DD HH:mm:ss'
): string => {
  if (!date) return '';
  return dayjs(date).format(format);
};

/**
 * 金额格式化
 * @param money 金额
 * @param decimal 小数位数
 */
export const formatMoney = (money: number, decimal = 2): string => {
  if (isNaN(money)) return '0.00';
  return Number(money).toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * 手机号脱敏
 * @param phone 手机号
 */
export const formatPhone = (phone: string): string => {
  if (!phone || phone.length !== 11) return phone;
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};

/**
 * 姓名脱敏
 * @param name 姓名
 */
export const formatName = (name: string): string => {
  if (!name) return '';
  if (name.length === 1) return name;
  if (name.length === 2) return name.replace(/(.).*/, '$1*');
  return name.replace(/(.).+(.)/, '$1*$2');
};
