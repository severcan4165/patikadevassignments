import React, {useState} from 'react'

const Estate = () => {
    const [name, setName] = useState("ahmet");
    const [friends, setFriends] = useState(["ahmet", "mehmet", "ayşe"]);
    const [adres, setAdres] = useState({title:"istanbul", zip:34000} );
    const [age, setAge] = useState(25);
  return (
    <div>
        <h1>Hello {name}</h1>
        <p>{age}</p>
        <button onClick={()=>setName("zeynep")}>İSİM</button>
        <button onClick={()=>setAge(32)}>YAŞ</button>

        <h2>FriendS !!</h2>
        {friends.map((item,index)=> <p key={index}>{item}</p>)}
        

        <button onClick={()=>setFriends([...friends, "zeynep"])}>İSİM</button>

        <h2>Adres: {adres.title}</h2>
        <h2>Posta Kodu: {adres.zip}</h2>
        <button onClick={()=>setAdres({title:"ankara", zip:60000})}>Ekle</button>
    </div>
  )
}

export default Estate