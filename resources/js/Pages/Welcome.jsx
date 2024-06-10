import { Link, Head } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import Navigation from "./Component/navigation";
import Footer from "./Component/footer";

export default function Welcome({ auth }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/json/data.json"); // Assuming data.json is in the public directory
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Navigation />
            <section className="section bg-light">
                <div className="container">
                    <div className="row align-items-stretch retro-layout">
                        <div className="col-md-4">
                            <Link
                                href={route("detail")}
                                className="h-entry mb-30 v-height gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_2_horizontal.jpg')",
                                    }}
                                ></div>

                                <div className="text">
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h2>
                                        AI can now kill those annoying cookie
                                        pop-ups
                                    </h2>
                                </div>
                            </Link>
                            <Link
                                href="single.html"
                                className="h-entry v-height gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_5_horizontal.jpg')",
                                    }}
                                ></div>

                                <div className="text">
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h2>
                                        Don’t assume your user data in the cloud
                                        is safe
                                    </h2>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link
                                href="single.html"
                                className="h-entry img-5 h-100 gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_1_vertical.jpg')",
                                    }}
                                ></div>

                                <div className="text">
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h2>Why is my internet so slow?</h2>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <Link
                                href="single.html"
                                className="h-entry mb-30 v-height gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_3_horizontal.jpg')",
                                    }}
                                ></div>

                                <div className="text">
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h2>
                                        Startup vs corporate: What job suits you
                                        best?
                                    </h2>
                                </div>
                            </Link>
                            <Link
                                href="single.html"
                                className="h-entry v-height gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_4_horizontal.jpg')",
                                    }}
                                ></div>

                                <div className="text">
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h2>
                                        Thought you loved Python? Wait until you
                                        meet Rust
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section posts-entry">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">Business</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                            <Link href="category.html" className="read-more">
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-9">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="blog-entry">
                                        <Link
                                            href="single.html"
                                            className="img-link"
                                        >
                                            <img
                                                src="/images/img_1_sq.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <span className="date">
                                            Apr. 14th, 2022
                                        </span>
                                        <h2>
                                            <Link href="single.html">
                                                Thought you loved Python? Wait
                                                until you meet Rust
                                            </Link>
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Unde,
                                            nobis ea quis inventore vel
                                            voluptas.
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
                                <div className="col-md-6">
                                    <div className="blog-entry">
                                        <Link
                                            href="single.html"
                                            className="img-link"
                                        >
                                            <img
                                                src="/images/img_2_sq.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <span className="date">
                                            Apr. 14th, 2022
                                        </span>
                                        <h2>
                                            <Link href="single.html">
                                                Startup vs corporate: What job
                                                suits you best?
                                            </Link>
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Unde,
                                            nobis ea quis inventore vel
                                            voluptas.
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
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled blog-entry-sm">
                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            Don’t assume your user data in the
                                            cloud is safe
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>

                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            Meta unveils fees on metaverse sales
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>

                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            UK sees highest inflation in 30
                                            years
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section posts-entry posts-entry-sm bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_1_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2>
                                    <Link href="single.html">
                                        Thought you loved Python? Wait until you
                                        meet Rust
                                    </Link>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p>
                                    <Link href="#" className="read-more">
                                        Continue Reading
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_2_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2>
                                    <Link href="single.html">
                                        Startup vs corporate: What job suits you
                                        best?
                                    </Link>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p>
                                    <Link href="#" className="read-more">
                                        Continue Reading
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_3_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2>
                                    <Link href="single.html">
                                        UK sees highest inflation in 30 years
                                    </Link>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p>
                                    <Link href="#" className="read-more">
                                        Continue Reading
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="blog-entry">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_4_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <span className="date">Apr. 14th, 2022</span>
                                <h2>
                                    <Link href="single.html">
                                        Don’t assume your user data in the cloud
                                        is safe
                                    </Link>
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                                <p>
                                    <Link href="#" className="read-more">
                                        Continue Reading
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section posts-entry">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">Culture</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                            <Link href="category.html" className="read-more">
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-9 order-md-2">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="blog-entry">
                                        <Link
                                            href="single.html"
                                            className="img-link"
                                        >
                                            <img
                                                src="/images/img_1_sq.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <span className="date">
                                            Apr. 14th, 2022
                                        </span>
                                        <h2>
                                            <Link href="single.html">
                                                Thought you loved Python? Wait
                                                until you meet Rust
                                            </Link>
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Unde,
                                            nobis ea quis inventore vel
                                            voluptas.
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
                                <div className="col-md-6">
                                    <div className="blog-entry">
                                        <Link
                                            href="single.html"
                                            className="img-link"
                                        >
                                            <img
                                                src="/images/img_2_sq.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </Link>
                                        <span className="date">
                                            Apr. 14th, 2022
                                        </span>
                                        <h2>
                                            <Link href="single.html">
                                                Startup vs corporate: What job
                                                suits you best?
                                            </Link>
                                        </h2>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Unde,
                                            nobis ea quis inventore vel
                                            voluptas.
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
                            </div>
                        </div>
                        <div className="col-md-3">
                            <ul className="list-unstyled blog-entry-sm">
                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            Don’t assume your user data in the
                                            cloud is safe
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>

                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            Meta unveils fees on metaverse sales
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>

                                <li>
                                    <span className="date">
                                        Apr. 14th, 2022
                                    </span>
                                    <h3>
                                        <Link href="single.html">
                                            UK sees highest inflation in 30
                                            years
                                        </Link>
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Unde, nobis ea quis
                                        inventore vel voluptas.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">Politics</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                            <Link href="category.html" className="read-more">
                                View All
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_7_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_1.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_6_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_2.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_5_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_3.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_4_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_4.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_3_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_5.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_2_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_4.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_1_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_3.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_4_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_2.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="post-entry-alt">
                                <Link href="single.html" className="img-link">
                                    <img
                                        src="/images/img_3_horizontal.jpg"
                                        alt="Image"
                                        className="img-fluid"
                                    />
                                </Link>
                                <div className="excerpt">
                                    <h2>
                                        <Link href="single.html">
                                            Startup vs corporate: What job suits
                                            you best?
                                        </Link>
                                    </h2>
                                    <div className="post-meta align-items-center text-left clearfix">
                                        <figure className="author-figure mb-0 me-3 float-start">
                                            <img
                                                src="/images/person_5.jpg"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </figure>
                                        <span className="d-inline-block mt-1">
                                            By{" "}
                                            <Link href="#">David Anderson</Link>
                                        </span>
                                        <span>&nbsp;-&nbsp; July 19, 2019</span>
                                    </div>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Quo sunt tempora dolor
                                        laudantium sed optio, explicabo ad
                                        deleniti impedit facilis fugit
                                        recusandae! Illo, aliquid, dicta beatae
                                        quia porro id est.
                                    </p>
                                    <p>
                                        <Link href="#" className="read-more">
                                            Continue Reading
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="section bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h2 className="posts-entry-title">Travel</h2>
                        </div>
                        <div className="col-sm-6 text-sm-end">
                            <Link href="category.html" className="read-more">
                                View All
                            </Link>
                        </div>
                    </div>

                    <div className="row align-items-stretch retro-layout-alt">
                        <div className="col-md-5 order-md-2">
                            <Link
                                href="single.html"
                                className="hentry img-1 h-100 gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_2_vertical.jpg')",
                                    }}
                                ></div>
                                <div className="text">
                                    <span>February 12, 2019</span>
                                    <h2>
                                        Meta unveils fees on metaverse sales
                                    </h2>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-7">
                            <Link
                                href="single.html"
                                className="hentry img-2 v-height mb30 gradient"
                            >
                                <div
                                    className="featured-img"
                                    style={{
                                        backgroundImage:
                                            "url('/images/img_1_horizontal.jpg')",
                                    }}
                                ></div>
                                <div className="text text-sm">
                                    <span>February 12, 2019</span>
                                    <h2>
                                        AI can now kill those annoying cookie
                                        pop-ups
                                    </h2>
                                </div>
                            </Link>

                            <div className="two-col d-block d-md-flex justify-content-between">
                                <Link
                                    href="single.html"
                                    className="hentry v-height img-2 gradient"
                                >
                                    <div
                                        className="featured-img"
                                        style={{
                                            backgroundImage:
                                                "url('/images/img_2_sq.jpg')",
                                        }}
                                    ></div>
                                    <div className="text text-sm">
                                        <span>February 12, 2019</span>
                                        <h2>
                                            Don’t assume your user data in the
                                            cloud is safe
                                        </h2>
                                    </div>
                                </Link>
                                <Link
                                    href="single.html"
                                    className="hentry v-height img-2 ms-auto float-end gradient"
                                >
                                    <div
                                        className="featured-img"
                                        style={{
                                            backgroundImage:
                                                "url('/images/img_3_sq.jpg')",
                                        }}
                                    ></div>
                                    <div className="text text-sm">
                                        <span>February 12, 2019</span>
                                        <h2>
                                            Startup vs corporate: What job suits
                                            you best?
                                        </h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
