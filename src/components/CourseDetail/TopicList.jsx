import React from 'react';
import TiMediaRecord from 'react-icons/lib/ti/media-record';

var Topic = React.createClass({
  render: function() {
      
      var topic= this.props.topic; 
      
    return (
      <div>
       <TiMediaRecord/>{topic}
      </div>
      
    );
  }
});

var TopicList = React.createClass({

render: function() {
  var topicList=[];
  if(Array.isArray(this.props.topicList)){
    this.props.topicList.forEach(function(topic){  
          topicList.push(<Topic key={topic.topic} topic={topic.topic}/>);
    });
 }
 else{
    topicList.push(<Topic key={this.props.topicList} topic={this.props.topicList}/>);
 }
    
  return (
        
          <span>{topicList}</span>
        
    );
  }
});
module.exports = TopicList;