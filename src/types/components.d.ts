// 组件Props类型声明
import type { Component } from 'vue';

// 布局组件Props
export interface BasicLayoutProps {
  navTitle?: string;
  showBack?: boolean;
  showTabbar?: boolean;
  navBgColor?: string;
}

export interface PageLayoutProps {
  navTitle?: string;
  showBack?: boolean;
  navBgColor?: string;
}

// Tabbar组件Props
export interface TabbarItemProps {
  icon: string;
  selectedIcon: string;
  text: string;
  active: boolean;
}

// 表单组件Props
export interface InputProps {
  label?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  clearable?: boolean;
  password?: boolean;
  error?: string;
}

export interface ButtonProps {
  text?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'default';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean;
  loading?: boolean;
}
