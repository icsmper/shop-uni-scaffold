import { defineStore } from 'pinia';

interface AppState {
  theme: 'light' | 'dark';
  language: 'zh-CN' | 'en-US';
  isFullScreen: boolean;
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    theme: 'light',
    language: 'zh-CN',
    isFullScreen: false,
  }),
  actions: {
    // 切换主题
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      // 可在此处添加主题切换的逻辑（如修改全局样式变量）
    },
    // 设置语言
    setLanguage(lang: 'zh-CN' | 'en-US') {
      this.language = lang;
    },
    // 切换全屏
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
});
