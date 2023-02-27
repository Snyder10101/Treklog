import React, { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import MyFavorite from "./pages/MyFavorites";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ProtectedIndex from "./pages/ProtectedIndex";
import TrailEdit from "./pages/TrailEdit";
import TrailNew from "./pages/TrailNew";
import UnprotectedIndex from "./pages/UnprotectedIndex";
import TrailShow from "./pages/TrailShow";
import mockTrails from "./mockTrails";
import "../../assets/stylesheets/application.scss"

const App = (props) => {
  
  const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
  
  const [trails, setTrails] = useState([])
  
    useEffect(() => {
      readTrail()
    }, [])

  const readTrail = () => {
    fetch("/trails")
      .then((response) => response.json())
      .then((payload) => {
        setTrails(payload)
      })
      .catch((error) => console.log(error))
  }

  const createTrail = (obj) => {
    console.log(obj)
    fetch("/trails", {
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then((response) => response.json())
      .then((payload) => readTrail())
      .catch((errors) => console.log("Trail create errors:", errors))
  }

  const updateTrail = (trail, id) => {
    fetch(`/trails/${id}`, {
      body: JSON.stringify(trail),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then((response) => response.json())
      .then((payload) => readTrail())
      .catch((errors) => console.log("Trail edit errors:", errors))
  }

  const deleteTrail = (id) => {
    fetch(`/trails/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then((payload) => readTrail())
    .catch((errors) => console.log("Trail delete errors:", errors))
  }

  return (
    <BrowserRouter>
      <Header {...props} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trailsindex" element={<UnprotectedIndex trails={ trails } />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/myfavorites" element={<MyFavorite />} />
          <Route path="/myindex" element={<ProtectedIndex trails={trails} current_user={props.current_user} />} />
          <Route path="/trailedit/:id" element={<TrailEdit trails={trails} updateTrail={updateTrail} currentUser={props.current_user}/>} />
          <Route path="/trailnew" element={<TrailNew createTrail={ createTrail } currentUser={props.current_user}/>} />
          <Route path="/show/:id" element={<TrailShow trails={ trails } deleteTrail={deleteTrail} logged_in={props.logged_in} currentUser={props.current_user} />}  />
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
