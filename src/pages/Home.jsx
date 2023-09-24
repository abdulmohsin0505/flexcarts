import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./home.css";
import banner from "../assets/images/banner-bg.png";
import Slider from "../components/common/Slider";
import { fetchProductsForAllCategories } from "../utils/fetchProductsByCategory";
import { useNavigate } from "react-router-dom";

function Home() {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchProductsForAllCategories()
      .then((responses) => {
        setLoading(false);
        setResponses(responses);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
        console.error("Error fetching products for all categories:", error);
      });
  }, []);

  console.log(responses);

  return (
    <main>
      <Card className="bg-dark text-white mobile_card">
        <img src={banner} className=" " alt={"banner"} />
        <Card.ImgOverlay className="d-flex justify-content-center flex-column imgOverlay w-100 text-center px-3">
          <Container>
            <Card.Text className="fw-bold fs-1">
              Start your shopping Now
            </Card.Text>
            <Button variant="warning" onClick={() => navigate("/products")}>
              Shop Now
            </Button>
          </Container>
        </Card.ImgOverlay>
      </Card>

      <div className="my-5">
        {loading && <h2 className="text-center">...Loading</h2>}
        {!loading && error ? (
          <h2 className="text-center text-danger my-5">{error}</h2>
        ) : null}
        {!loading
          ? responses.map((response) => (
              <section
                className="container text-center my-3"
                key={response.category}
              >
                <span className="border-info border-bottom border-bottom-4 d-inline fs-1 fw-bold">
                  {response.category}
                </span>
                <Slider products={response.products} />
              </section>
            ))
          : null}
      </div>
    </main>
  );
}

export default Home;
