import React, {Component} from 'react';

class Header extends Component {
  render() {
    return(
        <nav className="navbar navbar-inverse">
        	<div className="container-fluid">
        		<a href="/" className="navbar-brand">ReactJs Component</a>
        		<ul className="nav navbar-nav">
        			<li>
        				<a href="/">Trang chủ</a>
        			</li>
        			<li className="active">
        				<a href="Product.js">Danh mục sản phẩm</a>
        			</li>
        		</ul>
        	</div>
        </nav>
      );
  }
}

export default Header;
