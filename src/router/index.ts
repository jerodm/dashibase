import { createWebHistory, createRouter } from "vue-router"
import Main from "@/components/Main.vue"
import SignUp from "@/components/dashboard/SignUp.vue"
import SignIn from "@/components/dashboard/SignIn.vue"
import ResetPassword from "@/components/dashboard/ResetPassword.vue"
import CreateItem from "@/components/dashboard/CreateItem.vue"
import ViewItem from "@/components/dashboard/ViewItem.vue"
import ViewContainer from "@/components/dashboard/ViewContainer.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  }, {
    path: "/:pageId",
    name: "Page",
    component: Main,
    props: true,
    children: [
      {
        path: '',
        name: "View Table",
        component: ViewContainer,
        props: true,
      }, {
        path: 'new',
        name: "New Item",
        component: CreateItem,
        props: true,
      }, {
        path: 'view/:itemId',
        name: "View Item",
        component: ViewItem,
        props: true,
      },
    ],
  }, {
    path: "/signup",
    name: "Sign Up",
    component: SignUp,
  }, {
    path: "/signin",
    name: "Sign In",
    component: SignIn,
  }, {
    path: "/resetpassword",
    name: "Reset Password",
    component: ResetPassword,
    props: true,
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
