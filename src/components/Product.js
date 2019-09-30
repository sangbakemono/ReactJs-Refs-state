import React, { Component } from 'react';

class Product extends Component {
    // constructor(props) {
    //     super(props);
    //     console.log(props);
    //     this.onAddToCart = this.onAddToCart.bind(this);
    // }
    
    // onAddToCart() {
    //     alert(this.props.children + ' - ' +this.props.price);
    // }

    onAddToCart2 = () => {
        alert(this.props.children);
    }

    render() {
        return (
            <div>                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img  alt={this.props.children} src={this.props.images} />
                        <div className="caption">
                            <h3>
                                {this.props.children}
                            </h3>
                            <p>
                                {this.props.price} vnd
                            </p>
                            <p>
                                <a href="/" className="btn btn-primary">Mua ngay</a> &nbsp;
                                <a href="/" className="btn btn-info" onClick={this.onAddToCart2}>Mua ngay</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Product;