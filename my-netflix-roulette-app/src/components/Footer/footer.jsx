import React from "react";
import { Component } from "react";
import Logo from "../Logo/logo";
import './footer.css';

class Footer extends Component {
    render(){
        return (
            <footer className="footer">
               <Logo center />
            </footer>
        );
    }
}

export default Footer;