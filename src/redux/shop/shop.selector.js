import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    arc: 1,
    plasma: 2,
    hvof: 3,
    flame: 4,
    cold: 5
}

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => 
createSelector(
    [selectCollections],
    collections => 
        collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
)