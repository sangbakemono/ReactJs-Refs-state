import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  onAddProduct =() =>{
    console.log(this.refs.name.value);
  }

  constructor(props) {
    super(props);
    this.state ={
      products : [
        {
          id: 1,
          name: 'App Iphone XS Max',
          price: 25000000,
          images: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
          status: true
        },
        {
          id: 2,
          name: 'Samsung Galaxy Note 10',
          price: 23000000,
          images: 'https://www.91-img.com/pictures/130585-v7-samsung-galaxy-note-10-mobile-phone-large-1.jpg',
          status: true
        },
        {
          id: 3,
          name: 'Samsung Galaxy S10',
          price: 18000000,
          images: 'https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg',
          status: true
        },
      ],
      isActive : true
    };
  }
  
  onSetState =() =>{
    this.setState({
      isActive: !this.state.isActive
    });
  }
  render() {
    var products = [
      {
        id: 1,
        name: 'App Iphone XS Max',
        price: 25000000,
        images: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        status: true
      },
      {
        id: 2,
        name: 'Samsung Galaxy Note 10',
        price: 23000000,
        images: 'https://www.91-img.com/pictures/130585-v7-samsung-galaxy-note-10-mobile-phone-large-1.jpg',
        status: true
      },
      {
        id: 3,
        name: 'Samsung Galaxy S10',
        price: 18000000,
        images: 'https://www.91-img.com/pictures/128392-v7-samsung-galaxy-s10-plus-mobile-phone-large-1.jpg',
        status: true
      },
    ];

    let elements = products.map((product, index) =>{
      let result ='';
      if(product.status){
        result= <Product 
                    key ={product.id}
                    price={product.price}
                    images={product.images}
                    status={product.status}>
                    {product.name}
                </Product>
      }
        return result;
    });
    let elementsa = this.state.products.map((product, index) =>{
      let result ='';
      if(product.status){
        result= <tr key={product.id}>
                  <td>{index}</td>
                  <td>{product.name}</td>
                  <td>                            
                    <span className="label label-success">{product.price} VND</span>                           
                  </td>
                </tr>
      }
        return result;
    });
    return (
      <div>        
        <Header/>
        <div className="container">          
          <div className="row">           
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Thêm sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input type="text" className="form-control" ref="name"/>
                  </div>
                  <button type="submit" className="btn btn-primary" onClick={this.onAddProduct}>
                    Lưu
                  </button>
                </div>
              </div>
            </div>            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {elements}
            </div>  
            
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">              
              <div className="panel panel-danger">
                  <div className="panel-heading">
                    <h3 className="panel-title">State</h3>
                  </div>
                  <div className="panel-body">                    
                    <table className="table table-bordered table-hover">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên sản phẩm</th>
                          <th>Giá</th>
                        </tr>
                      </thead>
                      <tbody>
                        {elementsa}
                      </tbody>
                    </table>   
                    
                    <button type="button" className="btn btn-warning" onClick={this.onSetState}>
                      button {this.state.isActive === true ? 'true' : 'false'}
                    </button>
                                     
                  </div>
              </div>              
            </div>                                
          </div>          
        </div> 
        <Footer />      
      </div>
    );
  }
}

export default App;
