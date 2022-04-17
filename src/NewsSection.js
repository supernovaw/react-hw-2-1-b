import React from 'react';
import './NewsSection.css';

// Display news themes and current time
const Header = ({ sectionNames }) => {
  const getTimeString = () => {
    const d = new Date();
    const monthNames = ["янв", "фев", "март", "апр", "май", "июнь", "июль", "авг", "сен", "окт", "ноя", "дек"];
    const dayNames = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

    const prependZero = num => (num < 10 ? "0" : "") + num;
    const strHour = prependZero(d.getHours());
    const strMin = prependZero(d.getMinutes());

    return d.getDate() + " " + monthNames[d.getMonth()] + ", " + dayNames[d.getDay()]
      + " " + strHour + " " + strMin;
  };

  return (
    <div className="news-header">
      {sectionNames.map((name, i) =>
        <span key={i}>{name}</span>
      )}
      <span className="time">{getTimeString()}</span>
    </div>
  );
};

const Headline = ({ icon, title }) => (
  <div className="headline">
    <img alt="icon" src={icon} width="16" height="16" />
    {title}
  </div>
);

// Display current exchange rates
const Trading = ({ exchangeRates }) => (
  <div className="Trading">
    {exchangeRates.map(r => <span key={r.id} className="listed-currency">
      <span className="name"><b>{r.name}</b></span>
      <span className="value">{r.value}</span>
      <span className="change">{r.change}</span>
    </span>)}
  </div>
);

// Latest news and exchange rates
export default function NewsSection({ headlines, exchangeRates }) {
  return (
    <div className="NewsSection">
      <Header sectionNames={["Сейчас в СМИ", "на Украине", "Рекомендуем"]} />
      {headlines.map(h => <Headline {...h} key={h.id} />)}
      <Trading exchangeRates={exchangeRates} />
    </div>
  );
};
