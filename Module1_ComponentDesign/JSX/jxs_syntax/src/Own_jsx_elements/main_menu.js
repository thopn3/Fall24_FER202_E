// Định nghĩa 1 jsx element thông qua cú pháp class
import React from "react";

class MainMenu extends React.Component{
    render(){
        // Trả về 1 element
        return (
            <nav>
                {this.props.children}
            </nav>
        )
    }
}

export default MainMenu;