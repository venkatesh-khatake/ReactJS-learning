import React,{Component} from 'react';

class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {name : 'Venkatesh'};
    }

    render(){
        return(
            <>
            <h1>Hello,{this.state.name}</h1>

            <h2>This is Class Component</h2>
            <p>The Class component is a Javascript ES6 class that 
                <br /> extends 'react.Component' and uses a 'render()'
                <br /> method to return JSX.

                <br />
                <br />
                It can manage state and use lifecycle methods like <br />    
                'componentDidMount()', 'componentDidUpdate()', etc..
            </p>
            </>
        ) 
    }

}
export default ClassComponent;