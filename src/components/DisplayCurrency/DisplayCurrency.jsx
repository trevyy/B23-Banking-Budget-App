import React, { useState} from "react";
import "./DisplayCurrency.scss";

const displayCurrencyExchange = () => {
  const [usd, setUsd] = useState(1);
  const [php, setPhp] = useState(56.33);
  const [euro, setEuro] = useState(0.93);

  const handleUsdChange = (e) => {
    const updatedUsd = e.target.value;
    if (updatedUsd !== "" && !isNaN(updatedUsd)) {
      const updatedPhp = updatedUsd * php / usd;
      const updatedEuro = updatedUsd * euro / usd;
      setUsd(updatedUsd);
      setPhp(updatedPhp);
      setEuro(updatedEuro);
    }
  };

  const handlePhpChange = (e) => {
    const updatedPhp = e.target.value;
    if (updatedPhp !== "" && !isNaN(updatedPhp)) {
      const updatedUsd = updatedPhp / php * usd;
      const updatedEuro = updatedPhp * euro / php;
      setPhp(updatedPhp);
      setUsd(updatedUsd);
      setEuro(updatedEuro);
    }
  };

  const handleEuroChange = (e) => {
    const updatedEuro = e.target.value;
    if (updatedEuro !== "" && !isNaN(updatedEuro)) {
      const updatedUsd = updatedEuro / euro * usd;
      const updatedPhp = updatedEuro * php / euro;
      setEuro(updatedEuro);
      setUsd(updatedUsd);
      setPhp(updatedPhp);
    }
  };

  return (
    <div className="exchange">
      <div className="exchange-main">
        <div>
          <input
            type="number"
            className="exchange-usd"
            value={usd}
            step="0.01"
            onChange={handleUsdChange}
          />
          <span> &nbsp; USD to &nbsp; </span>
        </div>
        <div>
          <input
            type="number"
            className="exchange-php"
            value={php}
            step="0.01"
            onChange={handlePhpChange}
          />
          <span> &nbsp; PHP to &nbsp; </span>
        </div>
        <div>
          <input
            type="number"
            className="exchange-euro"
            value={euro}
            step="0.01"
            onChange={handleEuroChange}
          />
          <span> &nbsp; EURO &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default displayCurrencyExchange;
