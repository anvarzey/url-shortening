import React, { useEffect, useState } from "react";
import URLConverted from "./URLConverted";

export default function URLShortener() {
  const [url, setUrl] = useState("");
  const [ responses, setResponses ] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('urlInput')

      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then(json => setResponses([...responses, { short: json.result.full_short_link, original: json.result.original_link, id: Date.now()}]))
      .catch((err) => console.error(err));

      input.value = ""
  };


  useEffect(() => {
    if (responses.length > 0) {
      const lastResponse = responses[responses.length - 1]
      localStorage.setItem(lastResponse.id, lastResponse.short + "," + lastResponse.original)

    }
  }, [responses])

  useEffect(() => {
    if (localStorage.length > 0 && localStorage.length !== responses.length){
      let pseudoResponse = []
      for(let i = 0; i < localStorage.length; i++){
        const keyName = localStorage.key(i)
         const str = localStorage.getItem(keyName)
         const arr = str.split(',')
         pseudoResponse.push({ short: arr[0], original: arr[1], id: keyName})
      }
      setResponses(pseudoResponse)
    }
  }, [responses])


  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDelete = (id) => {
    let storageArray = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const item = localStorage.getItem(key);
      const itemSplitted = item.split(",");
      storageArray.push({ short: itemSplitted[0], original: itemSplitted[1], id: key });
    }
  
    const indexElementToDelete = storageArray.findIndex(
      (element) =>
      element.id === id
      );
      
      storageArray.splice(indexElementToDelete, 1);
      
      localStorage.clear();
      
      for (let i = 0; i < storageArray.length; i++) {
        localStorage.setItem(
        storageArray[i].id,
        storageArray[i].short + "," + storageArray[i].original
        );
      }

      const updateResponses = responses.filter(res => res.id !== id)
      setResponses(updateResponses)
    }
    
    return (
      <div className="w-10/12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="relative -mt-16 h-40 max-w-screen-lg px-5 bg-custom-violet rounded-lg mx-auto flex flex-col justify-center align-center gap-8 bg-shorten lg:px-1 lg:flex-row lg:h-3 lg:py-16 lg:items-center z-40"
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
        responses.length >= 1 &&
          responses.map(response => {
            if (Object.keys(response).length >= 1) {
              return  <URLConverted key={response.id} urlID={response.id}  original={response.original} shortened={response.short} handleDelete={handleDelete} />
            }
          return ""
          })
        }
        </div>
    </div>
  );
}
