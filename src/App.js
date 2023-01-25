import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      console.log(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(null);
    }
  };
  useEffect(() => {
    fetchData(url);
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
