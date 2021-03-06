const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    PostData: [
        {id: 0, message: "Hi! How are yoy?", LikesCount: 15},
        {id: 1, message: "It's my first post!", LikesCount: 20}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let NewPost = {
                id: state.PostData[state.PostData.length - 1].id + 1,
                message: state.newPostText,
                // LikesCount: state.PostData[state.PostData.length-1].LikesCount + randomInteger(1, 5)
                LikesCount: Math.floor(Math.random() * (20 - 0 + 1)) + 0
            };
            return {
                ...state,
                PostData: [...state.PostData, NewPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})