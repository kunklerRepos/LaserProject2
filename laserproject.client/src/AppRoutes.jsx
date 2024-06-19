import Counter  from "./components/Counter.jsx";
import FetchData  from "./components/FetchData.jsx";
import Home from "./components/Home.jsx";
import ItemInput from "./components/ItemInput.jsx";
import LaborCost from "./components/LaborCost.jsx";
import MachineCosts from './components/MachineCosts';
import Materials from './components/Materials';
import Shipping from './components/Shipping';
import Marketing from "./components/Marketing.jsx";
import ShopFees from "./components/ShopFees.jsx";
import NewJob from "./components/NewJob.jsx";
import JobMenu from "./components/JobMenu.jsx";
import CurrentOrders from "./components/CurrentOrders.jsx";
import OrderHistory from "./components/OrderHistory.jsx";
import NewEntryComponent from "./components/NewEntryComponent.jsx";

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
    },
    {
        path: '/LaborCost',
        element: <LaborCost/>

    },
    {
        path: '/MachineCosts',
        element: <MachineCosts/>
    },
    {
        path: '/Materials',
        element: <Materials/>
    },
    {
        path: '/Shipping',
        element: <Shipping/>
    },
    {
        path: '/ItemInput',
        element: <ItemInput/>

    },
    {
        path: "/Marketing",
        element: <Marketing/>
    },
    {
        path: "/ShopFees",
        element: <ShopFees/>
    },
    {
        path: "/NewJob",
        element: <NewJob/>
    },
    {
        path: "/JobMenu",
        element: <JobMenu/>
    },
    {
        path: "/CurrentOrders",
        element: <CurrentOrders/>
    },
    {
        path: "/OrderHistory",
        element: <OrderHistory/>
    },
    {
        path: "/NewEntryComponent",
        element: <NewEntryComponent/>
    }
];

export default AppRoutes;
