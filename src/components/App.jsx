import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Codewars from './pages/Codewars/Codewars';
import { Task1 } from './pages/Codewars/Task1/Task1';
import { Task2 } from './pages/Codewars/Task2/Task2';
import JavaScript from './pages/JavaScript/JavaScript';
import NodeJs from './pages/NodeJs/NodeJs';
import React from './pages/React/React';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Codewars />} />
          <Route path="codewars" element={<Codewars />}>
            <Route path="task1" element={<Task1 />} />
            <Route path="task2" element={<Task2 />} />
          </Route>
          <Route path="javascript" element={<JavaScript />} />
          <Route path="react" element={<React />} />

          <Route path="nodejs" element={<NodeJs />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Route>
      </Routes>
      {/* <h1>App.jsx</h1> */}
    </>
  );
};
