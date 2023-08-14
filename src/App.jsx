import { useState } from 'react'

import { GlobalContext } from './context'
import './App.css'

import logo from "./assets/logo.png";

function App() {
  const [unit, setUnit] = useState({
    conversion: "c-k",
    from: "Celcius",
    to: "Kelvin",
  });
  const [unitFrom, changeUnitFrom] = useState("");
  const [unitTo, changeUnitTo] = useState("");

  const processUnitFrom = (value) => {
    const conversedValue = value + 273.15;

    changeUnitFrom(value);
    changeUnitTo(conversedValue);
  };

  const processUnitTo = (value) => {
    const conversedValue = value + (273.15 * -1);

    changeUnitTo(value);
    changeUnitFrom(conversedValue);
  };

  return (
    <GlobalContext.Provider value={{ unit, setUnit, unitFrom, unitTo, changeUnitFrom, changeUnitTo }}>
      <main>
        <div id="title-container">
          <div style={{ width: 30, height: 30 }}></div>

          <div className='app-title'>
            Unit Converter
          </div>

          <div style={{ borderRadius: 2, overflow: "hidden", height: 30, }}>
            <a href='https://github.com/oilshit' target='_blank' rel="noreferrer">
              <img src={logo} width={30} height={30} alt='logo' />
            </a>
          </div>
        </div>

        <div className='form-unit'>
          {unit.from}
          <input
            type="number"
            name="unitFrom"
            id="unitFrom"
            value={unitFrom}
            onChange={e => processUnitFrom(Number(e.target.value))} />
        </div>

        <div className='form-unit'>
          {unit.to}
          <input
            type="number"
            name="unitTo"
            id="unitTo"
            value={unitTo}
            onChange={e => processUnitTo(Number(e.target.value))} />
        </div>
      </main>
    </GlobalContext.Provider>
  )
}

export default App
