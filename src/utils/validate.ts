/**
 * 校验工具函数集
 * - validatePhone: 校验中国大陆手机号
 * - validateEmail: 校验邮箱
 * - validateIdCard: 简单校验身份证号（18位或17位+校验位）
 * - validateEmpty: 校验空值（字符串、数组、对象、null/undefined）
 * - validateUrl: 简单校验 URL
 */

export const validatePhone = (phone: string): boolean => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(String(phone));
};

export const validateEmail = (email: string): boolean => {
  const reg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return reg.test(String(email));
};

export const validateIdCard = (idCard: string): boolean => {
  const reg = /( ^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(String(idCard));
};

/**
 * 判断是否为空
 * 返回 true 表示为空（undefined、null、空字符串、只包含空白字符串、空数组、空对象）
 */
export const validateEmpty = (value: any): boolean => {
  if (value === undefined || value === null) return true;
  if (typeof value === 'string' && value.trim() === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === 'object' && !Array.isArray(value)) return Object.keys(value).length === 0;
  return false;
};

export const validateUrl = (url: string): boolean => {
  if (!url) return false;
  try {
    // @ts-ignore
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

export default {
  validatePhone,
  validateEmail,
  validateIdCard,
  validateEmpty,
  validateUrl,
};