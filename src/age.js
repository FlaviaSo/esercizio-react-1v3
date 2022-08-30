import React from "react";
import './age.css';

export class Age extends React.Component{
    render(){
        let variabile = this.props.age > 18 ? "sei maggiorenne":"vai via che sei minorenne"
        let classe = this.props.age > 18 ? "green":"red"
        return(
            <>
            <p>La mia età è: {this.props.age}.</p>
            <p className={classe}>{variabile}</p>
            </>
        )
    }
}