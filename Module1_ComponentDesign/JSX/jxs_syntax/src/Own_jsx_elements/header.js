// Định nghĩa 1 jsx element thông qua cú pháp class
import React from "react";

class Header extends React.Component{
    render(){
        // Trả về 1 element
        return (
            <header>
                <h3>Top menu</h3>
                {/* Chèn 1 element con tại vị trí này */}
                {this.props.children}
            </header>
        )
    }
}

export default Header;