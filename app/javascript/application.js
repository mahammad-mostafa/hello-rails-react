import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './store';
import Layout from './components/layout';
import Greeting from './components/greeting';

const App = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Greeting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
createRoot(document.getElementById('root')).render(<App />);
