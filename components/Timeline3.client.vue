<script setup lang="ts">
// @ts-expect-error
import { Timeline } from "@knight-lab/timelinejs/src/js/timeline/Timeline.js";
import "@knight-lab/timelinejs/dist/css/timeline.css";

const props = defineProps<{
  data: any;
  options?: any;
}>();

const timelineEmbed = ref<HTMLDivElement>();
const timeline = shallowRef();

onMounted(async () => {
  await nextTick(() => {
    const options = {
      ...props.options,
      script_path: location.origin,
    };
    timeline.value = new Timeline(timelineEmbed.value, props.data, options);
  });
});

defineExpose({
  timeline,
});
</script>

<template>
  <div ref="timelineEmbed"></div>
</template>

<style lang="less">

.tl-message-full {
  --at-apply: bg-background;
}


.tl-timenav {
  --at-apply: bg-background border-border;
}

.tl-timegroup{
  .tl-timegroup-message {
    text-shadow: none;
    --at-apply: color-foreground/50;
  }
  &.tl-timegroup-alternate {
    --at-apply: bg-secondary/20;
  }
  --at-apply: bg-secondary/50;
}

.tl-menubar {
  --at-apply: border border-input border-l-0
}
.tl-menubar-button {
  --at-apply: bg-background color-foreground hover:bg-accent hover:text-accent-foreground;
}

.tl-timeline {
  --at-apply: bg-background color-foreground;
}

.tl-timemarker {
  .tl-timemarker-content-container {
    --at-apply: bg-background border-border shadow-none;
    .tl-timemarker-content {
      .tl-timemarker-text h2.tl-headline, .tl-timemarker-media-container [class^="tl-icon-"] {
        --at-apply: text-foreground;
      }
    }
  }

  &:hover {
    .tl-timemarker-content-container {
      --at-apply: bg-secondary/80 border-border shadow-none;
      .tl-timemarker-content {
        .tl-timemarker-text h2.tl-headline, .tl-timemarker-media-container [class^="tl-icon-"] {
          --at-apply: text-foreground;
        }
      }
    }

    &.tl-timemarker-active .tl-timemarker-line-left {
      --at-apply: border-primary/80;
      &::after {
        --at-apply: bg-primary/80;
      }
    }
  }

  &.tl-timemarker-active {
    .tl-timemarker-content-container {
      --at-apply: bg-primary border-border shadow-none;
      .tl-timemarker-content {
        .tl-timemarker-text h2.tl-headline, .tl-timemarker-media-container [class^="tl-icon-"] {
          --at-apply: text-primary-foreground;
        }
      }
    }
    .tl-timemarker-line-left {
      --at-apply: border-primary;
      &::after {
        --at-apply: bg-primary;
      }
    }
  }

  .tl-timemarker-timespan {
    --at-apply: bg-background;
  }
}


.tl-timeaxis-background {
  --at-apply: bg-background;
}
.tl-timeaxis {
  .tl-timeaxis-content-container {
    .tl-timeaxis-major .tl-timeaxis-tick {
      --at-apply: color-muted-foreground;
      &::before {
        --at-apply: border-muted-foreground;
      }
    }
    .tl-timeaxis-minor .tl-timeaxis-tick {
      --at-apply: color-muted-foreground/80;
      &::before {
        --at-apply: border-muted-foreground/80;
      }
    }
  }
}
.tl-attribution {
  --at-apply: hidden;
}
</style>
