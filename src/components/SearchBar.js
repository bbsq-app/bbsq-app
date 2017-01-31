import React from 'react';

var SearchBar = React.createClass({
  handleChange: function() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },
  render: function() {
    var divStyle = {
        
        display: 'inline-block',
        width: '100%',
        borderRadius: '4px',
        height: '34px',
        padding: '6px 12px',
        border: '1px solid #ccc'
            
    };
    return (
    <form>     
       <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange}
          style={divStyle}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
          />
          {' '}
          Only show products in stock
        </p>
    </form>  
    );
  }
});
module.exports = SearchBar;