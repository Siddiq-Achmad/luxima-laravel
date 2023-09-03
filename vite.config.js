import { fileURLToPath } from 'url'
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    assetsInclude: ['**/*.woff2'], // Mengatur ekstensi file font yang akan diproses
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
        '@images': fileURLToPath(new URL('./resources/images/', import.meta.url)),
        '@fonts': fileURLToPath(new URL('./resources/assets/fonts', import.meta.url))
      },
    },
});
