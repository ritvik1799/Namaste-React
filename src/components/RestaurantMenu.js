import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResMenu(json?.data);
  };

  if (resMenu === null) return <Shimmer />;
  const itemList =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;
  console.log(itemList);
  return (
    <div className={`order ${val?"menu-item ":"hidden"}`}>
      <div className="item-list">
        <ul>
          {itemList.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
