import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import { Button } from "react-bootstrap";
const Home = () => {
  const [noteList, setNotes] = useState([]);

  const callFn = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_NOTEITAPP_BACKEND}notes/get`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
        setNotes(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    callFn();
  }, []);

  useEffect(() => {
    callFn();
  }, [setNotes]);

  return (
    <div className="Home">
      <h1 className="HomeNotes">My Notes</h1>

      <Link to="/create">
        <button className="AddBtn">+</button>
      </Link>

      {!noteList ||
        (noteList.length === 0 && (
          <h2 className="NoNotesFound">No Notes Found</h2>
        ))}

      <div className="NoteList">
        {noteList && (
          <div>
            {" "}
            {noteList.map((note) => (
              <div className="Note">
                <div className="NoteContent">{note.content}</div>
                <Link to={`/delete/${note._id}`}>
                  <Button className="DelIcon" variant="danger">
                    Delete
                  </Button>
                </Link>
              </div>
            ))}{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
