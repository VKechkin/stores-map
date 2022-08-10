import { Button } from "../../primitive/Button";

import { v4 } from "uuid";

import "./style.scss";

const Shop = ({ shop, setCenter }) => {
  const { address, budgets, latitude, longitude } = shop;

  const newCoordinate = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <div className="shop" onClick={() => setCenter(newCoordinate)}>
      <div className="shop__address">{address}</div>
      <div className="shop__budget">
        {budgets.map((budget) => (
          <Button budget={budget} key={`key-btn ${v4()}`} />
        ))}
      </div>
    </div>
  );
};

export { Shop };
