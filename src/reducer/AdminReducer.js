import {actions} from '../constants';

const defaultStates = {
    sampleIndex: 1
};

const AdminReducer = (state = defaultStates, action) => {
    switch(action.type) {
        case actions.SAMPLE_ACTION:
            return { ...state, sampleIndex: action.sampleIndex }
        default:
            return state
    }
};

export default AdminReducer;