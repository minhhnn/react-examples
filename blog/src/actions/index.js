import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //Wait until fetchPosts finish before trying to get uniqe userId from those posts
    await dispatch(fetchPosts());

    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(userId => dispatch(fetchUser(userId)))
        .value();
}

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        });
    };
};

export const fetchUser = userId => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};