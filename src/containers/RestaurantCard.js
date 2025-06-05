import { RESTAURANT_IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } = props.data.info;
    return (
        <div className="sub-card-container">

            <div>
                <img className="res-img" src={RESTAURANT_IMG_URL + cloudinaryImageId} alt="restaurant image" />
            </div>

            <div className="res-details">
                <h3>{name}</h3>
                <p>⭐<span>{avgRating} • </span>{sla.slaString}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>

    );
};

export default RestaurantCard;