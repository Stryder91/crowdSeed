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
            <Route path="/homes" element={<Homes />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </main>
      </Sidebar>
    </div>
  )
}

const Landing = () => {
  const { t } = useTranslation();
  const {state, dispatch} = useContext(Context);

  return (
    <div className='flex flex-wrap justify-center relative text-center'>
      <h1 className='w-full'>{t("title")}</h1>
    </div>
  );
}
