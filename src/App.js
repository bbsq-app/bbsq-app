import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import courseData from './sampleData/App/courseData.json';

import Header from './components/Header';
import Middle from './components/App/Middle';
import FilterableCourseTable from './components/App/FilterableCourseTable';
var COURSES = courseData;


export default class App extends Component {
  render() {
    return (
     <div className="App">

        <Header/>
        <Middle/>
        <div className="container">
           <FilterableCourseTable courses={COURSES} />
        </div>
      </div>
     
    );
  }
}

