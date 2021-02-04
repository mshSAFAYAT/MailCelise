import React from "react";


const Headbar = () => {
    return (
        <div>
            <nav style={{ marginLeft: 90 }}>
                <div className="nav-wrapper" style={{ marginLeft: 100 }}>
                    <a className="brand-logo" style={{ marginLeft: 15 }}>
                        <img src={"https://lh3.googleusercontent.com/proxy/1oHGa9yZZpCZOB0hJUqxrd5HoGhZv57iEPwcPYTqh4nsJ4VaT5En-Bt8pSwcaflfv7giYZcDSiNSJqyDnq4e6rO4mhewLRxEJUuKnW7r7C9yDGcixagxSKLnXuao_A"}
                            alt=""
                            style={{ height: "64px" }} />
                    </a>
                    <a className="brand-logo" style={{ marginLeft: 800 }}>
                        Mail
          </a>
                    <ul className="right hide-on-med-and-down" style={{ marginRight: 200 }}>
                        <li><a href="sass.html"><i className="material-icons">edit</i></a></li>
                        <li><a href="badges.html"><i className="material-icons">forward</i></a></li>
                        <li><a href="collapsible.html"><i className="material-icons">folder</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">delete</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">youtube_searched_for</i></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Headbar;