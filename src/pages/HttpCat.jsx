import axios from "axios";
import { useState } from "react";

const HttpCat = () => {
  axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
  const [cat, setCat] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div>
      <input
        type="number"
        placeholder="Search a cat :D"
        onChange={(e) => setCat(e.target.value)}
      />
      <button
        onClick={() => setUrl(`http://http.cat/${cat}.jpg`)}
        type="button"
      >
        Search
      </button>
      <img src={url} />
    </div>
  );
};

export default HttpCat;
