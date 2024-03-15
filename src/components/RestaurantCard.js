import { CDN_URL } from "../utils/constants";
import { AiOutlineStar } from "react-icons/ai";
import { FiClock } from "react-icons/fi";


const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const deliveryTime = resData?.info?.sla.slaString;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <div className="res-card-content">
        <h3>{name}</h3>
        <hr />
        <em>{cuisines.join(", ")}</em>
        <h4 className="avg-rating">
          <span className="icons">
            <AiOutlineStar />
          </span>
          <span>{avgRating} stars</span>
        </h4>
        <h4>{costForTwo}</h4>
        <h4 className="time">
          <span className="icons">
            <FiClock />
          </span>
          <span> {deliveryTime} minutes</span>
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
