import { Link } from "@inertiajs/react";

export default function Navigation({ jsonData }) {
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
                                        Blogy
                                        <span className="text-primary">.</span>
                                    </Link>
                                </div>
                                <div className="col-8 text-center">
                                    <form
                                        action="#"
                                        className="search-form d-inline-block d-lg-none"
                                    >
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search..."
                                        />
                                        <span className="bi-search"></span>
                                    </form>

                                    <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu mx-auto">
                                        <li className="active">
                                            <Link href="/">Home</Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="">Pages</Link>
                                            <ul className="dropdown">
                                                <li>
                                                    <Link href="/search-result">
                                                        Search Result
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">
                                                        Blog
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about">
                                                        About
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">
                                                        Contact Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="">
                                                        Category
                                                    </Link>
                                                </li>
                                                <li className="has-children">
                                                    <Link href="#">
                                                        Dropdown
                                                    </Link>
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="#">
                                                                Sub Menu One
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Sub Menu Two
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="#">
                                                                Sub Menu Three
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* {jsonData
                                            ? jsonData.categories.map(
                                                  (item) => {
                                                      return (
                                                          <li key={item.id}>
                                                              <Link
                                                                  href={route(
                                                                      "category.show",
                                                                      {
                                                                          category_id:
                                                                              item.id,
                                                                      }
                                                                  )}
                                                              >
                                                                  {item.name}
                                                              </Link>
                                                          </li>
                                                      );
                                                  }
                                              )
                                            : ""} */}
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
                                            className="form-control"
                                            placeholder="Search..."
                                        />
                                        <span className="bi-search"></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
