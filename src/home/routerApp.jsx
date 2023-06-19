import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './screens/components/home';
import Cities from './screens/components/cities';

export function RouterApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
