import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from './LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/syslbv4.liu.edu.lb/login/" element={<Login />} />
        <Route path="*" element={<Navigate to="/syslbv4.liu.edu.lb/login/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
