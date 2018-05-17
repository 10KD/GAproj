import React, { Component } from 'react';

import Product from './Product';

class ProductList extends Component {
    render() {
        const productList = this.props.productList;

        console.log(productList);

        const productComponents = productList.map((product, index) => {
            return (
                <div>
                    <Product
                    productName={product.productName}
                    description={product.description}
                    price={product.price}
                    key={index} />;
                    {   
                        this.props.adminView ? 
                            <button
                                onClick={() => this.props.deleteProduct(product, index)}>
                                Delete
                            </button> : null
                    }
                </div>
            );
        });

        return (
            <div>
                {productComponents}
            </div>
        );

    }
}

export default ProductList;