import React from 'react';
import {Age} from './age';
import {Home} from './home';
import {Input} from './input';

export class Test extends React.Component{
    render(){
        return(
            <div>
                <Input />
                <Home home="Napoli"/>
                <Age age="5"/>
            </div>
        )
    }
}