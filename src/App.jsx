import React, { useEffect, useState } from 'react';
function App() {

    const[restaurants, setRestaurants] = useState([]);

    useEffect(() => { 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((response) => response.json())
        .then((data) => {
            const restaurantsList = data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestaurants(restaurantsList);
        })
        .catch((err) => console.error('Fetch error:', err));
    }, []);

return(
    <div>
        <h1>Restaurants in Jalandhar</h1>
    <div>
    {restaurants.map((restaurant) => (
      <div>
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`} alt={restaurant.info.name} />
        <h1>{restaurant.info.name}</h1>
        <p>{restaurant.info.avgRating}</p>
        <p>{restaurant.info.cuisines.join(", ")}</p>
      </div>
     ))}
    </div>
    </div>
)
}

export default App