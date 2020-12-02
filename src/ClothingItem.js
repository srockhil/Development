import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import  './style.css';



class ClothingItem extends  React.Component {

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
                {/* for some reason I 'couldnt' get the variant to work unless i did this,
                        I wanted to add it to my css file!*/}
                <style type="text/css">
                    {` .btn-pink{ background-color: #ffdef0; }`}
                </style>

                <Card.Img className="img-wrapper" variant="top"
                          src={process.env.PUBLIC_URL + '/images/' + this.props.item.image}
                    />
                <Card.Body>
                    <Card.Title>{this.props.item.name}</Card.Title>
                    <div className="d-flex flex-column justify-content-around align-content-center">
                        <p>Style: {this.props.item.style}</p>
                        <p>Color: {this.props.item.color}</p>
                        <p>Price: ${this.props.item.price}</p>


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