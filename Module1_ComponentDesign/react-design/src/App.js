import "./App.css";
// Khai báo các component trong react-bootstrap để thiết kế UI
import { Col, Container, Row } from "react-bootstrap";
import Header from "./template/header";
import Menu from "./template/menu";
import Banner from "./template/banner";
import Content from "./template/content";
import Footer from "./template/footer";

function App() {
  return (
    <Container fluid>
      <Header/>
      <Menu/>
      <Banner/>
      <Content/>
      <Footer/>
    </Container>
  );
}

export default App;
