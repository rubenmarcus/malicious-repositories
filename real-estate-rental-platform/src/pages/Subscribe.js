import { Button, Container } from "react-bootstrap";
import AnimationTitles from "../components/functions/AnimationTitles";

function Subscribe() {
  return (
    <div className="subscribe">
      <Container>
        <AnimationTitles
          title={`Subscribe to get fresh news update about our properties`}
          className="title text-center mx-auto w-75"
        />
        <p className="gray-50 text-center mt-3 mb-5">
          Stay up to date with Renting-Platform or get involved in our community
        </p>
        <div className="d-flex justify-content-between align-items-center mx-auto p-1">
          <input
            placeholder="Enter Your Email"
            className="bg-transparent border-0 text-white ps-1 w-100"
          />
          <Button className="m-0">Subscribe</Button>
        </div>
      </Container>
    </div>
  );
}

export default Subscribe;
