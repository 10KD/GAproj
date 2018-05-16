import React, { Component } from 'react'
import axios from 'axios'

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
                <div key={i}>
                    <p>{debit.description}</p>
                    <p>{debit.amount}</p>
                    <p>{debit.date}</p>
                </div>
            );
        });
        return (
            <div>
                <h1>Debits</h1>
                {debitComponents}
            </div>
        )
    }
}

export default DebitsList