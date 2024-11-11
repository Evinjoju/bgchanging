import React, { useState } from "react"
import './App.css'

function App() {
  const [bgImage, setBgImage] = useState("https://tse3.mm.bing.net/th?id=OIP.c639ayDeByuKbg7e7UQvwAHaEK&pid=Api&P=0&h=180np");

  const themes = [
    {label: "red", url: "https://tse3.mm.bing.net/th?id=OIP.c639ayDeByuKbg7e7UQvwAHaEK&pid=Api&P=0&h=180"},
    {label: "blue", url: "https://tse2.mm.bing.net/th?id=OIP.aZ2fL4vj64QQHlIStpUiFgHaFv&pid=Api&P=0&h=180"},
    {label: "green", url: "http://cdn.wallpapersafari.com/96/83/SaqXpF.jpg"},
    {label: "yellow", url: "https://tse2.mm.bing.net/th?id=OIP.YZG-2Izzvi-V7ANxHWwxMgHaEo&pid=Api&P=0&h=180"},
    {label: "black", url: "https://wonderfulengineering.com/wp-content/uploads/2014/09/black-background-6.jpg"},
  ];

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100vw"}}
    >
      <div className="content">
        <p>Pick a Colour</p>
      </div>
      <div className="button-container">{themes.map((theme, index) => (<button key={index} onClick={() => setBgImage(theme.url)} className="theme-button">
        {theme.label}
      </button> 
    ))}
      </div>
    </div>
  );
}

export default App
