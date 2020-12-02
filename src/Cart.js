import React from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';


class Cart extends  React.Component {

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

                <style type="text/css">
                    {` .btn-black-outline { background-color: white;
                                            border: 2px solid black;
                                            margin: 5px;}`}
                </style>

                <h4 className="text-center card-header"> My Cart </h4>
                {Object.keys(this.props.cart).map(key  =>
                    <div className="row p-2">
                        <div className="col">
                            <div className="text-center">
                                {key} | $
                                { + this.props.cart[key].item.price * this.props.cart[key].quantity}
                            </div>
                        </div>
                        <div className="col">
                            <div className=" text-center">
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
                <div className="row">
                    <div className="col">
                        <h6 className="text-center subtotal mt-3">
                            Subtotal: $
                            <span style={{fontWeight: "bold"}}>
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