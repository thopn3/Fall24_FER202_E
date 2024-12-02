// Khai báo thư viện sử dụng lớp cha Component
import {Component} from "react";

// Tạo ra 1 class Component
class ClsComponent extends Component{
    // Khởi gán các thuộc tính ban đầu: props (để nhận dữ liệu cho Component), state (quản lý trạng thái dữ liệu của Compoent)
    constructor(props){
        super(props);
        this.state = {count: 0}
    }

    componentDidMount(){
        console.log("Component mounted");
    }

    componentWillUnmount(){
        console.log("Component will Unmounting");
    }

    componentDidUpdate(){
        console.log("Component updated");
    }

    increment = () => {
        // Thay đổi giá trị của count trong state tăng lên 1 đơn vị
        this.setState(prevState => ({count: prevState.count + 1}));
    }
    
    
    // Hàm render để trả về 1 React element -> được gắn vào DOM tree
    render(){
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
                <button onClick={this.increment}>Increment count</button>
                <button>Decrement count</button>
            </div>
        )
    }
}

export default ClsComponent;

