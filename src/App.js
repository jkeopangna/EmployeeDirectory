import { Tab } from "bootstrap";
import React from "react";
import Container from "./components/Container";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Table from "./pages/Table";


function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Container />
      <Table />
    </div>
  );
}

export default App;