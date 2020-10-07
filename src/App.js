import React from 'react';


function Food(props){
  console.log(props)
  return(
    <h3>I love potato {props.fav}</h3>
  );
}
const foodLink = [
  {
    name : '김치',
  },
  {
    name : '피자',
  },
  {
    name : '콜라',
  }
]

function App() {
  return (
  <div>
    <h1> hello </h1>
    </div>
  );

}

export default App;
