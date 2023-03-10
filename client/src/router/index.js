import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../views/LoginPage.vue";
import AttendancePage from "../views/AttendancePage.vue";
import ListAttendancePage from "../views/ListAttendancePage.vue";
import ProfilePage from "../views/ProfilePage.vue";

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
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
  ],
});

router.beforeEach((to, from) => {
  const isAuthenticated = localStorage.getItem("userId");
  if (!isAuthenticated && to.name !== "login") {
    return { name: "login" };
  } else if (isAuthenticated && to.name === "login") {
    return { name: "attendance" };
  }
});

export default router;
