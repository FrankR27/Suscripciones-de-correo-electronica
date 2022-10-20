import React from "react";
import MainNavigator from "./MainNavigator";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <MainNavigator></MainNavigator>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
