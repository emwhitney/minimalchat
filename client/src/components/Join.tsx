import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import Header from './Header';
import { Link } from "react-router-dom";
import "./Join.scss";

function Join() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  function checkInput(event: { preventDefault: () => void }) {
    if (!username || !room) {
      event.preventDefault();
    }
  }

  return (
    <>
    <Header/>
      <div className="outer-container">
        <Card className="join-container">
          <h1 className="join-header">Start chatting ⛰️</h1>
          <h5>Choose a room to chat anonymously with people who love what you love</h5>
          <form onSubmit={checkInput}>
            <label>Your username:</label>
            <input
              placeholder="Cool-person"
              className="join-input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Your interest:</label>
            <input
              placeholder="Tech, nature, books, whatever!"
              className="join-input"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />

            <Link to={`/chat?name=${username}&room=${room}`}>
              <Button variant="primary" className="join-button" type="submit">
                Let's Go!
              </Button>
            </Link>
            <body className='emily-tag'>Made by <a href='github.com/emwhitney'>Em Whitney</a></body>
          </form>
        </Card>
      </div>
    </>
  );
}

export default Join;
