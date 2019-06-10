import React from 'react'

// In react, there is no default 2 way binding, model->view binding is already implemented, but view->model binding needs to be done by developers.
// to implement view->model binding:
// 1). use event listener (onChange etc.) to call set value to state.
// 2). use this.setState() to set value to state.
export default class DataTwoWayBinding extends React.Component {

    constructor() {
        super();
        this.state = {
            id : '007',
            name : 'James Bond',
            phone : '123456789'
        }
    }

    render() {
        return <div>
            <h1>Implement 2 way binding in React</h1>
            <div>
                Output Text: <span>{this.state.id}</span>
            </div><br/>
            <div>
                Input Text: <input type="text" value={this.state.id} onChange={() => this.setIdValue()} ref="inputField" />
            </div>
        </div>
    }

    // always use lambda function to make sure 'this' is working correctly inside this function
    setIdValue = () => {
        console.log(this.refs.inputField);

        // get input value by ref name
        const valueToSet = this.refs.inputField.value;
        this.setState({
            id : valueToSet
        })
    }
}