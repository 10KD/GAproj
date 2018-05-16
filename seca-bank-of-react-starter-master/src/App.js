import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from "./components/Login";
import DebitsList from './components/DebitsList';
import './App.css';
import axios from 'axios';
import AccountBalance from './components/AccountBalance';


class App extends Component {

    constructor() {
        super();

        this.state = {
            accountBalance: 0,
            currentUser: {
                userName: 'bob_loblaw',
                memberSince: '08/23/99',
            }
        }
    }

 

    componentDidMount() {
        this.getBalance();
    }

    getBalance = () => {

        axios.get('/debits')
            .then((response) => {
                this.setState({ debits: response.data });
            }).then(
                axios.get('/credits')
                    .then((response) => {
                        this.setState({ credits: response.data });
                        if (this.state.debits) {    
                            this.setState({ accountBalance: this.calculateBalance(this.state.debits, this.state.credits) });
                        }
                    })
            )

    }

    calculateBalance = (debits, credits) => {
        console.log(debits);
        console.log(credits);
        
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
    

    mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
    }

    render() {

        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>)
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
        )
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props}/>)
        

        return (
            <Router>
                <div>
                    <Route exact path="/" render={HomeComponent}/>
                    <Route exact path="/userProfile" render={UserProfileComponent}/>
                    <Route exact path="/login" render={LogInComponent}/>
                    <Route exact path="/debits" component={DebitsList}/>
                    <AccountBalance accountBalance={this.state.accountBalance} />
                </div>
            </Router>
        );
    }

}

export default App;