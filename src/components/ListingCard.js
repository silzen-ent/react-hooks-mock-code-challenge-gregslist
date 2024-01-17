import React, {useState} from "react";

function ListingCard({list, removeListing}) {
  console.log(list)

  const [favorite, setFavorite] = useState(false)

  function handleClick(){ // I believe we didn't call this b/c we found a workaround
    setFavorite(!favorite)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${list.id}`, {
      method: "DELETE"
    })
    removeListing(list.id)
    }
  

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={list.image} alt={list.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={()=> setFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=> setFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{list.description}</strong>
        <span> · {list.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
