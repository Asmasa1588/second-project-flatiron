import React, { useState } from "react";
import NavBar from "./NavBar";
import FormView from "./FormView";
import CarOffersView from "./CarOffersView";

import "./App.css";

function App() {
  const [page, setPage] = useState("List"); //
  const currentView = {
    List: <CarOffersView />,
    Form: <FormView />, // we are using component formview here.
    Info: <div>Info View</div>,
  };
  return (
    <div className="App">
      <NavBar onChangePage={setPage} />
      {currentView[page]}
    </div>
  );
}

export default App;
