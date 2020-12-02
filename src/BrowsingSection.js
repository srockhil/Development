import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FilteredSortedClothing from './FilteredSortedClothing';
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import './style.css';

class BrowsingSection extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          curr_color:"All",
          curr_style: "All",
          curr_sort: "Any",

        };

        this.comparators = {
            low_high: function (a, b) {return a.price - b.price},
            high_low: function (a, b) {return b.price - a.price},
            no_sort: function (a, b) {return 0},

        }
    };

    chooseStyle = style => {
        this.setState({
            curr_style: style
        })
    };

    chooseColor = color => {
        this.setState({
            curr_color: color
        })
    };

   chooseSort = sort => {
        this.setState({
            curr_sort: sort
        })
    };


   compareStyle = item => {
        if(this.state.curr_style === "All") {
            return true
        }
        else return this.state.curr_style === item.style;
    };

   compareColor = item => {
        // all items should be shown when no filter is selected
        if(this.state.curr_color === "All") {
            return true
        }
        //otherwise check if filter === current item's corresponding property
        else return this.state.curr_color === item.color;
    };



    filterAndSortClothing() {
        let list = this.props.list
        list = list.filter(this.compareStyle);
        list = list.filter(this.compareColor)
        let comparator
        if(this.state.curr_sort === 'High To Low'){
            comparator = this.comparators.high_low
        }
        else if(this.state.curr_sort === 'Low To High'){
            comparator = this.comparators.low_high
        }
        else {
            comparator = this.comparators.no_sort
        }

        return list.sort(comparator)
    }



    render() {
        return (
            <div>
               <div className="row sticky-top">
                   <div className="col">
                       <Navbar className="mb-5" bg="light" expand="sm">
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                               <Nav className="mr-auto">
                                   <DropdownButton className="DropdownButton-filter-sort"
                                                   title={"Color: " + this.state.curr_color}
                                                   onSelect={this.chooseColor}
                                                   variant="filter-sort">
                                       <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                                       <Dropdown.Item eventKey='Blue'>Blue</Dropdown.Item>
                                       <Dropdown.Item eventKey='Black'>Black</Dropdown.Item>
                                       <Dropdown.Item eventKey='White'>White</Dropdown.Item>
                                   </DropdownButton>

                                   <DropdownButton  className="DropdownButton-filter-sort"
                                                    title= {"Style: " + this.state.curr_style}
                                                    onSelect={this.chooseStyle}
                                                    variant="filter-sort">
                                       <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                                       <Dropdown.Item eventKey='Tops'>Tops</Dropdown.Item>
                                       <Dropdown.Item eventKey='Pants'>Pants</Dropdown.Item>
                                       <Dropdown.Item eventKey='Dresses'>Dresses</Dropdown.Item>
                                       <Dropdown.Item eventKey='Shoes'>Shoes</Dropdown.Item>
                                   </DropdownButton>

                                   <DropdownButton className="DropdownButton-filter-sort"
                                                   title={"Price: " + this.state.curr_sort}
                                                   onSelect={this.chooseSort}
                                                   variant="filter-sort">
                                       <Dropdown.Item eventKey='Any'>Any</Dropdown.Item>
                                       <Dropdown.Item eventKey='High To Low'>High To Low</Dropdown.Item>
                                       <Dropdown.Item eventKey='Low To High'>Low To High</Dropdown.Item>
                                   </DropdownButton>
                               </Nav>

                           </Navbar.Collapse>
                       </Navbar>
                   </div>


               </div>


               <FilteredSortedClothing
                   list = {this.filterAndSortClothing()}
                   addToCart ={this.props.addToCart}>
               </FilteredSortedClothing>
            </div>
        )
    }
}

export default BrowsingSection;