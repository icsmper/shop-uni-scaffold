import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import path from 'path';

export default defineConfig({
  plugins: [uni()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 🔥 调整顺序：先注入变量文件，再注入 theme.scss
        additionalData: `
          @use '@@/assets/styles/common.scss as *';
          @use '@/uni.scss' as *;
          @use '@/assets/styles/theme.scss' as *;
        `,
        javascriptEnabled: true,
        importer(url: string) {
          if (url.startsWith('@/')) {
            return {
              file: path.resolve(process.cwd(), 'src', url.slice(2))
            };
          }
        }
      }
    }
  }
});
