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
const App = () => (
  <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={c.HOME} component={HomePage} />
        <Route path={c.RESERVATION_ENDPOINT} component={ReservationsPage} />
        <Route path={c.CREATE_RES} component={ReservationCreatePage} />
        <Route path={c.EDIT_RES} component={ReservationEditPage} />
        <Route path={c.ROOMTYPE_ENDPOINT} component={RoomTypesPage} />
        <Route path={c.CREATE_ROOM} component={RoomTypeCreatePage} />
        <Route path={c.EDIT_ROOM} component={RoomTypeEditPage} />
        <Route component={PageNotFound} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={8000}
      />
    </BrowserRouter>
  </div>

);
export default App;
