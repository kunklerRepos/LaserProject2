import Counter  from "./components/Counter.jsx";
import FetchData  from "./components/FetchData.jsx";
import  Home  from "./components/Home.jsx";

const AppRoutes = [
    {
        path: '/LaserProject2',
        element: <Home />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/fetch-data',
        element: <FetchData />
    }
];

export default AppRoutes;
