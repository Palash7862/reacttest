import React from "react";

export class Header extends React.Component {
    render(){
        return(

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand" href="">{this.props.homeLink}</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="">Home</a></li>
                        </ul>
                    </div>
                </nav>
        );
    }
}