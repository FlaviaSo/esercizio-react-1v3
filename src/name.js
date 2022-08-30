import React from "react";

export class Name extends React.Component{
    render(){
        return(
            <>
            <p>Ciao, mi chiamo {this.props.name}.</p>
            </>
        )
    }
}

Name.defaultProps={
    name: "Flavia"
};