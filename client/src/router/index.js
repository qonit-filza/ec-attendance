import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import AttendancePage from "../views/AttendancePage.vue";
import ListAttendancePage from "../views/ListAttendancePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/",
      name: "attendance",
      component: AttendancePage,
    },
    {
      path: "/attendance-records",
      name: "attendance-records",
      component: ListAttendancePage,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
