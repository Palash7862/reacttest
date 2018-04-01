import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {
    constructor(props){
        super();

        this.state = {
            age : props.initialAge,
            status: 0,
            homeLink: "Brand New Logo"
        };
    }

    onMakeNewer(){
        if (this.state.age > 13){
            this.setState({
                age: this.state.age -3
            });
        }
    }

    onMakeOlder(e){
        //console.log(this);
        //e.preventDefault();
        this.setState({
            age: this.state.age + 3
        });
        //console.log(this.age);
    }

    onChangeLink(){
        this.props.changeLink(this.state.homeLink);
    }

    onChangeBrand(event){
        this.setState({
            homeLink: event.target.value
        });
    }

    render(){
        //console.log(this.props);
        return(
            <div className="alert alert-primary" role="alert">
                <p>In a new component -  {4+5}</p>
                <h2>User Name : {this.props.name}</h2>
                <h3>User Name Two : {this.props.nameTwo}</h3>
                <h4>User Age : {this.state.age}</h4>
                <h6>Status : {this.state.status}</h6>
                <ul>
                    {this.props.user.hobes.map((hobe, i)=><li key="{i}">{hobe}</li>)}
                </ul>
                <hr/>
                {this.props.children}
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make Me Old</button>
                <button onClick={() => this.onMakeNewer()} className="btn btn-primary">Make Me New</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Go</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)}>Home logo Change</button>
                <hr/>

                <input type="text"
                       value={this.state.homeLink}
                       onChange={(event)=> this.onChangeBrand(event)} />

                <button onClick={this.onChangeLink.bind(this)}>Change Logo</button>
            </div>
        );
    }

}
Home.propTypes = {
    name: PropTypes.string.isRequired,
    initialAge: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};
// Specifies the default values for props:
Home.defaultProps = {
    nameTwo: 'Palash'
};