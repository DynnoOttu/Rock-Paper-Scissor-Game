import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Gunting from "../assets/images/gunting.png";
import Batu from "../assets/images/batu.png";
import Kertas from "../assets/images/kertas.png";

const Home = ({ setMyChoice }) => {
  const coiceHandler = (e) => {
    setMyChoice(e.target.dataset.id);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#f0f5fc",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={Gunting}
              alt="Gunting"
              style={{ width: "150px", margin: "auto" }}
            />
            <Card.Body style={{ margin: "auto" }}>
              <Button
                style={{
                  backgroundColor: "#1cacff",
                  width: "200px",
                  border: "none",
                }}
              >
                <Link to="/game" style={{ textDecoration: "none" }}>
                  <div
                    onClick={coiceHandler}
                    data-id="Gunting"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Gunting
                  </div>
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-4">
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#f0f5fc",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={Batu}
              alt="Batu"
              style={{ width: "150px", margin: "auto" }}
            />
            <Card.Body style={{ margin: "auto" }}>
              <Button
                style={{
                  backgroundColor: "#1cacff",
                  width: "200px",
                  border: "none",
                }}
              >
                <Link to="/game" style={{ textDecoration: "none" }}>
                  <div
                    onClick={coiceHandler}
                    data-id="Batu"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Batu
                  </div>
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-sm-4">
          <Card
            style={{
              width: "18rem",
              backgroundColor: "#f0f5fc",
              border: "none",
            }}
          >
            <Card.Img
              variant="top"
              src={Kertas}
              alt="Kertas"
              style={{ width: "150px", margin: "auto" }}
            />
            <Card.Body style={{ margin: "auto" }}>
              <Button
                style={{
                  backgroundColor: "#1cacff",
                  width: "200px",
                  border: "none",
                }}
              >
                <Link to="/game" style={{ textDecoration: "none" }}>
                  <div
                    onClick={coiceHandler}
                    data-id="Kertas"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Kertas
                  </div>
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
