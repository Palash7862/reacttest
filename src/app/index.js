import React from "react";
import {render} from "react-dom";

import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink : "Brand Logo"
        };
    }
    onGreed(){
        alert("I am App");
    }

    onChangeLinkName(newName){
        this.setState({
            homeLink: newName
        });
    }

    render(){
        var user = {
            name: "pkm",
            hobes: ["game", "book"],
            msg: 55
        };
        return(
            <div className="home-page">
                <header className="site-header">
                    <div className="container">
                        <Header homeLink={this.state.homeLink}/>
                    </div>
                </header>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>Hello!</h1>
                            <Home
                                name={"Some Name"}
                                initialAge={35}
                                user={user}
                                greet={this.onGreed}
                                changeLink={this.onChangeLinkName.bind(this)}
                            >
                                <p>This is child paragraph</p>
                            </Home>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));