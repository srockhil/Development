import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import  './style.css';


/**
 * The clothing item component handles the display of a single clothing item on the page.
 * it displays each items attributes and contains a button allowing the user to add the item to cart.
 */
class ClothingItem extends  React.Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

    }

    onClickAdd = (item) => {
        this.props.addToCart(item);
    }

    render() {
        return (
            <Card className="mb-3"
                style={{ maxWidth: '14rem' }}>
                {/* for some reason I couldn't get the variant to work unless i did this,
                        I wanted to add the style it to my css file!*/}
                <style type="text/css">
                    {` .btn-pink{ background-color: #ffdef0; }`}
                </style>

                {/*image display */}
                <Card.Img className="img-wrapper" variant="top"
                          src={process.env.PUBLIC_URL + '/images/' + this.props.item.image}
                />

                {/*displaying clothing item attributes*/}
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <div className="d-flex flex-column justify-content-around align-content-center">
                        <p>Style: {this.props.item.style}</p>
                        <p>Color: {this.props.item.color}</p>
                        <p>Price: ${this.props.item.price}</p>

                        {/*displaying add to cart button*/}
                        <div className="d-flex justify-content-sm-center align-content-end">
                            <Button
                                    variant="pink"
                                    onClick={() => this.onClickAdd(this.props.item)} > + Add to Cart
                            </Button>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        )
    }

}

export default ClothingItem;