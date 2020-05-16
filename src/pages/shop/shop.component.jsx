import React from 'react';
import { Route } from 'react-router-dom';

import {default as CollectionsOverview} from '../../components/collections-overview/collection-overview.container';
import {default as CollectionPage} from '../collection/collections.container';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
