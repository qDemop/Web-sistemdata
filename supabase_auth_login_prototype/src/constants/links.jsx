
import {TbLayoutDashboardFilled} from "react-icons/tb";
import {FaUsers, FaUsersCog} from "react-icons/fa";
import {FiDatabase} from "react-icons/fi";
import {MdCalendarToday, MdOutlineSupervisorAccount} from "react-icons/md";


export const dashboardLinks = [
    {
        type: "link",
        label: "Dashboard",
        title: "Dashboard",
        icon: TbLayoutDashboardFilled,
        path: "dashboard",
    },
    {
        type: "link",
        label: "Administración",
        icon: FaUsersCog,
        path: "administracion",
    },
    {
        type: "link",
        label: "Usuarios",
        icon: FaUsers,
        path: "usuarios",
    },
    {
        type: "link",
        label: "Sensores",
        icon: FiDatabase,
        path: "sensores",
    },
    {
        type: "link",
        label: "Reportes",
        icon: MdCalendarToday,
        path: "reportes",
    },
    {
        type: "link",
        label: "Configuración",
        icon: MdOutlineSupervisorAccount,
        path: "configuracion",
    },

];
