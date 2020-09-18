import React from 'react';


function Food(props){
  console.log(props)
  return(
    <h3>I love potato {props.fav}</h3>
  );
}


function App() {
  return (
  <div>
    <h1> hello </h1>
    <Food fav="김치" />
    <Food fav="치킨" />
    <Food fav="계란" />
    <Food fav="피자" />
    <Food fav="콜라" />
    </div>
  );

}

export default App;
