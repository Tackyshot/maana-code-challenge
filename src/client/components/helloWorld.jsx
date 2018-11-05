import * as React from 'react';

export default class HelloWorldComponent extends React.Component {
    constructor (props){
        super(props);
    }//end constructor
    
    render (){
        return (
            <p>Hello {this.props.greetingTarget ? this.props.greetingTarget : 'World'}</p>
        )
    }//end render
}