import * as actionTypes from './actionTypes';

export const tagsSuccess = tags => {
  return {
    type: actionTypes.TAGS_SUCCESS,
    tags: tags
  }
}

export const getTags = tags => {
    return dispatch => {
        console.log("I am here");
        const url = 'http://localhost:8000/api/tag/';
        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch(tagsSuccess(json));
        }); 
        
    }
}