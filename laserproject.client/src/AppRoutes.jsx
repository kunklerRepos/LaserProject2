import Counter  from "./components/Counter.jsx";
import FetchData  from "./components/FetchData.jsx";
import Home from "./components/Home.jsx";
import ItemInput from "./components/ItemInput.jsx";
import LaborCost from "./components/LaborCost.jsx";
import MachineCosts from './components/MachineCosts';
import Materials from './components/Materials';
import Shipping from './components/Shipping';


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

    }
];

export default AppRoutes;
