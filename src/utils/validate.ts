/**
 * 校验工具
 */

// 校验手机号
export const validatePhone = (phone: string): boolean => {
  const reg = /^1[3-9]\d{9}$/;
  return reg.test(phone);
};

// 校验邮箱
export const validateEmail = (email: string): boolean => {
  const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
  return reg.test(email);
};

// 校验身份证号（简单校验）
export const validateIdCard = (idCard: string): boolean => {
  const reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(idCard);
};

// 校验是否为空
export const validateEmpty = (value: any): boolean => {
  if (value === undefined || value === null || value === '') return true;
  if (Array.isArray(value) && value.length === 0) return true;
  if (typeof value === 'object' && Object.keys(value).length === 0) return true;
  return false;
};

// 校验密码强度（至少8位，包含字母和数字）
export const validatePassword = (password: string): boolean => {
  const reg = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
  return reg.test(password);
};
