import {actions} from '../constants';

const sampleAction = (sampleIndex) => (dispatch) => {
    dispatch({
        type: actions.SAMPLE_ACTION,
        sampleIndex
    })
};

export {
    sampleAction
}