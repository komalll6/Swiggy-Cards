import React, { useEffect, useState } from 'react';
function App() {

    const[restaurants, setRestaurants] = useState([]);

    useEffect(() => { 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((response) => response.json())
        .then((data) => {
            const restaurantsList = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants || [];
            setRestaurants(restaurantsList);
        })
        .catch((err) => console.error('Fetch error:', err));
    }, []);
return(
    <div style={{padding:"5px", fontFamily:"Arial, sans-serif"}}>
        <h1>Restaurants in Jalandhar</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:"10px", padding:"10px",}}>
    {restaurants.map((restaurant) => (
      <div key={restaurant.id} style={{border:"1px solid #e2dfdfa1", borderRadius:"5px", overflow:"hidden", transition:"transform 0.3s ease-in-out", "&:hover": { transform: "scale(1.05)" }}}>
        <div style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5px",marginBottom:"-20px", }}>
        <img style={{width:"270px", height:"200px", borderRadius:"20px", objectFit:"cover"}} src={`https://media-assets.swiggy.com/swiggy/image/upload/${restaurant.info.cloudinaryImageId}`} alt={restaurant.info.name} />
        </div>
        <div style={{textAlign:"left", padding:"20px", fontFamily:"Arial, sans-serif", marginTop:"-30px", marginBottom:"-30px", paddingBottom:"20px"}}>
        <h2 style={{fontSize:"20px", marginBottom:"-10px"}}>{restaurant.info.name}</h2>
        <p style={{fontWeight:"bold", color:"gray", marginBottom:"-15px", }}> <img src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="" style={{width:"15px", height:"15px", marginRight:"2px", marginBottom:"-1px"}} />{restaurant.info.avgRating} • {restaurant.info.sla.slaString}</p>
         <h3 style={{color:"gray",marginBottom:"-15px",}}>{restaurant.info.cuisines.slice(0, 2).join(", ")}</h3>
         <h3 style={{color:"gray"}}>{restaurant.info.locality}</h3>
        {/* <p style={{marginTop:"-15px", color:"gray"}}>{restaurant.info.sla.slaString}</p> */}
        {/* <p style={{marginTop:"-15px", color:"gray"}}>{restaurant.info.cuisines.join(", ")}</p> */}
        </div>
      </div>
     ))}
    </div>
    </div>
)
}

export default App