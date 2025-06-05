import RestaurantCard from "./RestaurantCard";
import { resDetails } from "../utils/mockData";

const RestaurantContainer = () => {
    const allRestaurants = resDetails?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    return (
 
            <div className="container">
                <div className="search-div">
                    <h2>Restaurants with online food delivery</h2>
                </div>
                <div className="card-container">
                    {allRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} data={restaurant} />))}
                </div>
            </div>
 
    );
};

export default RestaurantContainer;