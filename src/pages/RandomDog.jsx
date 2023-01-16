import axios from "axios";
import { useState } from "react";

const RandomDog = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("");
  async function request() {
    let response = await axios
      .get("http://random.dog/woof.json/", {
        headers: { "Access-Control-Allow-Credentials": false },
      })
      .then(console.log)
      .catch(console.log);
    // setUrl(response.data.url);
    // setFormat(response.data.url.slice(-3));
  }

  return (
    <div>
      <button onClick={request}> DOG :D </button>
      <div id="root"></div>
      {format === "mp4" ? (
        <video src={url} autoPlay={true} muted={true} loop={true} />
      ) : (
        <img src={url} />
      )}
    </div>
  );
};

export default RandomDog;
