import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Home extends Component {
    constructor() {
        super();

        this.state = {
            accountBalance: 0,
            debits: 0,
            credits: 0,
        }
    }

    componentDidMount() {
        this.getBalance();
    }
    
    getBalance = () => {
        
        axios.get('/debits')
        .then((response) => {
            this.setState({debits: response.data});
        }).then(

            axios.get('/credits')
            .then((response) => {
                this.setState({ credits: response.data });
                this.setState({ accountBalance: this.calculateBalance(this.state.debits, this.state.credits) });
            })
        )
            
    }

    calculateBalance = (debits, credits) => {   
            let debitsAmount = 0
            debits.forEach(debit => {
                debitsAmount += debit.amount;
            });
            let creditsAmount = 0
            credits.forEach(credit => {
                creditsAmount += credit.amount;
            });
            
            return (creditsAmount - debitsAmount).toFixed(2);
    }

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
                
                

                <AccountBalance accountBalance={this.state.accountBalance}/>
            </div>
        );
    }
}

export default Home;