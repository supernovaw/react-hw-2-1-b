import React from 'react';
import './App.css';
import BottomSection from "./BottomSection";
import NewsSection from "./NewsSection";
import SearchBar from "./SearchBar";

const Banner = ({ src }) =>
  <img className="Banner" src={src} alt="banner" />;

const headlines = [{
  id: 1, icon: "icons/mod-rf.jpg",
  title: "Крейсер \"Москва\" совершил отрицательное всплытие в результате хлопка"
}, {
  id: 2, icon: "icons/panorama.png",
  title: "Имущество всех россиян за год может вырасти в стоимости на 17.5% в рублевом эквиваленте",
}, {
  id: 3, icon: "icons/panorama.png",
  title: "«Москвичи и так не худенькие»: ведущий диетолог столицы рассказала, как кризис поможет укрепить здоровье россиян"
}, {
  id: 4, icon: "icons/mod-rf.jpg",
  title: "Российские войска доблестно продвинулись на -30 км вперёд под Харьковом"
}, {
  id: 5, icon: "icons/tass.svg",
  title: "Дефицита не будет: Путин подписал указ о признании части соли сахаром"
}];
const exchangeRates = [
  { id: 1, name: "USD ЦБ", value: "0,61₽", change: "+0,00" },
  { id: 2, name: "EUR ЦБ", value: "0,66₽", change: "+0,01" }
];

export default function App() {
  return (
    <div className="App">
      <NewsSection headlines={headlines} exchangeRates={exchangeRates} />
      <SearchBar />
      <Banner src="duck-clipart-five-little-15.gif" />
      <BottomSection />
    </div>
  );
};
