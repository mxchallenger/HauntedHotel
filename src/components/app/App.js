import React from 'react';
import './App.css';
import {
  BrowserRouter, Route, Routes
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from '../pages/HomePage';
import ReservationsPage from '../pages/ReservationsPage';
import ReservationCreatePage from '../pages/ReservationCreatePage';
import ReservationEditPage from '../pages/ReservationEditPage';
import RoomTypesPage from '../pages/RoomTypesPage';
import RoomTypeCreatePage from '../pages/RoomTypeCreatePage';
import RoomTypeEditPage from '../pages/RoomTypeEditPage';
import Navbar from '../Navbar';
import PageNotFound from '../pages/PageNotFound';
import c from '../../utils/constants';

/**
 * @name App
 * @returns component
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={c.HOME} element={<HomePage />} />
          <Route path={c.RESERVATION_ENDPOINT} element={<ReservationsPage />} />
          <Route path={c.CREATE_RES} element={<ReservationCreatePage />} />
          <Route path={c.EDIT_RES} element={<ReservationEditPage />} />
          <Route path={c.ROOMTYPE_ENDPOINT} element={<RoomTypesPage />} />
          <Route path={c.CREATE_ROOM} element={<RoomTypeCreatePage />} />
          <Route path={c.EDIT_ROOM} element={<RoomTypeEditPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={8000}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
