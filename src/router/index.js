import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomeDemoOne from "../components/pages/HomeDemoOne";
import HomeDemoTwo from "../components/pages/HomeDemoTwo";
import HomeDemoThree from "../components/pages/HomeDemoThree";
import HomeDemoFour from "../components/pages/HomeDemoFour";
import HomeDemoFive from "../components/pages/HomeDemoFive";
import HomeDemoSix from "../components/pages/HomeDemoSix";
import AboutUs from "../components/pages/AboutUs";
import FeaturesOne from "../components/pages/FeaturesOne";
import FeaturesTwo from "../components/pages/FeaturesTwo";
import Team from "../components/pages/Team";
import Pricing from "../components/pages/Pricing";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Error from "../components/pages/Error";
import Faq from "../components/pages/Faq";
import BlogOne from "../components/pages/BlogOne";
import BlogTwo from "../components/pages/BlogTwo";
import BlogThree from "../components/pages/BlogThree";
import Contact from "../components/pages/Contact";
import PrivacyPolicy from "../components/pages/PrivacyPolicy";
import UsagePolicy from "../components/pages/UsagePolicy";
import TermsCondition from "../components/pages/TermsCondition";
import Projects from "../components/pages/Projects";
import BlogDetails from "../components/pages/BlogDetails";
import DealsAuctions from "../components/pages/DealsAuctions";
import Profile from "../components/pages/Profile";
import ProjectDetails from "../components/pages/ProjectDetails";
import DealsAuctionsDetails from "../components/pages/DealsAuctionsDetails";
import SubmitQuotes from "../components/pages/SubmitQuotes";
const routes = [
  { path: "/", component: HomeDemoOne },
  { path: "/home-demo-two", component: HomeDemoTwo },
  { path: "/home-demo-three", component: HomeDemoThree },
  { path: "/home-demo-four", component: HomeDemoFour },
  { path: "/home-demo-five", component: HomeDemoFive },
  { path: "/home-demo-six", component: HomeDemoSix },
  { path: "/about-us", component: AboutUs },
  { path: "/features-1", component: FeaturesOne },
  { path: "/features-2", component: FeaturesTwo },
  { path: "/team", component: Team },
  { path: "/pricing", component: Pricing },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/error", component: Error },
  { path: "/faq", component: Faq },
  { path: "/blog-1", component: BlogOne },
  { path: "/blog-2", component: BlogTwo },
  { path: "/blog-details", component: BlogThree },
  { path: "/contact", component: Contact },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/usage-policy", component: UsagePolicy},
  { path: "/terms-condition", component: TermsCondition },
  { path: "/projects", component: Projects },
  { path: "/blog/:type",name: 'blog', component: BlogDetails,props: true, },
  { path: "/DealsAuctions", component: DealsAuctions },
  { path: "/profile/:id/details", name: 'profile', component: Profile,props: true,},
  { path: '/project/:projectId/details', name: 'details', component: ProjectDetails,props: true,},
  { path: "/deals-auctions/:id/details",  name:'deals-auctions-details',component: DealsAuctionsDetails,props: true, },
  { path: "/SubmitQuotes/:id",name:'SubmitQuotes', component: SubmitQuotes,props: true, },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
