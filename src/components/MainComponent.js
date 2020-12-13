import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,  // lifting the state up
            comments: COMMENTS, 
          //  leaders: LEADERS, 
            //promotions: PROMOTIONS
        };
    }
/*<Menu dishes={this.state.dishes} />
<DishDetail dish={this.state.dishes}
                              comments = {this.state.comments} />*/
    render() {
          

        return (
            <div>
                <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                </div>
                </Navbar>
            </div>
            
            <Menu dishes={this.state.dishes}/>
            </div>
        );
    }
}

export default Main;