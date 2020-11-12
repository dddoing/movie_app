import React from 'react';

function App() {
  return (
    <div>
      {foodILIke.map(food => (
      <Food name={food.name} picture={food.image}/>
      ))}
    </div>
  );
}


function Food({ name,picture }){
return <div>
  <h2>This {name}!!</h2>
  <img src={picture}/>
  </div>
}

const foodILIke = [
  {
  name : "Doncasu",
  image :"https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
},
{
  name :"Kimbap",
  image :"http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
}
];

export default App;
