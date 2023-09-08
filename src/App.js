import { useState } from "react";
import Images from "./images";
import "./style.css";

function App() {
  //! asagida selectedImg state degeri, setSelectedImg ise bu degeri degistimeye yaraya fonskiyon
  const [selectedImg, setSelectedImg] = useState(Images[0]);
  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} className="selected" alt="selected" />
      </div>
      <div className="imgContainer">
        {Images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="sogus"
            onClick={() => setSelectedImg(img)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
