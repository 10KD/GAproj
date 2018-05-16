import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DebitsList extends Component {

    state = {
        debits: []
    }

    componentDidMount() {
        axios.get('/debits')
            .then((response) => {
                this.setState({debits: response.data})
            })
    }

    render() {
        const debitComponents = this.state.debits.map((debit, i) => {
            return (
                <div key={i} className="debit-unit">
                    <p>{debit.description}</p>
                    <p>{debit.amount}</p>
                    <p>{debit.date}</p>
                </div>
            );
        });
        return (
            <div className="debit">
                <h1>Debits</h1>
                {debitComponents}
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default DebitsList