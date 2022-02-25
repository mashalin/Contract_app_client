import Admin from "./pages/Admin"
import Announce from "./pages/Announce"
import Auth from "./pages/Auth"
import Cathedra from "./pages/Cathedra"
import Course from "./pages/Course"
import Customer from "./pages/Customer"
import Home from "./pages/Home"
import Print from "./pages/Print"
import File from "./pages/File"
import { ADMIN_ROUTE, ANNOUNCE_ROUTE, CATHEDRA_ROUTE, CONTRACT_ROUTE, COURSE_ROUTE,  CREATE_DOGOVOR_ROUTE,  CUSTOMER_ROUTE, DOGOVOR_ROUTE, FILE_ROUTE, HOME_ROUTE, JOURNAL_ROUTE, LOGIN_ROUTE, PRINT_ROUTE } from "./utils/consts"
import Contract from "./pages/Contract"
import CreateDogovor from "./pages/CreateDogovor"
import Journal from "./pages/Journal"

export const authRoutes = [
    {
        path: CATHEDRA_ROUTE,
        Component: <Cathedra/>
    },
    {
        path: COURSE_ROUTE,
        Component: <Course/>
    },
    {
        path: ANNOUNCE_ROUTE,
        Component: <Announce/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path: CUSTOMER_ROUTE,
        Component: <Customer/>
    },
    {
        path: PRINT_ROUTE,
        Component: <Print/>
    },
    {
        path: FILE_ROUTE,
        Component: <File/>
    },
    {
        path: DOGOVOR_ROUTE,
        Component: <Contract/>
    },
    {
        path: CREATE_DOGOVOR_ROUTE,
        Component: <CreateDogovor/>
    },
    {
        path: JOURNAL_ROUTE,
        Component: <Journal/>
    },
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <Home/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: CONTRACT_ROUTE,
        Component: <Home/>
    },
]