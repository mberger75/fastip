import { useState, useEffect } from "react";

import Card from './Components/Card';
import Map from './Components/Map';
import Article from './Components/Article';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({});

  useEffect(() => {
    (async () => {
      const resIp = await fetch('https://api.ipify.org?format=json');
      const dataIp = await resIp.json();

      const resInfo = await fetch(`https://ipinfo.io/${dataIp.ip}?token=5fd3dbf6cf22cc`);
      const dataInfo = await resInfo.json();
      setInfo(dataInfo);
      setIsLoading(!isLoading);
    })();
  }, [setInfo]);

  return (
    <div className="App">
      <h1>Fast IP 🚀</h1>
      <p className={isLoading ? 'loader visible' : 'loader'}>Searching...</p>
      {isLoading && <div className="skeleton"></div>}
      <section className={!isLoading ? 'visible' : ''}>
        {!isLoading &&
          <>
            <Card info={info} />
            <Map loc={info.loc} />
            <Article />
          </>
        }
      </section>
      <footer>By Marc B. | Qweit</footer>
    </div>
  );
}

export default App
