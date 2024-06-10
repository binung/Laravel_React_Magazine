import { Link } from "@inertiajs/react";
import { useSelector } from "react-redux";

import Navigation from "../Component/navigation";
import Footer from "../Component/footer";

export default function Detail({ post }) {
    const jsonData = useSelector((state) => state.jsonData.jsonData);

    return (
        <>
            <Navigation jsonData={jsonData} />

            <div
                className="site-cover site-cover-sm same-height overlay single-page"
                style={{ backgroundImage: "url('/images/hero_5.jpg')" }}
            >
                <div className="container">
                    <div className="row same-height justify-content-center">
                        <div className="col-md-6">
                            <div className="post-entry text-center">
                                <h1 className="mb-4">
                                    {/* Don’t assume your user data in the cloud is
                                    safe */}
                                    {post ? (
                                        <span>{post.title}</span>
                                    ) : (
                                        <p>Loading data...</p>
                                    )}
                                </h1>
                                <div className="post-meta align-items-center text-center">
                                    <figure className="author-figure mb-0 me-3 d-inline-block">
                                        <img
                                            src="/images/person_1.jpg"
                                            alt="Image"
                                            className="img-fluid"
                                        />
                                    </figure>
                                    <span className="d-inline-block mt-1">
                                        {post.by}
                                    </span>
                                    <span>&nbsp;&nbsp; {post.DateTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="section">
                <div className="container">
                    <div className="row blog-entries element-animate">
                        <div className="col-md-12 col-lg-8 main-content">
                            <div className="post-content-body">
                                {post ? (
                                    jsonData.categories.map((value, index) => {
                                        if (value.id == post.category_id) {
                                            return (
                                                <span key={index}>
                                                    {value.description}
                                                </span>
                                            );
                                        }
                                    })
                                ) : (
                                    <p>Loading data...</p>
                                )}
                                <div className="row my-4">
                                    <div className="col-md-12 mb-4">
                                        <img
                                            src="/images/hero_1.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <img
                                            src="/images/img_2_horizontal.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <img
                                            src="/images/img_3_horizontal.jpg"
                                            alt="Image placeholder"
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                </div>
                                {post ? (
                                    <span>{post.description}</span>
                                ) : (
                                    <p>Loading data...</p>
                                )}
                            </div>

                            <div className="pt-5">
                                <p>
                                    Categories:
                                    {post ? (
                                        post.keyword.map((value, index) => {
                                            return (
                                                <Link key={index} href="#">
                                                    &nbsp;&nbsp;{value}
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        <p>no exist</p>
                                    )}
                                </p>
                            </div>

                            <div className="pt-5 comment-wrap">
                                <h3 className="mb-5 heading">6 Comments</h3>
                                <ul className="comment-list">
                                    <li className="comment">
                                        <div className="vcard">
                                            <img
                                                src="/images/person_1.jpg"
                                                alt="Image placeholder"
                                            />
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">
                                                January 9, 2018 at 2:21pm
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Pariatur quidem laborum
                                                necessitatibus, ipsam impedit
                                                vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure!
                                                Quam voluptas earum impedit
                                                necessitatibus, nihil?
                                            </p>
                                            <p>
                                                <Link
                                                    href="#"
                                                    className="reply rounded"
                                                >
                                                    Reply
                                                </Link>
                                            </p>
                                        </div>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img
                                                src="/images/person_2.jpg"
                                                alt="Image placeholder"
                                            />
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">
                                                January 9, 2018 at 2:21pm
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Pariatur quidem laborum
                                                necessitatibus, ipsam impedit
                                                vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure!
                                                Quam voluptas earum impedit
                                                necessitatibus, nihil?
                                            </p>
                                            <p>
                                                <Link
                                                    href="#"
                                                    className="reply rounded"
                                                >
                                                    Reply
                                                </Link>
                                            </p>
                                        </div>

                                        <ul className="children">
                                            <li className="comment">
                                                <div className="vcard">
                                                    <img
                                                        src="/images/person_3.jpg"
                                                        alt="Image placeholder"
                                                    />
                                                </div>
                                                <div className="comment-body">
                                                    <h3>Jean Doe</h3>
                                                    <div className="meta">
                                                        January 9, 2018 at
                                                        2:21pm
                                                    </div>
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipisicing elit.
                                                        Pariatur quidem laborum
                                                        necessitatibus, ipsam
                                                        impedit vitae autem, eum
                                                        officia, fugiat saepe
                                                        enim sapiente iste iure!
                                                        Quam voluptas earum
                                                        impedit necessitatibus,
                                                        nihil?
                                                    </p>
                                                    <p>
                                                        <Link
                                                            href="#"
                                                            className="reply rounded"
                                                        >
                                                            Reply
                                                        </Link>
                                                    </p>
                                                </div>

                                                <ul className="children">
                                                    <li className="comment">
                                                        <div className="vcard">
                                                            <img
                                                                src="/images/person_4.jpg"
                                                                alt="Image placeholder"
                                                            />
                                                        </div>
                                                        <div className="comment-body">
                                                            <h3>Jean Doe</h3>
                                                            <div className="meta">
                                                                January 9, 2018
                                                                at 2:21pm
                                                            </div>
                                                            <p>
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipisicing
                                                                elit. Pariatur
                                                                quidem laborum
                                                                necessitatibus,
                                                                ipsam impedit
                                                                vitae autem, eum
                                                                officia, fugiat
                                                                saepe enim
                                                                sapiente iste
                                                                iure! Quam
                                                                voluptas earum
                                                                impedit
                                                                necessitatibus,
                                                                nihil?
                                                            </p>
                                                            <p>
                                                                <Link
                                                                    href="#"
                                                                    className="reply rounded"
                                                                >
                                                                    Reply
                                                                </Link>
                                                            </p>
                                                        </div>

                                                        <ul className="children">
                                                            <li className="comment">
                                                                <div className="vcard">
                                                                    <img
                                                                        src="/images/person_5.jpg"
                                                                        alt="Image placeholder"
                                                                    />
                                                                </div>
                                                                <div className="comment-body">
                                                                    <h3>
                                                                        Jean Doe
                                                                    </h3>
                                                                    <div className="meta">
                                                                        January
                                                                        9, 2018
                                                                        at
                                                                        2:21pm
                                                                    </div>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Pariatur
                                                                        quidem
                                                                        laborum
                                                                        necessitatibus,
                                                                        ipsam
                                                                        impedit
                                                                        vitae
                                                                        autem,
                                                                        eum
                                                                        officia,
                                                                        fugiat
                                                                        saepe
                                                                        enim
                                                                        sapiente
                                                                        iste
                                                                        iure!
                                                                        Quam
                                                                        voluptas
                                                                        earum
                                                                        impedit
                                                                        necessitatibus,
                                                                        nihil?
                                                                    </p>
                                                                    <p>
                                                                        <Link
                                                                            href="#"
                                                                            className="reply rounded"
                                                                        >
                                                                            Reply
                                                                        </Link>
                                                                    </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="comment">
                                        <div className="vcard">
                                            <img
                                                src="/images/person_1.jpg"
                                                alt="Image placeholder"
                                            />
                                        </div>
                                        <div className="comment-body">
                                            <h3>Jean Doe</h3>
                                            <div className="meta">
                                                January 9, 2018 at 2:21pm
                                            </div>
                                            <p>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Pariatur quidem laborum
                                                necessitatibus, ipsam impedit
                                                vitae autem, eum officia, fugiat
                                                saepe enim sapiente iste iure!
                                                Quam voluptas earum impedit
                                                necessitatibus, nihil?
                                            </p>
                                            <p>
                                                <Link
                                                    href="#"
                                                    className="reply rounded"
                                                >
                                                    Reply
                                                </Link>
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="comment-form-wrap pt-5">
                                    <h3 className="mb-5">Leave Link comment</h3>
                                    <form action="#" className="p-5 bg-light">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="website">
                                                Website
                                            </label>
                                            <input
                                                type="url"
                                                className="form-control"
                                                id="website"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="message">
                                                Message
                                            </label>
                                            <textarea
                                                name=""
                                                id="message"
                                                cols="30"
                                                rows="10"
                                                className="form-control"
                                            ></textarea>
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="submit"
                                                value="Post Comment"
                                                className="btn btn-primary"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 sidebar">
                            <div className="sidebar-box search-form-wrap">
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
                                <div className="bio text-center">
                                    <img
                                        src="/images/person_2.jpg"
                                        alt="Image Placeholder"
                                        className="img-fluid mb-3"
                                    />
                                    <div className="bio-body">
                                        <h2>Hannah Anderson</h2>
                                        <p className="mb-4">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                            Exercitationem facilis sunt
                                            repellendus excepturi beatae porro
                                            debitis voluptate nulla quo veniam
                                            fuga sit molestias minus.
                                        </p>
                                        <p>
                                            <Link
                                                href="#"
                                                className="btn btn-primary btn-sm rounded px-2 py-2"
                                            >
                                                Read my bio
                                            </Link>
                                        </p>
                                        <p className="social">
                                            <Link href="#" className="p-2">
                                                <span className="fa fa-facebook"></span>
                                            </Link>
                                            <Link href="#" className="p-2">
                                                <span className="fa fa-twitter"></span>
                                            </Link>
                                            <Link href="#" className="p-2">
                                                <span className="fa fa-instagram"></span>
                                            </Link>
                                            <Link href="#" className="p-2">
                                                <span className="fa fa-youtube-play"></span>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
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
                                                        Way htmlFor Men href
                                                        Wear Socks and Sandals
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
                                                        Way htmlFor Men href
                                                        Wear Socks and Sandals
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
                                                        Way htmlFor Men href
                                                        Wear Socks and Sandals
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
                                    {post ? (
                                        post.SEOSlug.map((value, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link href="#">
                                                        {value}
                                                    </Link>
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <p>no exist</p>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section post-entry post-entry-sm bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-uppercase text-black">
                            More Blog Posts
                        </div>
                    </div>
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

            <Footer />
        </>
    );
}
