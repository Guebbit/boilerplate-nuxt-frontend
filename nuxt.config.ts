// https://nuxt.com/docs/api/configuration/nuxt-config

/**
 *
 */
export default defineNuxtConfig({
  devtools: {
    enabled: true
  },

  /**
   * LATER: use $meta
   */
  $production: {
    routeRules: {
      '/**': {
        isr: true
      }
    }
  },
  $development: {
    //
  },

  /**
   * These variables are exposed to the rest of your application
   * using the useRuntimeConfig() composable.
   */
  runtimeConfig: {

    /**
     * The private keys which are only available server-side
     */
    apiSecret: '123',

    /**
     * Keys within public are also exposed client-side
     */
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api'
    }
  },

  /**
   * Override of default meta
   */
  app: {
    head: {
      title: 'TITLE inserted in nuxt.config.ts',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  /**
   * Typescript configs
   */
  typescript: {
    typeCheck: true,
    strict: true,
  }

  /**
   * TODO
   */
  // imports: {
  //   presets: [
  //     {
  //       from: 'vue-i18n',
  //       imports: ['useI18n']
  //     }
  //   ]
  // }
})
