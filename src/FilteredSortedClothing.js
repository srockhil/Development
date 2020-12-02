import React from 'react';
import ClothingItem from './ClothingItem';

/**
 * This component displays the sorted and filtered list of activities
 */
class FilteredSortedClothing extends  React.Component {
    constructor(props) {
        super(props);

    }

    addToCart = (item) => {
        this.props.addToCart(item);
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-around flex-wrap">

                    {this.props.list.map(item =>
                        <ClothingItem
                            key= {item.name}
                            item={item}
                            addToCart={this.addToCart.bind(this)}>
                        </ClothingItem>
                    )}
                </div>
            </div>
        )
    }

}

export default FilteredSortedClothing;