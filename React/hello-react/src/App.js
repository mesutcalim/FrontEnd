import './App.css';
//import Header from './components/Header';

import User from './components/User';
// import React from 'react';

const name = "Mesut";
const surname = "Çalım";
const isLoggedIn = true;
const friends = [
  {
    id:1,
    name:"Ahmet"
  },
  {
    id:2,
    name:"Mehmet"
  },
  {
    id:3,
    name:"Mesut"
  }
]

function App() {

  // return React.createElement("div", null,"Hello")

  return (
   <>
    {/* <p className="xyz">
      Lorem İpsum sdafsdfasdf
      asdfasdfasdfasdfsdafsadf
      asdfsadfsadfasdfsdcsdfas
      asdfsdfsaasdfcvasdfscasd
    </p>
    <label htmlFor="myinput">
      Name 
      <input id="myinput"/>
    </label> */}

    <User name="Mesut" 
    surname="Çalım" 
    isLoggedIn={true} 
    age={24} 
    friends={friends}
    address = {{
      title : 'Merkez/Niğde',
      zip : 51100
    }}
    />

    {/* <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}`
    :`Giriş Yapmadınız`}
    </h1>
    {!isLoggedIn && `Giriş Yapmadınız`} */}
   </>
  );
}

export default App;
