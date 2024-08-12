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
import AddShopFee from "./components/AddShopFee.jsx";
import AddMachiningCosts from "./components/AddMachiningCosts.jsx";
import AddLaborCosts from "./components/AddLaborCosts.jsx";
import PhotoUploader from "./components/PhotoUploader.jsx";
import FeedbackProofs from "./components/FeedbackProofs.jsx";
import SelectMaterial from "./components/SelectMaterials.jsx";
import SelectMarketing from "./components/SelectMarketing.jsx";
import SelectAdditionalCosts from "./components/SelectAdditionalCosts.jsx";

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
    },
    {
        path: "/AddShopFee",
        element: <AddShopFee/>
    },
    {
        path: "/AddMachiningCosts",
        element: <AddMachiningCosts/>
    },
    {
        path: "/AddLaborCosts",
        element: <AddLaborCosts/>
    },
    {
        path: "/PhotoUploader",
        element: <PhotoUploader />
    },
    {
        path: "/FeedbackProofs",
        element: <FeedbackProofs/>
    },
    {
        path: "/SelectMaterials",
        element: <SelectMaterial/>
    },
    {
        path: "/SelectMarketing",
        element: <SelectMarketing/>
    },
    {
        path: "/SelectAdditionalCosts",
        element: <SelectAdditionalCosts/>
    }
];

export default AppRoutes;
