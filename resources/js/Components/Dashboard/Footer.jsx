import React from "react";
import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                Binung © , made with{" "}
                                <i className="fa fa-heart" /> by Creative Tim
                                for Link better web.
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <Link
                                        href="/"
                                        className="nav-link text-muted"
                                        target="_blank"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="https://github.com/binung"
                                        className="nav-link text-muted"
                                        target="_blank"
                                    >
                                        GitHub
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        href="https://github.com/binung"
                                        className="nav-link text-muted"
                                        target="_blank"
                                    >
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
