import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Codewars from './pages/Codewars/Codewars';
import { Task1 } from './pages/Codewars/Task1/Task1';
import { Task2 } from './pages/Codewars/Task2/Task2';
import { Task3 } from './pages/Codewars/Task3/Task3';
import { Task4 } from './pages/Codewars/Task4/Task4';
import JavaScript from './pages/JavaScript/JavaScript';
import { Module6 } from './pages/JavaScript/Module6/Module6';
import { JsTask1 } from './pages/JavaScript/Module6/Tasks/Task1';
import { Module7 } from './pages/JavaScript/Module7/Module7';
import NodeJs from './pages/NodeJs/NodeJs';
import React from './pages/React/React';
import { Task5 } from './pages/Codewars/Task5/Task5';
import { Task6 } from './pages/Codewars/Task6/Task6';
import { Task7 } from './pages/Codewars/Task7/Task7';
import { JsTask2 } from './pages/JavaScript/Module6/Tasks/Task2';
import { Task8 } from './pages/Codewars/Task8/Task8';
import { JsTask3 } from './pages/JavaScript/Module6/Tasks/Task3';
import { Task9 } from './pages/Codewars/Task9/Task9';
import { Task10 } from './pages/Codewars/Task10/Task10';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Codewars />} />
          <Route path="codewars" element={<Codewars />}>
            <Route path="task1" element={<Task1 />} />
            <Route path="task2" element={<Task2 />} />
            <Route path="task3" element={<Task3 />} />
            <Route path="task4" element={<Task4 />} />
            <Route path="task5" element={<Task5 />} />
            <Route path="task6" element={<Task6 />} />
            <Route path="task7" element={<Task7 />} />
            <Route path="task8" element={<Task8 />} />
            <Route path="task9" element={<Task9 />} />
            <Route path="task10" element={<Task10 />} />
          </Route>
          <Route path="javascript" element={<JavaScript />}>
            <Route path="module-6" element={<Module6 />}>
              <Route path="task1" element={<JsTask1 />} />
              <Route path="task2" element={<JsTask2 />} />
              <Route path="task3" element={<JsTask3 />} />
            </Route>
            <Route path="module-7" element={<Module7 />} />
          </Route>
          <Route path="react" element={<React />} />

          <Route path="nodejs" element={<NodeJs />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Route>
      </Routes>
      {/* <h1>App.jsx</h1> */}
    </>
  );
};
