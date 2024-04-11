import { defineConfig } from 'vitepress';

export default defineConfig({
    lang: 'en-US',
    description: 'Turn your OpenAPI specification into a beautiful TypeScript client',
    themeConfig: {
        sidebar: [
            {
                text: 'openapi-ts',
                items: [
                    { text: 'Get Started', link: '/openapi-ts/get-started' },
                    { text: 'Configuration', link: '/openapi-ts/configuration' },
                    { text: 'Interceptors', link: '/openapi-ts/interceptors' },
                    { text: 'Migrating', link: '/openapi-ts/migrating' },
                ],
            },
            {
                text: '@hey-api',
                items: [
                    { text: 'About', link: '/about' },
                    { text: 'Contributing', link: '/contributing' },
                ],
            },
        ],
    },
});
