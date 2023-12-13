<template>
  <h1>Welcome to your dashboard</h1>
</template>

<script setup lang="ts">
import type {
  RouteLocationNormalized
} from "vue-router";

/**
 *
 */
definePageMeta({

  /**
   * Middleware that manage access to this page before loading its contents.
   * In this case: authorization for restricted page
   */
  middleware: 'auth',

  /**
   * Validation thta can restrict access to this page, after middleware, before loading contents
   * In this case: check that the ID is digits only
   *
   * @param route
   */
  validate: async (route: RouteLocationNormalized) =>
      /^\d+$/.test(route.params.id as string)
})
</script>