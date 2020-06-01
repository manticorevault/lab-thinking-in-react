import React, { Component } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      displayStockedProducts: false,
    };
  }

  updateSearchQuery = (event) => {
    const value = event.target.value;
    console.log(value);
    this.setState({
      searchQuery: value,
      onlyDisplayStockedProducts: true,
    });
  };

  updateDisplayStockedProducts = (event) => {
    this.setState({
      onlyDisplayStockedProducts: event.target.checked,
    });
  };
  render() {
    const products = this.props.products.filter((product) => {
      if (this.state.onlyDisplayStockedProducts && !product.stocked) {
        return false;
      }
      return product.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });

    return (
      <div>
        <h1> Store </h1>
        <SearchBar
          query={this.state.searchQuery}
          handleInputChange={this.updateSearchQuery}
          onlyAllowStocked={this.state.onlyAllowStocked}
          handleCheckboxChanged={this.updateDisplayStockedProducts}
        />
        <ProductTable products={products} />
      </div>
    );
  }
}
