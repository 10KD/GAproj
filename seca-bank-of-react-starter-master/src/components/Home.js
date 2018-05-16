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
        })
        axios.get('/credits')
        .then((response) => {
            this.setState({credits: response.data});
        }).then((response) => {

            this.setState({ accountBalance: this.calculateBalance(this.state.debits, this.state.credits)});
        });
        

            
            
    }

    calculateBalance = (debits, credits) => {
        if (debits && credits) {
            // console.log(debits);
            // console.log(credits);
            
            let sum1 = 0
            let debitsAmount = debits.forEach(debit => {
                sum1 += debit.amount;
            });
            let sum2 = 0
            let creditsAmount = credits.forEach(credit => {
                sum2 += credit.amount;
            });
            console.log(creditsAmount - debitsAmount);
            
            return creditsAmount - debitsAmount;
        }
    }

    render() {
     
        return (
            <div>
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
                <h1>Bank of React</h1>
                <Link to="/userProfile">User Profile</Link>
                <br></br>
                <Link to="/login">Log In</Link>
                
                

                <AccountBalance accountBalance={this.state.accountBalance}/>
            </div>
        );
    }
}

export default Home;