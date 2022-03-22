import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import Login from "./Login";

import Home from "./Home";
import Events from "./Events";
import EventForm from "./EventForm";
import Services from "./Services";
import ServiceForm from "./ServiceForm";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [event, setEvent] = useState();
  useEffect(() => {
    axios.get("/api/events")
    .then((response) => {
      console.log(response.data[0]);
      
    });    
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events event={setEvent}/>} />
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/services" element={<Services />} />
        <Route path="/create-service" element={<ServiceForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
