import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Home extends Component {



    render() {
     
        return (
            <div>
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
                <h1>Bank of React</h1>
                <Link to="/userProfile">User Profile</Link>
                <br></br>
                <Link to="/login">Log In</Link>
                <br></br>
                <Link to="/debits">Debits</Link>               
            </div>
        );
    }
}

export default Home;