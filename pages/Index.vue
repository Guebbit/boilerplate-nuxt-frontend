<template>
  <div>
    <h1>Welcome to the homepage</h1>

    https://nuxt.com/docs/getting-started/assets
  </div>
</template>

<script setup lang="ts">
const { testVariable } = useAppConfig();

useSeoMeta({
  title: 'TITLE inserted with useSeoMeta 111111111111', // TODO
  /**
   * %s is replaced with the title above
   */
  titleTemplate: '%s - titleTemplate addition',
  ogTitle: 'OGTITLE inserted with useSeoMeta',
  description: 'DESCRIPTION inserted with useSeoMeta',
  ogDescription: 'OGDESCRIPTION inserted with useSeoMeta',
  ogImage: 'https://example.com/image.png', // TODO
  twitterCard: 'summary_large_image', // TODO
});

const headContentRef = ref('Reactive CONTENT inserted through REF in useHead');

useHead({
  /**
   *
   */
  title: 'TITLE inserted with useHead 22222222 and variable: ' + testVariable, // TODO

  /**
   * In case <body> customization is needed
   */
  bodyAttrs: {
    class: 'body-class-inserted-with-useHead'
  },

  /**
   * Custom meta that override nuxt.config.ts meta
   */
  meta: [
    {
      name: 'Index inserted with useHead',
      content: headContentRef,
    },

    /**
     * From https://realfavicongenerator.net/
     *
     * <meta name="msapplication-TileColor" content="#ffffff">
     * <meta name="msapplication-config" content="/favicon/browserconfig.xml">
     * <meta name="theme-color" content="#ffffff">
     */
    {
      name: 'msapplication-TileColor',
      content: '#ffffff',
    },
    {
      name: 'msapplication-config',
      content: '/favicon/browserconfig.xml',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],

  /**
   * Additional style links to be linked
   */
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    },

    /**
     * From https://realfavicongenerator.net/
     *
     * <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
     * <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
     * <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
     * <link rel="manifest" href="/favicon/site.webmanifest">
     * <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
     * <link rel="shortcut icon" href="/favicon/favicon.ico">
     */
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicon/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon/favicon-16x16.png'
    },
    {
      rel: 'manifest',
      href: '/favicon/site.webmanifest'
    },
    {
      rel: 'mask-icon',
      href: '/favicon/safari-pinned-tab.svg',
      color: '#5bbad5'
    },
    {
      rel: 'shortcut icon',
      href: '/favicon/favicon.ico'
    },
  ],

  /**
   * Additional scripts to be linked
   */
  script: [
    {
      src: 'https://third-party-script.com',
      tagPosition: 'bodyClose'
    }
  ]
})
</script>