import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/listings")
    .then ((r) => r.json())
    .then((listingArray) => setListings(listingArray))
  }, []);

  function handleDeleteListing(listingToDelete) {
    const updatedListings = listings.filter((listing) => listing.id !== listingToDelete.id);
    setListings(updatedListings);
  }

  const displayedListings = listings.filter((listing) => listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer listings={displayedListings} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
