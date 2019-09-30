import React, { Component } from 'react';

class Footer extends Component {
    showInfoProduct(product){
        if(product.status)
        return <h3>
                    Id: {product.id} <br/>
                    Name: {product.name} <br/>
                    price: {product.price} <br/>
                    status: {product.status? 'Active' : 'pending'}
                </h3>
    }

    render() {
        var product = {
            id: 1,
            name: 'Iphone 8 plus',
            price: 14000000,
            status: true
        };

        var users = [
            {
                id: 1,
                name: 'Nguyen van A',
                age: 18
            },
            {
                id: 2,
                name: 'Cao Thi B',
                age: 19
            },
            {
                id: 3,
                name: 'Nguyen thi C',
                age: 20
            }
        ];
        var elements = users.map((user,index)=>{
            return <div key={user.id}>
                        <h2>Ten: {user.name}</h2>
                        <h4>Tuoi: {user.age}</h4>
                   </div>
        });
        return (
            <div>
                {this.showInfoProduct(product)}
                <br/>
                {elements}
            </div>
        );
    }
}

export default Footer;