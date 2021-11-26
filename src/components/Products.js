import React, { Component } from "react";
import Product from "./Product";
import LoadingProducts from "../loaders/Products";
import NoResults from "../empty-states/NoResults";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import Filter from './Filter';

class Products extends Component {
  constructor() {
    super();
    this.setNewVal=this.setNewVal.bind(this);
  }
  setNewVal(newval){
    const propVal={min:newval.min,max:newval.max};
    this.props.updateVal(propVal);
    console.log("aro1:" + propVal.max);
  }
  render() {
    let productsData;
    let term = this.props.searchTerm;
    let x;
    let filterAmt=this.props.filterByAmount;
    function searchingFor(term) {
      return function(x) {//additionally added filter with price  
        return (x.name.toLowerCase().includes(term.toLowerCase()) || !term) && x.price>=filterAmt.min && x.price<=filterAmt.max;
      };
    }
    productsData = this.props.productsList
      .filter(searchingFor(term))
      .map(product => {
        return (
          <Product
            key={product.id}
            price={product.price}
            name={product.name}
            //image={product.img_url}
            image={product.image}
            id={product.id}
            discount={product.discount}
            category={product.category}
            addToCart={this.props.addToCart}
            productQuantity={this.props.productQuantity}
            updateQuantity={this.props.updateQuantity}
            openModal={this.props.openModal}
          />
        );
      });

    // Empty and Loading States
    let view;
    if (productsData.length <= 0 && !term) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && term) {
      view = <NoResults />;
    } else {
      view = (
        <CSSTransitionGroup
          transitionName="fadeIn"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="products"
        >
          {productsData}
        </CSSTransitionGroup>
      );
    }
    return (
      <div className="products-wrapper">
        <div className="filter">
          <div className="cap-filter"><b>Filters</b></div>
          <Filter value={filterAmt} onChange={this.setNewVal} />
        </div>
        {view}
      </div>
    );
  }
}

export default Products;
