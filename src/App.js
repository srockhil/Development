import React from 'react';
import BrowsingSection from './BrowsingSection';
import Cart from './Cart'

//this is the list of all clothing items to be shown on the app.
const clothing_list =  [
    {name:"Milla Croc Knee High Boot", style:'Shoes', color:'Black', price: 115, image:"mila-crock-knee-high-boot.webp"},
    {name:"Maliha Mini Dress", style:'Dresses', color:'Blue', price: 45, image:"maliha-mini.webp"},
    {name:"Kendall Crop Top", style:'Tops', color:'White', price: 32, image:"kendal-crop.webp"},
    {name:"Holly Asymmetric Jean", style:'Pants', color:'Blue', price: 74, image:"holly-jeans.webp"},
    {name:"Erissa Knee Rip Jeans", style:'Pants', color:'Black', price: 65, image:"erissa-jeans.webp"},
    {name:"Evant Tee", style:'Tops', color:'Black', price: 33, image:"evant-tee.webp"},
    {name:"Lona Tie Dye Top", style:'Tops', color:'Blue', price: 22, image:"lona-tie-dye-top.webp"},
    {name:"Motel Daisy Mini Dress", style: 'Dresses', color: 'White', price: 65, image:"motel-daisy-dress.webp"},
    {name:"The Gracie Knit Mini Dress", style: 'Dresses', color: 'White', price: 51, image:"gracie-knit-dress.webp"},
    {name:"Windsor Smith Racer Sneakers", style: 'Shoes', color: 'White', price: 119, image:"windsor-sneakers.webp"},
    {name:"Clair De Lune Heels", style: 'Shoes', color: 'Blue', price: 55, image:"clair-heels.webp"},
    {name:"Arabella Sweatpants", style: 'Pants', color: 'White', price: 59, image: "arabella-pants.webp"}]

/**
 *  The app class holds the main structure of the app, as well as the cart state, which all of the subcomponents
 * modify. The app class has the add to cart and remove from cart logic. It passes the cart and addToCart functions
 * to the BrowsingSection component, and it passes the cart, addToCart and removeFromCart functions to the cart
 * componenet.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
        };
    }


    // handles add to cart logic
    addToCart(item) {
        let cart = this.state.cart
        let items = Object.keys(cart)
        if (items.includes(item.name)){
            cart[item.name].quantity ++;
        } else {
            cart[item.name] = {item: item, quantity: 1,}
        }
        this.setState({
            cart: cart
        })

    }


     // handles remove from cart logic
    removeFromCart(item) {
        let cart = this.state.cart
        cart[item.name].quantity --;

        if (cart[item.name].quantity === 0){
            delete cart[item.name]
        }
        this.setState({
            cart: cart
        })

    }

    render() {
        return (
            <div className="App">
                <div className="row mt-4">
                    <div className="col">
                        <h3 className="text-center"> Shop for Clothing </h3>
                    </div>
                </div>
                <div className="row p-5">
                    <div className="col-9">
                        {/*browsing section handles display of clothing items and filtering/sorting logic */}
                        <BrowsingSection
                            list={clothing_list}
                            addToCart ={this.addToCart.bind(this)} />
                    </div>

                    <div className="col-3">
                        {/*cart section handles display of items in cart, as well as adding and removing
                         items from the cart */}
                        <Cart
                            cart = {this.state.cart}
                            addToCart ={this.addToCart.bind(this)}
                            removeFromCart ={this.removeFromCart.bind(this)} />
                    </div>


                </div>
            </div>
        );
    }
}

export default App;
