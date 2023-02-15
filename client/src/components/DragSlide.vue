<script>
import SlideUnlock from "vue-slide-unlock";

export default {
  components: {
    SlideUnlock,
  },
  methods: {
    complete() {
      console.log("sukses");
      setTimeout(() => {
        this.$refs.vueslideunlock.reset();
      }, 2000);
    },
  },
};
</script>

<template>
  <slide-unlock
    id="slider"
    ref="vueslideunlock"
    :auto-width="true"
    :circle="true"
    :disabled="false"
    :noanimate="false"
    :width="400"
    :height="50"
    text="Slide to clock-in"
    success-text="Your attendance has been recorded"
    @completed="complete()"
  />
</template>

<style>
#slider {
  --su-size-text: 1rem;
  --su-color-bg: white;
  --su-color-progress-normal-bg: #e8e8e8;
  --su-color-handler-bg: #ef9c38;
  --su-icon-handler: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgZmlsbD0iI0ZGRkZGRiIgY2xhc3M9ImJpIGJpLWNhcmV0LXJpZ2h0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0ibTEyLjE0IDguNzUzLTUuNDgyIDQuNzk2Yy0uNjQ2LjU2Ni0xLjY1OC4xMDYtMS42NTgtLjc1M1YzLjIwNGExIDEgMCAwIDEgMS42NTktLjc1M2w1LjQ4IDQuNzk2YTEgMSAwIDAgMSAwIDEuNTA2eiIvPgo8L3N2Zz4=");
}
</style>
