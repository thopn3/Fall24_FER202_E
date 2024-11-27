import React, {Component} from "react";

class MyComponent extends Component{
    render(){
        return (
            <section>
                <h1>MyComponent</h1>
                {this.props.children}
            </section>
        )
    }
}

class Child1 extends Component{
    render(){
        return (
            <div>
                Child 1
            </div>
        )
    }
}
class Child2 extends Component{
    render(){
        return (
            <div>
                Child 2
            </div>
        )
    }
}

// Chỉ định 2 component trong cùng namespace của MyComponent
MyComponent.First = Child1;
MyComponent.Second = Child2;

export default MyComponent;
