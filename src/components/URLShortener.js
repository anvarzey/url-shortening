import React, { useEffect, useState } from "react";
import URLConverted from "./URLConverted";

export default function URLShortener() {
  const [url, setUrl] = useState("");
  const [ responses, setResponses ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('urlInput')
    console.log(url)

      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then(json => setResponses([...responses, [json.result.full_short_link, json.result.original_link, Date.now()]]))
      .catch((err) => console.log(err));

      input.value = ""
  };


  useEffect(() => {
    if (responses.length > 0) {
      const lastResponse = responses[responses.length - 1]
      localStorage.setItem(lastResponse[2], lastResponse[0] + "," + lastResponse[1])

    } else {
      if (localStorage.length > 0){
        let pseudoResponse = []
        for(let i = 0; i < localStorage.length; i++){
          const keyName = localStorage.key(i)
           const str = localStorage.getItem(keyName)
           const arr = str.split(',')
           pseudoResponse.push([...arr, keyName])
        }
        setResponses(pseudoResponse)
      }
    }
  }, [responses])


  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="relative -mt-16 h-40 w-10/12 max-w-screen-lg px-5 bg-custom-violet rounded-lg mx-auto flex flex-col justify-center align-center gap-8 bg-shorten lg:px-1 lg:flex-row lg:h-3 lg:py-16 lg:items-center z-40"
      >
        <input
          type="text"
          id="urlInput"
          required
          pattern="^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$"
          title="valid url"
          onChange={handleChange}
          className="rounded-md h-10 p-3 lg:w-9/12 lg:h-12 invalid:border-red-500"
          placeholder="Shorten a link here..."
        />
        <button
          className="bg-custom-btn block rounded-md h-10 text-white lg:px-8 lg:h-12 btn-hover relative"
          type="submit"
        >
          Shorten It!
        </button>
        <label>Please add a link</label>
      </form>
      <div className="lg:max-h-60 max-height overflow-y-auto max-w-screen-lg mx-auto">
       {
         responses.map(response => {
           if (response !== "") {
             return  <URLConverted key={response[2]} urlID={response[2]}  original={response[1]} shortened={response[0]} />
            }
          return ""
          })
        }
        </div>
    </div>
  );
}
