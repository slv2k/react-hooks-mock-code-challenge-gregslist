import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const [isFavorited, setFavorited] = useState(false);
  const { id, description, image, location } = listing;

  function handleToggleFavorite() {
    setFavorited((isFavorited) => !isFavorited);
  };

  function handleDelete() {
    fetch(`http://localhost:3000/listings/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      onDeleteListing(listing)
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleToggleFavorite}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleToggleFavorite}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
