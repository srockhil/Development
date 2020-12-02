import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';


/**
 * The cart handles the logic of displaying all items in cart, as well as aggregating the total price
 * of all items. It allows the user to add more or remove items from their cart.
 */
class Cart extends  React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    addToCart = (item) => {
        this.props.addToCart(item);
    }

    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }

    render() {
        return (
            <div className="card sticky-top cart-div">
                {/*for some reason i had to have this style portion here for my variants to work*/}
                <style type="text/css">
                    {` .btn-black-outline { background-color: white;
                                            border: 2px solid black;
                                            margin: 5px;}`}
                </style>

                <h4 className="text-center card-header"> My Cart </h4>
                <div className="card-body">
                    {/*maps each item in cart to a div that displays name, quantity, and price x quantity */}
                    {Object.keys(this.props.cart).map(key  =>
                        <div className="row p-2">
                            <div className="col">
                                <div className="text-center">
                                    {/*name X quantity*/}
                                    {key} x {this.props.cart[key].quantity} | $

                                    {/*calculation of price for that given item*/}
                                    { + this.props.cart[key].item.price * this.props.cart[key].quantity}
                                </div>
                            </div>
                            <div className="col">
                                <div className=" text-center">
                                    {/*buttons for adding or removing items from cart*/}
                                    <Button variant="black-outline"
                                            onClick={() => this.removeFromCart(this.props.cart[key].item)}>
                                        -
                                    </Button>
                                    <Button
                                            variant="black-outline"
                                            onClick={() => this.addToCart(this.props.cart[key].item)}>
                                        +
                                    </Button>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
                {/*aggregation component: */}
                <div className="row">
                    <div className="col">
                        <h6 className="text-center subtotal mt-1">
                            Subtotal: $
                            <span style={{fontWeight: "bold"}}>
                                {/*uses reduce to get total price of all items in cart*/}
                                {Object.keys(this.props.cart).reduce((a, b) =>
                                    a + this.props.cart[b].item.price * this.props.cart[b].quantity,0)}
                            </span>
                        </h6>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart;