import React, { useEffect, useState } from "react";
import listingdata from "/data.json";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [elem, getElem] = useState([]);
  const [listings, setListings] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setListings(listingdata);
  }, []);

  return (
    <>
      <Header clicked={clicked} element={elem} getElem={getElem} setClicked={setClicked} />
      <Card listings={listings} setClicked={setClicked} getElem={getElem} element={elem} />
    </>
  );
}

export default App;
