import React from "react";
import CreateNote from "../components/CreateNote/CreateNote";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
const CreatePage = () => {
  return (
    <div>
      <Navbar />
      <CreateNote />
      <Footer />
    </div>
  );
};

export default CreatePage;
