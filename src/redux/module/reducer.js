import { ITEMS } from './action';
const itemReducer = (state = [], action) => {
    if (action.type === ITEMS) {
        return action.value;
    }
    return state;
};

export default itemReducer;