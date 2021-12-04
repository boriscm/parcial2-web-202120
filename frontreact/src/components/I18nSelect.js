import React from 'react';
import { LOCALES } from '../i18n/locales';

export const I18nSelect = ({setLanguage}) => {
  console.log(typeof setLanguage)
  return (<div className="dd-wrapper">
  <div className="dd-header">
    <div className="dd-header-title"></div>
  </div>
  <div className="dd-list">
    <li>
    <button className="dd-list-item" onClick={(e)=>setLanguage(LOCALES.ENGLISH)}>ingles</button>

    </li>
    <li>
    <button className="dd-list-item" onClick={(e)=>setLanguage(LOCALES.SPANISH)}>Español</button>
    </li>
  </div>
</div>)

};
