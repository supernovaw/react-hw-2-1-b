import React from 'react';
import './BottomSection.css';

const Service = ({ header, children }) => (
  <div className="Service">
    <div className="header">{header}</div>
    {children}
  </div>
);

const WeatherService = ({ icon, iconAlt, temp, forecast }) => (
  <Service header="Погода">
    <div className="WeatherService">
      <img src={icon} alt={iconAlt} width="30" height="30" />
      <div className="temperature">{temp}</div>
      <div className="forecast">
        {forecast.map((ln, i) => <div key={i}>{ln}</div>)}
      </div>
    </div>
  </Service>
);

const VisitedService = () => (
  <Service header="Посещаемое">
    <div className="VisitedService">
      <div><b>Недвижимость</b> — о бараках</div>
      <div><b>Маркет</b> — люстры и светильники</div>
      <div><b>Авто.ру</b> — привод 4x4 до 500 000</div>
    </div>
  </Service>
);

const MapService = () => (
  <Service header="Карта Казахстана">
    <span>Расписания</span>
  </Service>
);

const TvScheduleService = ({ programs }) => (
  <Service header="Расписание ТВ">
    <div className="TvScheduleService">
      {programs.map(p => <div className="tv-show" key={p.id}>
        <span>{p.time}</span>
        <span>{p.title}</span>
        <span>{p.channel}</span>
      </div>)}
    </div>
  </Service>
);

const tvScheduleList = [{ id: 1, time: "17:30", title: "Родные. Донбасс под защитой", channel: "Россия 24" },
{ id: 2, time: "18:00", title: "Бесогон ТВ", channel: "Россия 24" },
{ id: 3, time: "19:00", title: "60 минут", channel: "Россия 24" },
{ id: 4, time: "20:30", title: "Вечерний помёт", channel: "Россия 24" },
{ id: 5, time: "21:30", title: "60 минут", channel: "Россия 24" }];

const SportService = () => (
  <Service header="Спорт">
    <div className="SportService">
      Россия 0 - 15 Чернобаевка
    </div>
  </Service>
);

// Display various sections ("services") such as weather, schedules etc
export default function BottomSection() {
  return (
    <div className="BottomSection">
      <div className="column">
        <WeatherService icon="rain.svg" iconAlt="rain" temp="+17°" forecast={["Утром +17,", "днём +20"]} />
        <VisitedService />
      </div>
      <div className="column">
        <MapService />
        <TvScheduleService programs={tvScheduleList} />
      </div>
      <div className="column">
        <SportService />
      </div>
    </div>
  );
};
