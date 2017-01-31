import React from 'react';

var SearchBarDefault = React.createClass({
  handleChange: function() {
    console.log("inside handleChange");
    this.props.onUserInput(
      this.refs.filterTextInput.value
    );
  },
  render: function() {
    var divStyle = {
        
        display: 'inline-block',
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
        />&nbsp;
        <p>
          
          {' '}
          
        </p>

    </form>  
    );
  }
});
module.exports = SearchBarDefault;