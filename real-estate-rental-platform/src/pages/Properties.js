// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CountDown from "../components/functions/CountDown";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function Properties() {
    // Active on select a tab
    function active(e) {
        let act = document.querySelectorAll(".active");
        act[0].classList.remove("active");
        e.target.classList.add("active");
    }

    // Like button of properties
    function like(e) {
        return e.target.classList.value === "fa-regular fa-heart like"
            ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
            : (e.target.classList.value = "fa-regular fa-heart like");
    }

    return (
        // Start properties
        <div className="properties">
            <Container>
                <AnimationTitles
                    className="title mx-auto"
                    title="Discover more properties"
                />
                {/* Start tabs */}
                <div className="tabs d-flex justify-content-start justify-content-sm-center align-items-center flex-nowrap w-lg-50">
                    <Swiper
                        className="mySwiper overflow-none"
                        grabCursor={true}
                        spaceBetween={15}
                        slidesPerView={6}
                        breakpoints={{
                            0: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 6,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                All
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0 active"
                                onClick={active}
                            >
                                Cottage
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                Chalet
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                Manor
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                Penthouse
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                Farmhouse
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Button
                                className="ms-0 bg-black-100 border-0"
                                onClick={active}
                            >
                                Duplex
                            </Button>
                        </SwiperSlide>
                    </Swiper>
                </div>
                {/* End tabs */}
                {/* Start cards */}
                <motion.div
                    initial={{ x: -80 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={15}
                        grabCursor={true}
                        loop={true}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            520: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                            1198: {
                                slidesPerView: 5,
                            },
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper mt-4"
                    >
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Cottage «Forrest 1»
                                    </h5>
                                    <p className="gray-90">@Red Oak Realty</p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={9} m={45} s={8} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                29.71 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/pexels-stan-krotov-12737424 1.webp")}
                                        />
                                        <i
                                            className="fa-solid fa-heart like text-danger"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Freshness
                                    </h5>
                                    <p className="gray-90">
                                        @US California Real Estate
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={29} m={15} s={10} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                14.81 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Wish house
                                    </h5>
                                    <p className="gray-90">
                                        @Norway estate agency
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={23} m={6} s={1} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                16.62 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Spruce
                                    </h5>
                                    <p className="gray-90">@Dream House</p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={10} m={30} s={58} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                17.01 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/house_big-1.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Residence Rybna
                                    </h5>
                                    <p className="gray-90">
                                        @Ukraine estate agency
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={18} m={21} s={8} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                29.71 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/house_big.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Blue Sky
                                    </h5>
                                    <p className="gray-90">
                                        @US New York Real Estate
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={23} m={16} s={11} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                17.31 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/picture-of-a-wooden-building-in-the-forest.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Cottage «Forrest 1»
                                    </h5>
                                    <p className="gray-90">@Red Oak Realty</p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={9} m={45} s={8} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                29.71 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/pexels-stan-krotov-12737424 1.webp")}
                                        />
                                        <i
                                            className="fa-solid fa-heart like text-danger"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Freshness
                                    </h5>
                                    <p className="gray-90">
                                        @US Los Angeles Real Estate
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={29} m={15} s={10} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                14.81 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/pexels-rachel-claire-8112843 1.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Wish house
                                    </h5>
                                    <p className="gray-90">
                                        @Portugal estate agency
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={23} m={6} s={1} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                16.62 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/david-kovalenko-9-qFzV9a2Zc-unsplash.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Spruce
                                    </h5>
                                    <p className="gray-90">@Dream House</p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={10} m={30} s={58} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                17.01 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/house_big-1.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Residence Rybna
                                    </h5>
                                    <p className="gray-90">
                                        @France estate agency
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={18} m={21} s={8} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                29.71 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <Card className="bg-black-100 rounded">
                                <Card.Body className="p-2">
                                    <div className="rounded overflow-hidden position-relative">
                                        <Card.Img
                                            variant="top"
                                            alt="img"
                                            src={require("../images/properties/house_big.webp")}
                                        />
                                        <i
                                            className="fa-regular fa-heart like"
                                            onClick={like}
                                        ></i>
                                    </div>
                                    <h5 className="mt-2 text-white fw-normal">
                                        Blue Sky
                                    </h5>
                                    <p className="gray-90">
                                        @Brazil Real Estate
                                    </p>
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <CountDown h={23} m={16} s={11} />
                                            <span className="gray-90">
                                                Remaining Time
                                            </span>
                                        </div>
                                        <div>
                                            <h6 className="text-white">
                                                17.31 ETH
                                            </h6>
                                            <span className="gray-90">
                                                Current Bid
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                {/* End cards */}
            </Container>
        </div>
        // End properties
    );
}

export default Properties;
