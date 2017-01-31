import React from 'react';

var Page =  React.createClass({
    
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
          
          <button onClick={this.props.toggleButtonHash} style={divStyle}>#</button> 
          <button onClick={this.props.toggleButtonA} style={divStyle}>A</button> 
          <button onClick={this.props.toggleButtonB} style={divStyle}>B</button> 
          <button onClick={this.props.toggleButtonC} style={divStyle}>C</button> 
          <button onClick={this.props.toggleButtonD} style={divStyle}>D</button> 
          <button onClick={this.props.toggleButtonE} style={divStyle}>E</button> 
          <button onClick={this.props.toggleButtonF} style={divStyle}>F</button> 
          <button onClick={this.props.toggleButtonG} style={divStyle}>G</button> 
          <button onClick={this.props.toggleButtonH} style={divStyle}>H</button> 
          <button onClick={this.props.toggleButtonI} style={divStyle}>I</button> 
          <button onClick={this.props.toggleButtonJ} style={divStyle}>J</button> 
          <button onClick={this.props.toggleButtonK} style={divStyle}>K</button> 
          <button onClick={this.props.toggleButtonL} style={divStyle}>L</button> 
          <button onClick={this.props.toggleButtonM} style={divStyle}>M</button> 
          <button onClick={this.props.toggleButtonN} style={divStyle}>N</button> 
          <button onClick={this.props.toggleButtonO} style={divStyle}>O</button> 
          <button onClick={this.props.toggleButtonP} style={divStyle}>P</button> 
          <button onClick={this.props.toggleButtonQ} style={divStyle}>Q</button> 
          <button onClick={this.props.toggleButtonR} style={divStyle}>R</button> 
          <button onClick={this.props.toggleButtonS} style={divStyle}>S</button> 
          <button onClick={this.props.toggleButtonT} style={divStyle}>T</button> 
          <button onClick={this.props.toggleButtonU} style={divStyle}>U</button> 
          <button onClick={this.props.toggleButtonV} style={divStyle}>V</button> 
          <button onClick={this.props.toggleButtonW} style={divStyle}>W</button> 
          <button onClick={this.props.toggleButtonX} style={divStyle}>X</button> 
          <button onClick={this.props.toggleButtonY} style={divStyle}>Y</button> 
          <button onClick={this.props.toggleButtonZ} style={divStyle}>Z</button> 

       
       </div>    
            
    </form>
        
    );
    }
    });
  
   

module.exports = Page;