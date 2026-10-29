import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standalone config (extracted from the react-admin monorepo demo)
export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'process.env.REACT_APP_DATA_PROVIDER': JSON.stringify(
            process.env.REACT_APP_DATA_PROVIDER
        ),
    },
    server: {
        port: 8000,
        open: true,
    },
    base: './',
    build: {
        sourcemap: true,
    },
    resolve: {
        dedupe: ['react', 'react-dom'],
    },
});
