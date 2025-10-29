import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import AllCourse from './pages/AllCourse';
import Header from './components/Header';
import Details from './pages/Details';
import Footer from './pages/Footer';
import MyEnroll from './pages/MyEnroll';
import Educator from './Educator/Educator';
import Dashboard from './Educator/Dashboard';
import AddCourse from './Educator/AddCourse';
import MyCourse from './Educator/MyCourse';
import StudentEnroll from './Educator/StudentEnroll';

function App() {
  return (
    <div className="w-full">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="allcourse" element={<AllCourse />} />
        <Route path="detail/:id" element={<Details />} />
        <Route path="myenroll" element={<MyEnroll />} />
        <Route element={<Educator />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="addCourse" element={<AddCourse />} />
          <Route path="myCourse" element={<MyCourse />} />
          <Route path="myStudent" element={<StudentEnroll />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
