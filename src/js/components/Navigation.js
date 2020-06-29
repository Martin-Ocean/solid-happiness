import React, { Component } from 'react'
import mobx, {ProtoTypes } from 'mobx-react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../img/icon_3.0.1.png'


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll: false
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        let passInnerHeight = window.pageYOffset > window.innerHeight ? true : false; // compare the current offset of Y to view port height.

        // first scroll after component mounted/page ready
        if (passInnerHeight && !this.state.scroll) { // if currentHeight does exceed viewport height and scroll was never changed to true.
            this.setState({scroll:passInnerHeight}); // setState to change scroll to true
        } 
        
        // scroll back top top of the page
        if (!passInnerHeight && this.state.scroll) { // if Y offset exceeds viewport height and scroll has chandged to true
            this.setState({scroll:passInnerHeight}); // update state to change scroll to false
        }
    }

    render() {
        const {
            scroll
        } = this.state;
        //let NavbarProp = {bg="light"};
        return(
          <div>
              <Navbar expand="md" fixed="top" bg={scroll? "light" : "none"} variant={scroll? "light" : "dark"}>
                  <Navbar.Brand href="#home">
                      <img
                        src={logo}
                        width="30"
                        height="30"
                        className="block align-top"
                        alt="M Logo"
                      />
                  </Navbar.Brand>
                  <Nav className="mr-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#section2">Section2</Nav.Link>
                      <Nav.Link href="#section3">Section3</Nav.Link>
                  </Nav>
              </Navbar>
          </div>  
        );
    }
}

export default Navigation