import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

import Navigation from "../Component/navigation";
import Footer from "../Component/footer";

export default function Contact() {
    const jsonData = useSelector((state) => state.jsonData.jsonData);

    return (
        <>
            <Navigation jsonData={jsonData} />
            <div className="hero overlay inner-page bg-primary py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center pt-5">
                        <div className="col-lg-6">
                            <h1
                                className="heading text-white mb-3 opacity-100"
                                // data-aos="fade-up"
                                style={{ fontSize: "42px" }}
                            >
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section mb-20 pt-0">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-4 mb-5 mb-lg-0 opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="contact-info">
                                <div className="address mt-2">
                                    <i className="icon-room"></i>
                                    <h4 className="mb-2">Location:</h4>
                                    <p>
                                        43 Raymouth Rd. Baltemoer,
                                        <br /> London 3910
                                    </p>
                                </div>

                                <div className="open-hours mt-4">
                                    <i className="icon-clock-o"></i>
                                    <h4 className="mb-2">Open Hours:</h4>
                                    <p>
                                        Sunday-Friday:
                                        <br />
                                        11:00 AM - 2300 PM
                                    </p>
                                </div>

                                <div className="email mt-4">
                                    <i className="icon-envelope"></i>
                                    <h4 className="mb-2">Email:</h4>
                                    <p>info@Untree.co</p>
                                </div>

                                <div className="phone mt-4">
                                    <i className="icon-phone"></i>
                                    <h4 className="mb-2">Call:</h4>
                                    <p>+1 1234 55488 55</p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-lg-8 opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <form action="#">
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                        />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <textarea
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="7"
                                            className="form-control"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <div className="col-12">
                                        <input
                                            type="submit"
                                            value="Send Message"
                                            className="btn btn-primary"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
