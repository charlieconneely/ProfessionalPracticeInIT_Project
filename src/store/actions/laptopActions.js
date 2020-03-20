//  make async actions with database using redux store and thunk 

// need to remove raw data and replace with user input
export const postLaptop = (laptop) => {
    return (dispatch, getState, {getFirbase, getFirestore}) => {
        const firestore = getFirestore();
        //const id = getState
        firestore.collection('Laptops').add({
            ...laptop
        }).then( () => {
            dispatch({type: 'POST_LAPTOP', laptop});  
        }).catch( (error) => {
            dispatch({type: 'POST_LAPTOP_ERROR', error});  
        })
                 
    }
}

export const addLaptopToBasket = (laptop) => {
    return(dispatch) => {
        dispatch({type: 'ADD_TO_BASKET', laptop});
    }
}