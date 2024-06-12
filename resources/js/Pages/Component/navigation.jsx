import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJsonData } from "@/features/jsonData/jsonDataSlice";

export default function Navigation({ auth }) {
    const dispatch = useDispatch();
    const jsonData = useSelector((state) => state.jsonData.jsonData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/json/data.json"); // Assuming data.json is in the public directory
                const jsonData = await response.json();
                return jsonData;
            } catch (error) {
                return "";
            }
        };

        fetchData().then((data) => {
            dispatch(setJsonData(data));
        });
    }, []);

    return (
        <>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <nav className="site-nav">
                <div className="container">
                    <div className="menu-bg-wrap">
                        <div className="site-navigation">
                            <div className="row g-0 align-items-center">
                                <div className="col-2">
                                    <Link
                                        href="/"
                                        className="logo m-0 float-start"
                                    >
                                        PROJECT | KIT
                                    </Link>
                                </div>

                                <div className="col-6 text-center">
                                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                        <li className="has-children">
                                            <Link>Language</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="#">PHP</Link>
                                                </li>
                                                <li>
                                                    <Link href="">HTML5</Link>
                                                </li>
                                                <li>
                                                    <Link href="">CSS3</Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        JavaScript
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">Java</Link>
                                                </li>
                                                <li>
                                                    <Link href="">Python</Link>
                                                </li>
                                                <li>
                                                    <Link href="">C#</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>Libraray</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="#">jQuery</Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        Alpine.js
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">Vite</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>Framework</Link>
                                            <ul className="dropdown">
                                                <li className="has-children">
                                                    <Link href="#">PHP</Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Laravel/Livewire
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Cake PHP
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Symfony
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">
                                                        JavaScript
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                React.js
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Next.js
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Vue.js
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Svelte
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Alpine.js
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">
                                                        TypeScript
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Angular.JS
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">Java</Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                JSP
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Spring Boot
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">Python</Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Dijango
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">Ruby</Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Ruby on Rails
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">C#</Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                ASP
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>Database</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="#">MySQL</Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        PostgreSQL
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">SQLite</Link>
                                                </li>
                                                <li>
                                                    <Link href="">MongoDB</Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>UI</Link>
                                            <ul className="dropdown">
                                                <li className="has-children">
                                                    <Link href="#">
                                                        Tailwind CSS
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Flowbite
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                TailGrids
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Material
                                                                Tailwind
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        Boostrap 5
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>Service</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="">
                                                        Laravel Forge
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        Laravel Vapor
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">Docker</Link>
                                                </li>
                                                <li>
                                                    <Link href="">AWS</Link>
                                                </li>
                                                <li>
                                                    <Link href="">Heroku</Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        DigtalOcean
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>

                                        <li className="has-children">
                                            <Link>Tools</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="">GitHub</Link>
                                                </li>
                                                <li>
                                                    <Link href="">GitLab</Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        Bitbucket
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-2 text-end">
                                    <Link
                                        href="#"
                                        className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                                    >
                                        <span></span>
                                    </Link>
                                    <form className="search-form d-none d-lg-inline-block">
                                        <input
                                            type="text"
                                            className="form-control text-white"
                                            placeholder="Search..."
                                        />
                                        <span className="bi-search"></span>
                                    </form>
                                </div>
                                <div className="col-2 text-right">
                                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                        {!auth.user ? (
                                            <>
                                                <li>
                                                    <Link href={route("login")}>
                                                        Login
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        href={route("register")}
                                                    >
                                                        Sign Up
                                                    </Link>
                                                </li>
                                            </>
                                        ) : (
                                            <li>
                                                <Link href={route("dashboard")}>
                                                    Dashboard
                                                </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
