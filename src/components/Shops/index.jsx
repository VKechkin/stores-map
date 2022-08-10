import stateShops from "../../state/state.json";

import { v4 } from "uuid";

import { Shop } from "../Shop/Shop";

import "./style.scss";

const Shops = ({ setCenter }) => {
  const { pickPoints } = stateShops;

  return (
    <div className="shops-wrapper">
      {pickPoints.map((itemShop) => {
        const { budgets } = itemShop;

        return (
          budgets.find((el) => el === "Самовывоз") && (
            <Shop
              shop={itemShop}
              key={`key-shop ${v4()}`}
              setCenter={setCenter}
            />
          )
        );
      })}
    </div>
  );
};

export { Shops };
