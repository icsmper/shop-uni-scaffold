// 组件 Props 类型声明

// 为项目中的常用组件补全 props 类型，提供注释以增进可维护性

export interface BasicLayoutProps {
  /** 顶部标题 */
  navTitle?: string;
  /** 是否显示返回按钮 */
  showBack?: boolean;
  /** 是否显示底部 Tabbar */
  showTabbar?: boolean;
  /** 顶部导航背景颜色，支持 CSS 变量或十六进制 */
  navBgColor?: string;
  /** 是否固定顶部（默认为 true） */
  fixed?: boolean;
}

export interface PageLayoutProps {
  /** 页面标题 */
  navTitle?: string;
  showBack?: boolean;
  navBgColor?: string;
  /** 页面是否可下拉刷新 */
  pullRefresh?: boolean;
}

export interface TabbarItemProps {
  icon: string;
  selectedIcon?: string;
  text?: string;
  /** 是否激活 */
  active?: boolean;
  /** 徽章数字或标识 */
  badge?: string | number;
  /** 点击回调名称或页面路由 */
  route?: string;
}

export interface InputProps {
  label?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  value?: string | number;
  modelValue?: string | number;
  disabled?: boolean;
  clearable?: boolean;
  password?: boolean;
  error?: string;
  maxlength?: number;
  rows?: number;
}

export interface ButtonProps {
  text?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
  /** 原生点击事件穿透 */
  nativeType?: 'button' | 'submit' | 'reset';
}

// 常用复合类型导出，便于在组件中直接引用
export type Recordable<T = any> = Record<string, T>;

export {};