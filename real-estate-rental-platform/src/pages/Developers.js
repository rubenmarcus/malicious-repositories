import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";

function Developers() {
    return (
        <div className="developers">
            <div className="container-fluid">
                <AnimationTitles
                    title="Our the best developers"
                    className="title mx-auto"
                />
                <p className="gray-50 text-center mb-5">
                    The value of real estate can be affected by its utility,
                    project, and demand.{" "}
                </p>
                <motion.div
                    initial={{ x: -80 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        className="mySwiper overflow-none justify-content-start"
                        grabCursor={true}
                        slidesPerView={5}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            596: {
                                slidesPerView: 3,
                            },
                            998: {
                                slidesPerView: 4,
                            },
                            1198: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-01.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">Norway house</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-02.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    US California Real Estate
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-03.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Happy Neighbor
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-04.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    American Home Agents
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-05.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Ukr Home Agents
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-06.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Norway estate agency
                                </h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
                <motion.div
                    initial={{ x: 80 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Swiper
                        className="mySwiper overflow-none"
                        spaceBetween={50}
                        grabCursor={true}
                        slidesPerView={4}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },
                            596: {
                                slidesPerView: 3,
                            },
                            1298: {
                                slidesPerView: 5,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-07.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Red Oak Realty
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-08.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">Dream House</h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-09.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Leading Real Estate Companies
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-10.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Home Partners of World
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-11.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Red Oak Realty
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-13.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    American Home Agents
                                </h6>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="d-flex justify-content-between align-items-center py-2 px-3">
                                <img
                                    className="pe-3"
                                    src={require("../images/developers/logo-12.png")}
                                    alt="img"
                                />
                                <h6 className="text-white m-0">
                                    Norway estate agency
                                </h6>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </div>
    );
}

export default Developers;
