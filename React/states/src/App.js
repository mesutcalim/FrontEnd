import { useState } from "react";

function App() {
  const [name, setName] = useState('Mesut');
  const [age ,setAge] = useState(25);
  const [friends , setFriends] = useState(['Ahmet', 'Mehmet' , 'Murat' ])
  const [address, setAddress] = useState({title: 'Niğde' , zip: 51100});

  return (
    <div className="App">
    <h1>Merhaba! {name}</h1>
    <h2>{age}</h2>
    <button onClick={() => setName("Meutaryus")}>Change name</button>
    <button onClick={() => setAge(29)}>Change age</button>

    <hr />
    <br>
    </br>
    <h2>Friends</h2>
    {
      friends.map((friend,index) => (
        <div key={index}>{friend}</div>
      ))
    }
    <br/>
    <button onClick={() => setFriends([...friends,'Ayşe'])}>Add New Friend</button>

    <hr />
  <br>
  </br>
  <h2>Address</h2>
  <div>{address.title} {address.zip}</div>
    <br />
    <button onClick={() => setAddress({...address,title:"Ankara", zip: 6370 })}>Change Address</button>


  </div>
  );
}

export default App;
