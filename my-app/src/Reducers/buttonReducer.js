import { CHANGE_COLOR, CHANGE_FANCY_COLOR } from "../Constants/types";


function buttonReducer(state, action) {

    const newState = {...state}; //pasidarom dteito kopija kuria veliau galesim keisti

    switch(action.type) {
        case CHANGE_COLOR:
            if (state.click === 'red'){
                newState.click = 'green';
            } else {
                newState.click = 'red';
            }
            break;

        case CHANGE_FANCY_COLOR:
 
            newState.fancyClick = action.payload;
            break;
    }

    return newState;
}

export default buttonReducer;