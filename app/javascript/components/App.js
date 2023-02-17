import React from "react"
import { useState } from "react";
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

const App = (props) => {
  const [trails, setTrails] = useState(mockTrails)
  
  


    return (
      <BrowserRouter>
        <Header {...props} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trailsindex" element={<UnprotectedIndex trails={ mockTrails } />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/myfavorites" element={<MyFavorite />} />
            <Route path="/myindex" element={<ProtectedIndex />} />
            <Route path="/trailedit" element={<TrailEdit />} />
            <Route path="/trailnew" element={<TrailNew />} />
            <Route path="/show/:id" element={<TrailShow trails={ mockTrails } logged_in={props.logged_in} />}  />
            <Route path="/*" element={<NotFound />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
    );
  }


export default App
