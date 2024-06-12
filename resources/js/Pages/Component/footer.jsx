import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3 className="mb-4">About</h3>
                                <p>
                                    Far far away, behind the word mountains, far
                                    from the countries Vokalia and Consonantia,
                                    there live the blind texts.
                                </p>
                            </div>
                            <div className="widget">
                                <h3>Social</h3>
                                <ul className="list-unstyled social">
                                    <li className="pr-1">
                                        <Link href="#">
                                            <span className="icon-instagram"></span>
                                        </Link>
                                    </li>
                                    <li className="pr-1">
                                        <Link href="#">
                                            <span className="icon-twitter"></span>
                                        </Link>
                                    </li>
                                    <li className="pr-1">
                                        <Link href="#">
                                            <span className="icon-facebook"></span>
                                        </Link>
                                    </li>
                                    <li className="pr-1">
                                        <Link href="#">
                                            <span className="icon-linkedin"></span>
                                        </Link>
                                    </li>
                                    <li className="pr-1">
                                        <Link href="#">
                                            <span className="icon-pinterest"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <span className="icon-dribbble"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 ps-lg-5">
                            <div className="widget">
                                <h3 className="mb-4">Company</h3>
                                <ul className="list-unstyled float-start links">
                                    <li>
                                        <Link href="#">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Vision</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Mission</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Privacy</Link>
                                    </li>
                                </ul>
                                <ul className="list-unstyled float-start links">
                                    <li>
                                        <Link href="#">Partners</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Business</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Careers</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="#">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Creative</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3 className="mb-4">Recent Post Entry</h3>
                                <div className="post-entry-footer">
                                    <ul>
                                        <li>
                                            <Link href="">
                                                <img
                                                    src="/images/img_1_sq.jpg"
                                                    alt="Image placeholder"
                                                    className="me-4 rounded"
                                                />
                                                <div className="text pl-5">
                                                    <h4 className="text-white">
                                                        There’s Link Cool New
                                                        Way for Men href Wear
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
                                                <div className="text pl-5">
                                                    <h4 className="text-white">
                                                        There’s Link Cool New
                                                        Way for Men href Wear
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
                                                <div className="text pl-5">
                                                    <h4 className="text-white">
                                                        There’s Link Cool New
                                                        Way for Men href Wear
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
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p>
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                . All Rights Reserved. &mdash; Designed with
                                love by{" "}
                                <Link href="https://untree.co">Untree.co</Link>{" "}
                                Distributed by{" "}
                                <Link href="https://themewagon.com">
                                    ThemeWagon
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div id="overlayer"></div>
            <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> */}
        </>
    );
}
