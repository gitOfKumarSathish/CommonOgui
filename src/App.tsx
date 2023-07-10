import './App.css';
import 'reactflow/dist/style.css';
import { Routes, Route } from 'react-router-dom';
import RouterConfig from './utilities/Routes/Routes';
import Layout from './utilities/Routes/Layout';
import { Suspense, lazy } from 'react';

function App() {
  // const StoreView = lazy(() => import('./components/StoreViewer/components/StoreView'));
  return (
    <>
      <Layout />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          {/* Add the default '/' route */}
          {/* <Route path="/" element={<section><Layout /></section>} /> */}
          {RouterConfig.map((route, i) => (
            <Route path={route.path} element={route.component} key={i} />
          ))}
          {/* Add the wildcard route */}
          {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
