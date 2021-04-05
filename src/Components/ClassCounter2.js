import React, { Component } from 'react';

class ClassCounter2 extends Component {
    constructor(props){
        super(props);

        this.state = {
            count:0
        }
    }

    componentDidMount(){
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        document.title = `Click ${this.state.count} times`
    }

    render() {
        return (
            <div>
                <h1>ClassCounter2</h1>
                <button onClick = {() => this.setState({count: this.state.count + 1})}>Clicked {this.state.count} times</button>
                <br/>
                Title also varies with the button click!
            </div>
        );
    }
}

export default ClassCounter2;