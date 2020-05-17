import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionItem from './collection-item.component';
//import { addItemToCart } from '../../graphql/cart.utils';

const ADD_ITEM_TO_CART = gql`
    mutation AddItemToCart($item: item!) {
        addItemToCart(item: $item) @client
    }
`;

// dynamically pass in variables, so we dont have to pass the variable prop, then grab the item
const CollectionItemContainer = (props) => (
    <Mutation mutation={ADD_ITEM_TO_CART}>
        {addItemToCart => (
            <CollectionItem 
                {...props} 
                addItem={item => addItemToCart({ variables: { item } })}
            />
        )}
    </Mutation>
);

export default CollectionItemContainer;