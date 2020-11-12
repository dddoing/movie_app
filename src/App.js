import React from 'react';
import PropTypes from "prop-types";

const foodILIke = [
  {
  id:1,
  name : "Doncasu",
  image :"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
},
{
  id:2,
  name :"Kimbap",
  image :"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
  rating : 5.0
}
];

function Food({ name,picture,rating }){
  return <div>
    <h2>This {name}!!</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
    </div>
  }

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number
}

function App() {
  return (
    <div>
      {foodILIke.map( food => (<Food key = {food.id} name = {food.name} picture = {food.image} rating={food.rating}/>))}
    </div>
  );
}

export default App;
