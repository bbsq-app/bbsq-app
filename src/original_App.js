import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';



import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

import Content from './components/Content';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Middle/>
        <Search/>
        <Page/>
      </div>
      
    );
  }
}

class Header extends Component {
   render() {
        return (
        
      <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
               <a href="#">BBsq</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
          
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="ME" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}>Action</MenuItem>
              <MenuItem eventKey={1.2}>Another action</MenuItem>
              <MenuItem eventKey={1.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.3}>Separated link</MenuItem>
            </NavDropdown>
            
            <NavDropdown eventKey={2} title="COMPANY" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>Action</MenuItem>
              <MenuItem eventKey={2.2}>Another action</MenuItem>
              <MenuItem eventKey={2.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={2.3}>Separated link</MenuItem>
            </NavDropdown>
            
            <NavDropdown eventKey={3} title="ACTIONS" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="EXTERNAL" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={5} title="LEARNING" id="basic-nav-dropdown">
              <MenuItem eventKey={5.1}>Action</MenuItem>
              <MenuItem eventKey={5.2}>Another action</MenuItem>
              <MenuItem eventKey={5.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          

            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl type="text" placeholder="Search" />
                </FormGroup>
                {' '}
            </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
        
      );
   }
   
}

class Middle extends Component {
   render() {
        return (
        
            <Jumbotron>
                <h1>BLACKBERRY LEARNING CENTER</h1>
                <p>What do you want to learn today? Check out the great learning offerings below.</p>
                <p><Button bsStyle="primary">GET STARTED</Button></p>
            </Jumbotron>
        
      );
   }
   
}

class Search extends Component {
   render() {
        return (
        
            <Navbar>
    
    <Navbar.Collapse>
     
        <FormGroup>
          <FormControl type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        
     
    </Navbar.Collapse>
  </Navbar>
        
      );
   }
   
}

class Page extends Component {
     render() {
        return (
    
    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
    <Tab eventKey={1} title="All">Tab 1 content</Tab>
    <Tab eventKey={2} title="#">Tab 2 content</Tab>
    <Tab eventKey={3} title="A">Tab 3 content</Tab>
    <Tab eventKey={4} title="B">Tab 3 content</Tab>
    <Tab eventKey={5} title="C">Tab 3 content</Tab>
    <Tab eventKey={6} title="D">Tab 3 content</Tab>
    <Tab eventKey={7} title="E">Tab 3 content</Tab>
    <Tab eventKey={8} title="F">Tab 3 content</Tab>
    <Tab eventKey={9} title="G">Tab 3 content</Tab>
    <Tab eventKey={10} title="H">Tab 3 content</Tab>
    <Tab eventKey={11} title="I">Tab 3 content</Tab>
    <Tab eventKey={12} title="J">Tab 3 content</Tab>
    <Tab eventKey={13} title="K">Tab 3 content</Tab>
    <Tab eventKey={14} title="L">Tab 3 content</Tab>
    <Tab eventKey={15} title="M">Tab 3 content</Tab>
    <Tab eventKey={16} title="N">Tab 3 content</Tab>
    <Tab eventKey={17} title="O">Tab 3 content</Tab>
    <Tab eventKey={18} title="P">Tab 3 content</Tab>
    <Tab eventKey={19} title="Q">Tab 3 content</Tab>
    <Tab eventKey={20} title="R">Tab 3 content</Tab>
    <Tab eventKey={21} title="S">Tab 3 content</Tab>
    <Tab eventKey={22} title="T">Tab 3 content</Tab>
    <Tab eventKey={23} title="U">Tab 3 content</Tab>
    <Tab eventKey={24} title="V">Tab 3 content</Tab>
    <Tab eventKey={25} title="W">Tab 3 content</Tab>
    <Tab eventKey={26} title="X">Tab 3 content</Tab>
    <Tab eventKey={27} title="Y">Tab 3 content</Tab>
    <Tab eventKey={28} title="Z">Tab 3 content</Tab>
  </Tabs>

        
      );
   }
   
}

export default App;





