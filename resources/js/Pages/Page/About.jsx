import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

import Navigation from "../Component/navigation";
import Footer from "../Component/footer";

export default function Welcome() {
    const jsonData = useSelector((state) => state.jsonData.jsonData);

    return (
        <>
            <Navigation jsonData={jsonData} />
            <div
                className="site-cover site-cover-sm same-height overlay single-page opacity-100"
                style={{ backgroundImage: "url('/images/hero_5.jpg')" }}
            >
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-6">
                            <div className="post-entry text-center">
                                <h1 className="mb-4">About Us</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section sec-halfs py-0">
                <div className="container">
                    <div className="half-content d-lg-flex align-items-stretch">
                        <div
                            className="img opacity-100"
                            style={{
                                backgroundImage: "url('/images/hero_1.jpg')",
                            }}
                            data-aos="fade-in"
                            data-aos-delay="100"
                        ></div>
                        <div className="text">
                            <h2 className="heading text-primary mb-3">
                                Resources for makers and creatives
                            </h2>
                            <p className="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, Link large language ocean.
                            </p>
                            <p>
                                <Link
                                    href="#"
                                    className="btn btn-outline-primary py-2"
                                >
                                    Read more
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="half-content d-lg-flex align-items-stretch">
                        <div
                            className="img order-md-2 opacity-100"
                            style={{
                                backgroundImage: "url('/images/hero_2.jpg')",
                            }}
                            data-aos="fade-in"
                        ></div>
                        <div className="text">
                            <h2 className="heading text-primary mb-3">
                                We are trusted by more than 5,000 clients
                            </h2>
                            <p className="mb-4">
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live
                                in Bookmarksgrove right at the coast of the
                                Semantics, Link large language ocean.
                            </p>
                            <p>
                                <Link
                                    href="#"
                                    className="btn btn-outline-primary py-2"
                                >
                                    Read more
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section sec-features">
                <div className="container">
                    <div className="row g-5">
                        <div
                            className="col-12 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <div className="feature d-flex">
                                <span className="bi-bag-check-fill"></span>
                                <div>
                                    <h3>Building your blog</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="feature d-flex">
                                <span className="bi-wallet-fill"></span>
                                <div>
                                    <h3>Resources and insights</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-12 col-sm-6 col-md-6 col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="feature d-flex">
                                <span className="bi-pie-chart-fill"></span>
                                <div>
                                    <h3>Blog just for you</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row mb-5">
                        <div
                            className="col-lg-5 mx-auto text-center"
                            data-aos="fade-up"
                        >
                            <h2 className="heading text-primary">Our Team</h2>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <img
                                src="/images/person_1.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">James Griffin</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img
                                src="/images/person_2.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">Claire Smith</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="/images/person_3.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">Jessica Wilson</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>

                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="0"
                        >
                            <img
                                src="/images/person_4.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">William Anderson</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <img
                                src="/images/person_5.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">Julie Harvey</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                        <div
                            className="col-lg-4 mb-4 text-center opacity-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <img
                                src="/images/person_2.jpg"
                                alt="Image"
                                className="img-fluid w-50 rounded-circle mb-3"
                            />
                            <h5 className="text-black">Shana Clarkson</h5>
                            <p>
                                Far far away, behind the word mountains, far
                                from the countries Vokalia and Consonantia,
                                there live the blind texts.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-4 mb-lg-0 opacity-100">
                            <img
                                src="/images/img_7_sq.jpg"
                                alt="Image"
                                className="img-fluid rounded
					"
                            />
                        </div>
                        <div className="col-lg-4 ps-lg-2">
                            <div className="mb-5">
                                <h2 className="text-black h4">
                                    Publishing platform for professional
                                    bloggers
                                </h2>
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                            <div className="d-flex mb-3 service-alt">
                                <div>
                                    <span className="bi-wallet-fill me-4"></span>
                                </div>
                                <div>
                                    <h3>Building your blog</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-3 service-alt">
                                <div>
                                    <span className="bi-pie-chart-fill me-4"></span>
                                </div>
                                <div>
                                    <h3>Resources and insights</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex mb-3 service-alt">
                                <div>
                                    <span className="bi-bag-check-fill me-4"></span>
                                </div>
                                <div>
                                    <h3>Blog just for you</h3>
                                    <p>
                                        Far far away, behind the word mountains,
                                        far from the countries Vokalia and
                                        Consonantia, there live the blind texts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
