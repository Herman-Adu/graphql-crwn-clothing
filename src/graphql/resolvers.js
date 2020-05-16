// resolvers is an object that can be passed to our client that let it know what values to resolve, 
// depending on what queries or mutations get called from the local client side

import { gql } from 'apollo-boost'

export const typeDefs = gql`
    extend type Mutation {
        ToggleCartHidden: Boolean!
    }
`;

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const resolvers = {
    Mutation: {
        toggleCartHidden: ( _root, _args, { cache } ) => {
            const { cartHidden } = cache.readQuery({
                query: GET_CART_HIDDEN
            });

            cache.writeQuery({
                query: GET_CART_HIDDEN,
                data: { cartHidden: !cartHidden }
            });

            return !cartHidden;
        }
    }
}