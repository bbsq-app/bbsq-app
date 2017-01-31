import React from 'react';
import {Label}  from 'react-bootstrap';

var Subject = React.createClass({
  render: function() { 
    var label= this.props.label;    
    return (
      <div className='labelLeft'>
        &nbsp;<Label bsStyle="info">{label}</Label>
      </div>  
    );
  }
});

var LabelList = React.createClass({
render: function() {
 //console.log(this.props.subjectList);
  var labelList=[];
  if(Array.isArray(this.props.labelList)){
    this.props.labelList.forEach(function(label){
          labelList.push(<Subject key={label.label} label={label.label}/>);
    });
  }
  else{
    labelList.push(<Subject key={'0'} label={this.props.labelList}/>);
  }
  return (
        
          <span>{labelList}</span>
        
    );
  }
});
module.exports = LabelList;