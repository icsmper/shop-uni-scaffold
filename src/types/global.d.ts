// 全局类型声明
declare global {
  type Nullable<T> = T | null;
  type Optional<T> = T | undefined;
  type Recordable<T = any> = Record<string, T>;

  // 页面路由类型
  interface PageRoute {
    path: string;
    name?: string;
    params?: Recordable;
    query?: Recordable;
  }
}

export {};
