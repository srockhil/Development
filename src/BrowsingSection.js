import React from 'react';
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import FilteredSortedClothing from './FilteredSortedClothing';
import Navbar from "react-bootstrap/Navbar";
import {Nav} from "react-bootstrap";
import './style.css';

/** The browsingSection component handles the display of the filter menu bar.
  * It has the logic for filtering and sorting, and its state has information on what options are currently
  * selected by the user. It creates a component, FilteredSortedClothing,
  * which handles displaying the clothing items.
  */
class BrowsingSection extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          curr_color:"All",
          curr_style: "All",
          curr_sort: "Any",

        };
        // These comparators are used for sorting the clothing items by price
        this.comparators = {
            low_high: function (a, b) {return a.price - b.price},
            high_low: function (a, b) {return b.price - a.price},
            no_sort: function (a, b) {return 0},

        }
    };

    // Logic for choosing style based on curr_style state.
    chooseStyle = style => {
        this.setState({
            curr_style: style
        })
    };

    // Logic for choosing color based on color state
    chooseColor = color => {
        this.setState({
            curr_color: color
        })
    };

    // logic for choosing the type of comparator that will be used in sorting
    // the clothing items
   chooseSort = sort => {
        this.setState({
            curr_sort: sort
        })
    };


   // comparator used for deciding which items to show based on style
   compareStyle = item => {
       // all items should be shown if there is no filter selected
        if(this.state.curr_style === "All") {
            return true
        }
        else return this.state.curr_style === item.style;
    };

    // comparator used for deciding which items to show based on color
   compareColor = item => {
        if(this.state.curr_color === "All") {
            return true
        }
        else return this.state.curr_color === item.color;
    };


    // this method gets the list and filters it using the style and color
    // comparators, and sorts it based on the price comparator.
    filterAndSortClothing() {
        let list = this.props.list
        list = list.filter(this.compareStyle);
        list = list.filter(this.compareColor)
        let comparator
        // choosing which price comparator to use.
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
                       {/*Navbar that holds filtering and sorting options*/}
                       <Navbar className="mb-5" bg="light" expand="sm">
                           <Navbar.Toggle aria-controls="basic-navbar-nav" />
                           <Navbar.Collapse id="basic-navbar-nav">
                               <Nav className="mr-auto">
                                   {/*color selector dropdown*/}
                                   <DropdownButton className="DropdownButton-filter-sort"
                                                   title={"Color: " + this.state.curr_color}
                                                   onSelect={this.chooseColor}
                                                   variant="filter-sort">
                                       <Dropdown.Item eventKey='All'>All</Dropdown.Item>
                                       <Dropdown.Item eventKey='Blue'>Blue</Dropdown.Item>
                                       <Dropdown.Item eventKey='Black'>Black</Dropdown.Item>
                                       <Dropdown.Item eventKey='White'>White</Dropdown.Item>
                                   </DropdownButton>

                                   {/*style selector dropdown */}
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

                                   {/*price sorting selector dropdown*/}
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

               {/* this component uses the filtered list and displays it.
                it uses the addToCart method supplied by App. */}
               <FilteredSortedClothing
                   list = {this.filterAndSortClothing()}
                   addToCart ={this.props.addToCart}>
               </FilteredSortedClothing>
            </div>
        )
    }
}

export default BrowsingSection;