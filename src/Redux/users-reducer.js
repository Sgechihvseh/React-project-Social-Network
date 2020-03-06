const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const NEXT_PAGE = 'NEXT_PAGE';
const SET_FETCHING = 'SET_FETCHING';

let initialState = {
    usersData: [],
    totalCount: 20,
    currentPage: 1,
    pageSize: 5,
    nextPage: 20,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, usersData: action.users
            }
        }
        case SET_TOTAL_COUNT: {
            return{
                ...state, totalCount: action.count
            }
        }
        case SET_CURRENT_PAGE: {
            return{
                ...state, currentPage: action.currentPage
            }
        }
        case NEXT_PAGE: {
            return{
                ...state, nextPage: action.nextPage
            }
        }
        case SET_FETCHING: {
            return{
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export default usersReducer;

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const nextPages = (nextPage) => ({type: NEXT_PAGE, nextPage})
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching})
