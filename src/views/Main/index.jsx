import React from "react";
import Banner from "../Ui/Banner/Banner";
import "./style.css";
import Container from "@mui/material/Container";
import Connecter from "../Ui/Connecter";
import Annotate from "../Ui/Annotate";
import Footer from "../../components/Footer";

function Main() {
  return (
    <Container maxWidth="lg">
      <Banner />
      <Connecter />
      <Annotate />
      <Annotate reverse={true} />
      <Annotate />
      <Annotate reverse={true} />
      <Annotate />
      <Footer />
    </Container>
  );
}

export default Main;
