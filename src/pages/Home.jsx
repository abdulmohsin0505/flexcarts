import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./home.css";
import banner from "../assets/images/banner-bg.png";

function Home() {
  return (
    <main>
      {/* <div className="banner">
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <div>
            <h1 className="banner_title">Start your shopping Now</h1>
          </div>
          <div>
            <button className="btn btn-outline-primary">Shop Now</button>
          </div>
        </div>
      </div> */}
      <Card className="bg-dark text-white mobile_card">
        <img src={banner} className=" " alt={"banner"} />
        <Card.ImgOverlay className="d-flex justify-content-center flex-column imgOverlay w-sm-60">
          <Container>
            <Card.Text className="fw-bold fs-5">
              Start your shopping Now
            </Card.Text>
            <Button variant="danger" size="sm">
              Shop Now
            </Button>
          </Container>
        </Card.ImgOverlay>
      </Card>
    </main>
  );
}

export default Home;
