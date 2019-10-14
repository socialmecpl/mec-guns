import React from 'react';
import {connect} from 'react-redux';
import CollectionItems from '../../components/collection-item/collection-item.component';

import {selectCollection} from '../../redux/shop/shop.selector';
import './collection.styles.scss';

const CollectionPage = ({collection}) => {
    console.log(collection)
    return(
    <div className='collection-page'>
        <h2>Category Page</h2>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);