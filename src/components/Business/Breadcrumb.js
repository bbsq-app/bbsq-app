import React from 'react';
import {Breadcrumb}  from 'react-bootstrap';

var BreadcrumbInstance = React.createClass({
  render: function() {
  //  var temp=window.sessionStorage.getItem("1");
    return (
    	<Breadcrumb>
            <Breadcrumb.Item href="#/">
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
              Blackberry Learning Center
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
    
            </Breadcrumb.Item>
        </Breadcrumb>
    );
  }
});
module.exports = BreadcrumbInstance;