import { lazy } from 'react';
import App from '../../App';
// import Layout from './Layout';


const Table = lazy(() => import('../Table'));
const Charts = lazy(() => import('../../components/DataVisualizer/components/Charts'));
const StoreView = lazy(() => import('../../components/StoreViewer/components/StoreView'));
const DnDFlow = lazy(() => import('../../components/DAG/Components/DragandDrop/Dagger'));
// const Home = lazy(() => import('../../pages/Home'));
const Layout = lazy(() => import('./Layout'));
// const App = lazy(() => import('../../pages/Home'));

const RouterConfig = [
    {
        path: '/StoreView',
        sidebarName: 'StoreViewer',
        component: <StoreView />
    },
    {
        path: '/dataVisualization',
        sidebarName: 'Data Visualization',
        component: <Charts />
    },
    {
        path: '/dagger',
        sidebarName: 'Dagger',
        component: <DnDFlow />
    },
    {
        path: '/table',
        sidebarName: 'Data Table',
        component: <Table />
    },
];

export default RouterConfig;