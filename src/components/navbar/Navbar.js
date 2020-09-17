import React, { Component } from 'react';
import './Navbar.css';
import { MenuItems} from './MenuItems';
class Navbar extends Component {

    state = {clicked: false}

    handleClick =() => {
        this.setState({ clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className="NavbarItems">
                {/* <h1>Welcome to RAP Classes</h1> */}
                <h1 className="navbar-logo">RAP Classes<i className="fab fa-react"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item, index) => {
                            return (
                               <li key={index}>
                                   <a href={item.url} className={item.cName}>
                                        {item.title}
                                    </a>
                               </li>
                            )
                        })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;