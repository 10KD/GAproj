import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class DebitsList extends Component {

  

    render() {
        const debitStyles = {
            color: "black",
            fontSize: '14px',
            borderBottom: "1px solid"
        };
        if (this.props.debits) {
            
            const debitComponents = this.props.debits.map((debit, i) => {
                return (
                    <div key={i} style={debitStyles}>
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
            );
        }
    }
}

export default DebitsList