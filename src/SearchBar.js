import React from 'react';
import './SearchBar.css';
import './InputBar.css';

// Input field along with pointy search button
const InputBar = () => (
  <div className="InputBar">
    <input></input>
    <div className="find-button">Найти</div>
    <div className="end-triangle"></div>
  </div>
);

// Displayed below search bar ("Найдётся всё")
const Slogan = ({ children }) => (
  <div className="slogan">
    Найдётся всё. Например,
    <span className="slogan-example"> {children}</span>
  </div>
);

export default function SearchBar() {
  const searchSections = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"];
  return (
    <div className="SearchBar">
      <img className="logo" width="100" src="search-engine-logo.png" alt="logo" />
      <div className="search-sections">
        {searchSections.map((s, i) => <span key={i}>{s}</span>)}
      </div>
      <InputBar />
      <Slogan>статья за призыв к миру</Slogan>
    </div>
  );
};
