import './App.css';
import 'reactflow/dist/style.css';
import { Routes, Route } from 'react-router-dom';
import RouterConfig from './utilities/Routes/Routes';
import Layout from './utilities/Routes/Layout';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Layout />
      <Suspense fallback={<h1>Loading..</h1>}>
        <Routes>
          {RouterConfig.map((route, i) => (
            <Route path={route.path} element={route.component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
