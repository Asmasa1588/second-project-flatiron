import React, { useState } from "react";
import NavBar from "./NavBar";
import FormView from "./FormView";
import CarOffersView from "./CarOffersView";
import Contact from "./Contact";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [page, setPage] = useState("List"); //
  const currentView = {
    List: <CarOffersView />,
    Form: <FormView />, // we are using component formview here.
    Info: <Contact />,
  };
  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {currentView[page]}

      
    </div>
  );
}

export default App;
