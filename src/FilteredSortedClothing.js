import React from 'react';
import ClothingItem from './ClothingItem';

/**
 * This component displays the filtered and sorted list of chlothing.
 * It creates individual ClothingItem components, and passes them the passed down
 * addToCart method.
 */
class FilteredSortedClothing extends  React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="d-flex flex-row justify-content-around flex-wrap">

                    {/*maps each item in the list to a clothing item component. */}
                    {this.props.list.map(item =>
                        <ClothingItem
                            key= {item.name}
                            item={item}
                            addToCart={this.props.addToCart}>
                        </ClothingItem>
                    )}
                </div>
            </div>
        )
    }

}

export default FilteredSortedClothing;