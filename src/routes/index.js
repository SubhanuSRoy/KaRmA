import { lazy } from "react";
// const Calendar = lazy(() => import("../pages/Calendar"));
// const Chart = lazy(() => import("../pages/Chart"));
// const FormElements = lazy(() => import("../pages/Form/FormElements"));
// const FormLayout = lazy(() => import("../pages/Form/FormLayout"));
// const Profile = lazy(() => import("../pages/Profile"));
// const Settings = lazy(() => import("../pages/Settings"));
// const Tables = lazy(() => import("../pages/Tables"));
// const Alerts = lazy(() => import("../pages/UiElements/Alerts"));
// const Buttons = lazy(() => import("../pages/UiElements/Buttons"));
const Converse = lazy(() => import("../Pages/Chat/Converse"));
const KRAConverse = lazy(() => import("../Pages/Chat/KRAConverse"));
const AddEmployee = lazy(() => import("../Pages/Employee/AddEmployee"));
const AllEmployees = lazy(() => import("../Pages/Employee/AllEmployees"));
const AddKRA = lazy(() => import("../Pages/KRA/AddKRA"));
const AllKRA = lazy(() => import("../Pages/KRA/AllKRA"));
const GenerateReport = lazy(() => import("../Pages/Reports/GenerateReport"));

const coreRoutes = [
 
  {
    path: "/chat/Performance",
    title: "Performance Chat",
    component: Converse,
  },
  {
    path: "/chat/KRA",
    title: "KRA Chat",
    component: KRAConverse,
  },
  {
    path: "/Employees/addEmployee",
    title: "Add Employee",
    component: AddEmployee,
  },
  {
    path: "/Employees/all",
    title: "All Employees",
    component: AllEmployees,
  },
  {
    path: "/KRAs/addKRA",
    title: "Add KRA",
    component: AddKRA,
  },
  {
    path: "/KRAs/all",
    title: "View KRAs",
    component: AllKRA,
  },
  {
    path: "/Reports",
    title: "Generate Report",
    component: GenerateReport,
  },
];

const routes = [...coreRoutes];
export default routes;
