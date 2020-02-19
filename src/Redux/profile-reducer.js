const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

        PostData: [
            {id: 0, message: "Hi! How are yoy?", LikesCount: 15},
            {id: 1, message: "It's my first post!", LikesCount: 20}
        ],
        newPostText: ''

}

 const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let NewPost = {
                id: 5,
                message: state.newPostText,
                LikesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.PostData = [...state.PostData];
            stateCopy.PostData.push(NewPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default: return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () =>({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})