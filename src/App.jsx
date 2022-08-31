import { useState, useEffect } from "react";

import Card from './Components/Card';
import Map from './Components/Map';
import Article from './Components/Article';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isBlocked, setIsBlocked] = useState(false);

  const API_URL = 'https://ipinfo.io/json?token=5fd3dbf6cf22cc';
  const options = {
    'method': 'GET',
    'Content-Type': 'application/json'
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(API_URL, options);
        const data = await res.json();
        setData(data);
        setIsLoading(!isLoading);
      }
      catch(error) {
        setIsBlocked(true);
        console.error(error);
      }
    })();
  }, [setData]);

  return (
    <div className="App">
      <h1>Fast IP 🚀</h1>
      <p className={isLoading ? 'loader visible' : 'loader'}>
        {isBlocked ? 'Please disable your Adblocker.' : 'Searching...'}
      </p>
      {isLoading && <div className="skeleton"></div>}
      <section className={!isLoading ? 'visible' : ''}>
        {!isLoading &&
          <>
            <Card data={data} />
            <Map loc={data.loc} />
            <Article />
          </>
        }
      </section>
      <footer>By Marc B. | Qweit</footer>
    </div>
  );
}

export default App
