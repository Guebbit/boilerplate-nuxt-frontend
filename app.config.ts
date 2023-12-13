/**
 * Expose reactive configuration within your application
 * with the ability to update it at runtime within lifecycle
 * or using a nuxt plugin and editing it with HMR (hot-module-replacement).
 */

export const testVariable = 'app.config.ts test variable';

export default defineAppConfig({
    author: 'Guebbit',
    testVariable,
    theme: {
        primaryColor: '#00bcd4',
        secondaryColor: '#ff9800',
    }
});