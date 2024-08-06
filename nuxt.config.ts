// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  extends: ["@mrrhq/shadcn-pro"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/seo",
  ],
  devtools: { enabled: true },
  site: {
    url: "https://ai-timeline.himrr.com",
    name: "AI 技术发展史 | 探索 AI 技术发展历程",
    description: "记录文生图、文生视频、大语言模型等技术在发展过程中的重要时间点",
    defaultLocale: "zh",
  },
});
