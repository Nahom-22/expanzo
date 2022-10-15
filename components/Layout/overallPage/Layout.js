import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout=(props)=> {
  console.log("in layout")
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
