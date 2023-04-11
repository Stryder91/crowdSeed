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
import { SeedCard } from './components/Card';

export default function App() {

  return (
    <div className='app'>
      <Header />
      <main>
        <Routes >       
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
    </div>
  )
}

const Landing = () => {
  const { t } = useTranslation();
  const {state, dispatch} = useContext(Context);

  return (
    <div className='flex flex-wrap justify-center relative'>
      <h1 className='w-full'>{t("title")}</h1>
      <SeedCard />
    </div>
  );
}
