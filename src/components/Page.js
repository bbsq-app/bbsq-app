import React from 'react';

var Page =  React.createClass({
    handleToggle: function() {
    this.props.onUserToogle(
      this.refs.filterTextInput.value,
      this.refs.inStockOnlyInput.checked
    );
  },

    render() {
      var divStyle = {
        
       
        display: 'inline-block',
        padding: '6px 12px',
        color: '#333',
        'backgroundColor': '#fff',
        'borderColor': '#ccc',
         border: '1px solid transparent',
        'borderRadius': '4px'
        
    };
    return (
    <form>
    <div >
          <button style={divStyle}>#</button>    
          

          <button onClick={this.props.toggleA} style={divStyle} ref="inputA">A</button>    
          

          
          <input
            type="button"
            value="B"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="C"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="D"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="E"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="F"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="G"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="H"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="I"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="J"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="K"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="L"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="M"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="N"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="O"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="P"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="Q"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="R"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="S"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="T"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="U"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="V"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="W"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="X"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="Y"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
          <input
            type="button"
            value="Z"
            checked={this.props.inStockOnly}
            ref="inStockOnlyInput"
            onChange={this.handleChange}
            style={divStyle}
          />
       </div>    
            
    </form>
        
    );
    }
    });
  
   

module.exports = Page;