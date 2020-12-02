# Development


Structure:

overview:
    App
       BrowsingSection
           FilteredSortedClothing
                ClothingItem (x filtered list size)
       Cart

The following goes into more depth about each components' state, how the user can trigger state change,
 as well as what is passed down from component to component:

 - APP:
     use: the app creates the overall structure of the page, and has state and methods that are passed down
          to the next components
     state: cart
     methods: addToCart(), removeFromCart(), which update the Cart state.
     Child components:
           - BROWSING-SECTION:
                  inherits: addToCart(), and list of clothing passed from App
                  use: the BrowsingSection handles the sorting logic, and has components to display the list.
                  state: current user selected filters and sorting style.
                  methods: has methods to update state (changes states current filter or sort types).
                           The user can trigger these state change methods by selecting a sorting
                            or filtering option from a dropdown menu.
                            also has methods to sort the list based on state.
                  child components:
                        - FILTERED-SORTED-CLOTHING
                                inherits: addToCart(), filtered and sorted list of clothing
                                use: maps each item in the sorted list to a clothingItem component.
                                child components:
                                     - CLOTHING-ITEM
                                            inherits: addToCart(), single clothing item info
                                            use: displays single clothing card and relevant item attributes
                                                 displays button which calls addToCart(). This is how the user
                                                 can trigger the state change of the cart.


           - CART:
                  inherits: addToCart(), removeFromCart(), cart, from App
                  use: the cart handles displaying items in the cart and aggregating their price.
                       it also displays buttons for the user to edit their cart.
                       this buttons can be used by user to trigger cart state change.
                  state: cart inherited from app.
                  methods: no original methods.


To reiterate:
     - user can trigger state change by clicking add to cart, remove from cart, or by selecting a filter
     or sort option.
      - the add to cart methods and remove from cart methods, as well as the cart state itself, is passed down from
        the app class.
        Clothing item uses addToCart
        Cart uses addToCart, removeFromCart, and the cart .
