import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  console.log(search)
  
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then((response) => response.json())
    .then(setListings)
    }, [])

    console.log(listings)

    function removeListing(id){
      console.log(id)
      const newListings = listings.filter((list)=> list.id !== id)
      setListings(newListings)
      // setListings(listings.filter((list)=> list.id !== id))
    }

    function addListing(newListing){
      setListings([...listings, newListing])
    }


  const displayedListings = listings.filter((listing)=> listing.description.toLowerCase().includes(search.toLowerCase()
  ))

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={displayedListings} removeListing={removeListing} />
   
    </div>
  );
}

export default App;
