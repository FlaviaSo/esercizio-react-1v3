import React from 'react'
import {Name} from './name'

export class Input extends React.Component{
    state = {name:""}
    handleNameChange = (e) => {
                                const value = e.target.value;
                                this.setState(
                                    {
                                        name: value
                                    }
                                )
                            }
    render(){
        return(
            <div>
                <input value={this.state.name} onChange={this.handleNameChange}></input>
                <Name name={this.state.name}/>
            </div>
        )
    }
}