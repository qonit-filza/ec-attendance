<script>
import SlideUnlock from "vue-slide-unlock";
import axios from "axios";

export default {
  components: {
    SlideUnlock,
  },
  props: ["todayAttendance", "userLocation"],
  emits: ["refreshRecord"],
  data() {
    return {
      isCompleted: this.todayAttendance.clockOut ? true : false,
      slideText: "Slide to clock-in",
      completeText: "Good luck for today!",
    };
  },
  methods: {
    complete() {
      this.recordClockIn();
      // console.log(this.userLocation);
    },

    async recordClockIn() {
      try {
        const date = new Date();
        const clockTime = date.toLocaleTimeString("en-GB");
        const userId = localStorage.getItem("userId");

        if (!this.todayAttendance.clockIn) {
          await axios.post(`http://localhost:3000/attendances`, {
            date: date.toLocaleDateString(),
            clockIn: clockTime,
            clockInLocation: this.userLocation,
            UserId: +userId,
          });

          setTimeout(() => {
            this.slideText = "Slide to clock-out";
            this.$refs.vueslideunlock.reset();
            this.completeText = "Thank you for your hard work!";
          }, 2000);
        } else {
          console.log("tes");
          console.log(this.todayAttendance.id);
          await axios.patch(
            `http://localhost:3000/attendances/${this.todayAttendance.id}`,
            {
              clockOut: clockTime,
              clockOutLocation: this.userLocation,
            }
          );
          this.isCompleted = true;
        }

        await this.$emit("refreshRecord");
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    setTimeout(() => {
      if (this.todayAttendance.clockOut) {
        this.isCompleted = true;
      }
    }, 500);
  },
};
</script>

<template>
  <slide-unlock
    id="slider"
    ref="vueslideunlock"
    :auto-width="true"
    :circle="true"
    :disabled="isCompleted"
    :noanimate="false"
    :width="400"
    :height="50"
    :text="slideText"
    :success-text="completeText"
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
