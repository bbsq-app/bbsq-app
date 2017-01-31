import React, { Component } from 'react';

import {Nav, Navbar, NavDropdown,MenuItem,FormGroup,FormControl}  from 'react-bootstrap';
import { Link } from 'react-router'


export default class Header extends Component {
   render() {
        return (
        
      <Navbar inverse>
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">BBsq</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
          
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} title="ME" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1}><Link to="/head">Header</Link></MenuItem>
              <MenuItem eventKey={1.2}><Link to="/middle">Middle</Link></MenuItem>
              <MenuItem eventKey={1.3}><Link to="/business">Business</Link></MenuItem>
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
              <MenuItem eventKey={5.1}><Link to="/AssignedLearning">Assigned Learning</Link></MenuItem>
              <MenuItem eventKey={5.2}><Link to="/LearningHistory">Learning History</Link></MenuItem>
              <MenuItem eventKey={5.3}><Link to="/MyTeam">My Team</Link></MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={5.3}><Link to="/Reports">Reports</Link></MenuItem>
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