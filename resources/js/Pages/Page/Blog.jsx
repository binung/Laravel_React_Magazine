import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

import Navigation from "../Component/navigation";
import Footer from "../Component/footer";

export default function Blog() {
    const jsonData = useSelector((state) => state.jsonData.jsonData);

    return (
        <>
            <Navigation jsonData={jsonData} />
            <div className="hero overlay inner-page bg-primary py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center pt-5">
                        <div className="col-lg-6">
                            <h1
                                className="heading text-white mb-3"
                                data-aos="fade-up"
                            >
                                Blog
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section search-result-wrap">
                <div className="container">
                    <div className="row posts-entry">
                        <div className="col-lg-8">
                            <div className="blog-entry d-flex blog-entry-search-item">
                                <Link
                                    href="single.html"
                                    className="img-link me-4"
                                >
                                    <img
                                        src="/images/img_1_sq.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <span className="date">
                                        Apr. 14th, 2022 &bullet;{" "}
                                        <Link href="#">Business</Link>
                                    </span>
                                    <h2>
                                        <Link href="single.html">
                                            Thought you loved Python? Wait until
                                            you meet Rust
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link
                                            href="single.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-entry d-flex blog-entry-search-item">
                                <Link
                                    href="single.html"
                                    className="img-link me-4"
                                >
                                    <img
                                        src="/images/img_2_sq.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <span className="date">
                                        Apr. 14th, 2022 &bullet;{" "}
                                        <Link href="#">Business</Link>
                                    </span>
                                    <h2>
                                        <Link href="single.html">
                                            Thought you loved Python? Wait until
                                            you meet Rust
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link
                                            href="single.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-entry d-flex blog-entry-search-item">
                                <Link
                                    href="single.html"
                                    className="img-link me-4"
                                >
                                    <img
                                        src="/images/img_3_sq.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <span className="date">
                                        Apr. 14th, 2022 &bullet;{" "}
                                        <Link href="#">Business</Link>
                                    </span>
                                    <h2>
                                        <Link href="single.html">
                                            Thought you loved Python? Wait until
                                            you meet Rust
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link
                                            href="single.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-entry d-flex blog-entry-search-item">
                                <Link
                                    href="single.html"
                                    className="img-link me-4"
                                >
                                    <img
                                        src="/images/img_4_sq.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <span className="date">
                                        Apr. 14th, 2022 &bullet;{" "}
                                        <Link href="#">Business</Link>
                                    </span>
                                    <h2>
                                        <Link href="single.html">
                                            Thought you loved Python? Wait until
                                            you meet Rust
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link
                                            href="single.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="blog-entry d-flex blog-entry-search-item">
                                <Link
                                    href="single.html"
                                    className="img-link me-4"
                                >
                                    <img
                                        src="/images/img_5_sq.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div>
                                    <span className="date">
                                        Apr. 14th, 2022 &bullet;{" "}
                                        <Link href="#">Business</Link>
                                    </span>
                                    <h2>
                                        <Link href="single.html">
                                            Thought you loved Python? Wait until
                                            you meet Rust
                                        </Link>
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link
                                            href="single.html"
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Read More
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="row text-start pt-5 border-top">
                                <div className="col-md-12">
                                    <div className="custom-pagination">
                                        <span>1</span>
                                        <Link href="#">2</Link>
                                        <Link href="#">3</Link>
                                        <Link href="#">4</Link>
                                        <span>...</span>
                                        <Link href="#">15</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 sidebar">
                            <div className="sidebar-box search-form-wrap mb-4">
                                <form
                                    action="#"
                                    className="sidebar-search-form"
                                >
                                    <span className="bi-search"></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="s"
                                        placeholder="Type Link keyword and hit enter"
                                    />
                                </form>
                            </div>
                            <div className="sidebar-box">
                                <h3 className="heading">Popular Posts</h3>
                                <div className="post-entry-sidebar">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <img
                                                    src="/images/img_1_sq.jpg"
                                                    alt="Image placeholder"
                                                    className="me-4 rounded"
                                                />
                                                <div className="text">
                                                    <h4>
                                                        There’s Link Cool New
                                                        Way for Men to Wear
                                                        Socks and Sandals
                                                    </h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">
                                                            March 15, 2018{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <img
                                                    src="/images/img_2_sq.jpg"
                                                    alt="Image placeholder"
                                                    className="me-4 rounded"
                                                />
                                                <div className="text">
                                                    <h4>
                                                        There’s Link Cool New
                                                        Way for Men to Wear
                                                        Socks and Sandals
                                                    </h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">
                                                            March 15, 2018{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="">
                                                <img
                                                    src="/images/img_3_sq.jpg"
                                                    alt="Image placeholder"
                                                    className="me-4 rounded"
                                                />
                                                <div className="text">
                                                    <h4>
                                                        There’s Link Cool New
                                                        Way for Men to Wear
                                                        Socks and Sandals
                                                    </h4>
                                                    <div className="post-meta">
                                                        <span className="mr-2">
                                                            March 15, 2018{" "}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sidebar-box">
                                <h3 className="heading">Categories</h3>
                                <ul className="categories">
                                    <li>
                                        <Link href="#">
                                            Food <span>(12)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Travel <span>(22)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Lifestyle <span>(37)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Business <span>(42)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            Adventure <span>(14)</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="sidebar-box">
                                <h3 className="heading">Tags</h3>
                                <ul className="tags">
                                    <li>
                                        <Link href="#">Travel</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Adventure</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Food</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Lifestyle</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Business</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Freelancing</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Travel</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Adventure</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Food</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Lifestyle</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Business</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Freelancing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
