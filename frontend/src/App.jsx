import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import {
  Routes,
  Route,
} from "react-router-dom";


import "./scss/index.scss";
import './utils/I18n';
import { Context } from './utils/Context';
import { Header } from './components/header/Header';
import { Homes } from './pages/Homes';
import { CreateHomePage } from './pages/CreateHome';
import { Sidebar } from './components/sidebar/SideBar';

export default function App() {

  return (
    <div className='app'>
      <Header />
      <Sidebar > 
        <main>
          <Routes >       
            <Route path="/create" element={<CreateHomePage />} />
            <Route path="/" element={<Homes />} />
          </Routes>
        </main>
      </Sidebar>
    </div>
  )
}
