<script setup lang="ts">
import { cn } from "#shadcn-pro/utils/shadcn.js";
const { data: title } = await useAsyncData("t2i-title", () =>
  queryContent("/t2i").findOne()
);
const { data: events } = await useAsyncData("t2i-events", () =>
  queryContent("/t2i/events").find()
);

const data = computed(() => ({ title: title.value, events: events.value }));
</script>

<template>
  <Timeline3
    :data="data"
    :class="cn('w-full h-full', $attrs.class as any)"
    :options="{ language: 'zh-cn' }"
  />
</template>
