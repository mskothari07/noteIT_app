import React from "react";
import DeleteNote from "../components/DeleteNote/DeleteNote";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const DeletePage = () => {
  return (
    <div>
      <Navbar />
      <DeleteNote />
      <Footer />
    </div>
  );
};

export default DeletePage;
