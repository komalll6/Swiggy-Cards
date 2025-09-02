import React, { useEffect, useState } from 'react';
function App() {

    const[restaurants, setRestaurants] = useState([]);

    useEffect(() => { 
        fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        .then((response) => response.json())
        .then((data) => {
            const restaurantsList = data.cards[0].card.card.gridElements.infoWithStyle.info || [];
            setRestaurants(restaurantsList);
        })
        .catch((err) => console.error('Fetch error:', err));
    }, []);
return(
    <div>
        <h1>Restaurants in Jalandhar</h1>
    <div style={{display:"grid", gridTemplateColumns:"repeat(5, 1fr)", gap:"10px", padding:"10px"}}>
    {restaurants.map((restaurant) => (
      <div key={info.id} style={{transition:"transform 0.2s", "&:hover":{transform:"scale(1.05)"},border:"1px solid #e2dfdfff", borderRadius:"5px", overflow:"hidden", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", hover:"shadow-lg", hoverTransform:"scale(1.05)"}}>
        <div style={{cursor:"pointer", display:"flex", justifyContent:"center", alignItems:"center", marginTop:"5px",marginBottom:"-20px"}}>
        <img style={{width:"230px", height:"200px", borderRadius:"8px",}} src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.ImageId}`} alt={info.action.link} />
        </div>
        <div style={{textAlign:"left", padding:"20px", fontFamily:"Arial, sans-serif", marginTop:"-30px", marginBottom:"-30px", paddingBottom:"20px"}}>
        <h3>{info.action.text}</h3>
        <p style={{marginTop:"-15px", fontWeight:"bold"}}> <img src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png" alt="" style={{width:"15px", height:"15px", marginRight:"2px", marginBottom:"-1px"}} />{info.action.accessibility.altText} • {info.action.accessibility.altTextCta}</p>
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