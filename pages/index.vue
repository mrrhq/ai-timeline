<template>
  <UiContainer>
    <UiPage>
      <div class="relative">
        <section
          class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20 page-header pb-8 page-header pb-8"
        >
          <Badge
            variant="secondary"
            class="text-sm relative border-primary color-primary! font-normal"
          >
            <NuxtLink class="absolute inset-0" to="https://sanhua.himrr.com">
            </NuxtLink>
            Powered by 三花 AI～ 🎉
          </Badge>
          <h1
            class="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]"
          >
            探索 AI 技术发展历程
          </h1>
          <span
            class="max-w-[750px] text-center text-lg font-light text-foreground"
          >
            记录文生图、文生视频、大语言模型等技术在发展过程中的重要时间点</span
          >
          <section
            class="flex w-full items-center justify-center space-x-4 py-4 md:pb-5"
          >
            <UiButton
              target="_blank"
              to="https://github.com/mrrhq/ai-timeline"
              icon="i-simple-icons:github"
              >GitHub</UiButton
            >
            <UiButton
              target="_blank"
              to="https://sanhua-oss.himrr.com/public/group-entry.png"
              icon="i-simple-icons:wechat"
              variant="outline"
              >交流群</UiButton
            >
          </section>
        </section>
      </div>
      <div>
        <div class="mb-4 text-sm flex items-center">
          <NuxtLink
            to="/"
            class="flex items-center px-4 font-bold text-primary"
          >
            文生图/视频
          </NuxtLink>
          <NuxtLink class="flex items-center px-4 color-muted-foreground">
            LLM（即将到来）
          </NuxtLink>
          <UiButton to="/t2i" size="sm" variant="ghost" class="z-10 right-0 top-0 ml-a">
            <span class="hidden md:block">新标签打开</span>
            <UiIcon name="i-ph:arrow-up-right-duotone"></UiIcon>
          </UiButton>
        </div>
        <Card class="md:h-800px h-60vh of-hidden">
          <T2iTimeline />
        </Card>
      </div>
    </UiPage>
  </UiContainer>
</template>
