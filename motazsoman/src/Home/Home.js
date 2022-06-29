import "./Home.css";
import { Row, Container, Col } from "react-bootstrap";
function Home() {
  return (
    <>
      <div id="Home">
        <Container>
          <Row>
            <Col>
              <img src="https://cdn2.canvasworld.com/images/home/012cf53a-205c-419e-9a2e-e7b15760bbb41.jpg" />
            </Col>
            <Col>
              <div className="first">
                <h3>Hi there </h3>
                <p>
                  I Am Motaz Soman Web Developer. <span>from jordan.</span> 
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
export default Home;
