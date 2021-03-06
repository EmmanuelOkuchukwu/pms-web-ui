import React, { Component} from 'react'
// import { Link } from 'react-router-dom'
import './navBar.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {authService} from "../../../Service/api/AuthService";
import {history} from "../../../Util/HistoryUtil";
class Header extends Component {
    constructor(props) {
        super(props);
        // binding all the functions
        this.toggle = this.toggle.bind(this);
        // setting all the states
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false,
            redirect: "false",
            userInfo: {}
        };
    }

    logout() {
        // injects the onLogout function into navbar class from authService
        authService.onLogout();
        // redirects the user back to the login page once they have logged out
        history.push("/");
    }

    componentDidMount() {
        // defining currentUser as constable with reference to currentUserValue from authService class
        const currentUser = authService.currentUserValue;
        // setting userInfo state with currentUser state
        this.setState ({
            userInfo: currentUser
        })
    }
    // event to open the modal
    // code based on https://bit.dev/reactstrap/reactstrap/modal
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { navCollapsed, userInfo } = this.state
        return (
            <div>
                <Navbar className="nav-bar" light expand="md">
                    <NavbarBrand href="/"><img src="/Images/PCMS-Logo.jpg" alt="NHS Logo" id="pcms-logo" height="52" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <i className="fas fa-user" height="32"/>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle tag="a" className="nav-link" nav caret>
                                    <b>{userInfo.fullName}</b>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="btn-link-nav" tag="a" onClick={this.logout}><i className="fas fa-sign-out-alt" />&nbsp;Logout</DropdownItem>
                                    <DropdownItem href="/home"><i className="fas fa-home" />&nbsp;Homepage</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header