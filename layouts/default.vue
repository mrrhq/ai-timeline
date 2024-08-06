<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <UiMain class="flex-1 min-h-0">
      <slot />
    </UiMain>
    <Footer />
  </div>
</template>
