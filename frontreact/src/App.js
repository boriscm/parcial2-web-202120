import './App.scss';
import React, { Component, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Report } from './pages/Report';
import { NavBar } from './components/NavBar';
import { IntlProvider } from 'react-intl';

import { LOCALES } from './i18n/locales';
import messages from './i18n/messages';

function App() {
  const [searchState, setSearchState] = useState({ searchKey: '' });
  const [language, setLanguage] = useState(LOCALES.SPANISH);

  const setSearchkey = (query) => {
    console.log(query);
    setSearchState({ searchKey: query });
  };

  const languageSet = (val) => {
    setLanguage(val);
  }
  console.log(language)


  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <header>
        <NavBar onSearchKeyChange={setSearchkey} setLanguageVal={languageSet} />
      </header>
      <main>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home searchKey={searchState.searchKey}  />}
          />
          <Route exact path='/report' element={<Report />} />
        </Routes>
      </main>
    </IntlProvider>
  );
}

export default App;
