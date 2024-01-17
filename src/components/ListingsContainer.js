import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, removeListing}) {
  console.log(listings)

  
  const listCard = listings.map((list) => {
    return (
      <ListingCard key={list.id} list={list} removeListing={removeListing}/> //mapComponent requires a key
    )
  })


  const listCard2 = listings.map((list)=> (
    <ListingCard key={list.id} list={list} removeListing={removeListing}/>
  ))

  return (
    <main>
      <ul className="cards">
        {listCard}
        {console.log('hi')}
      </ul>
    </main>
  );
}

export default ListingsContainer;
