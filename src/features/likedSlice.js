export function likedReducer(state=likedInitialState, action) {
    if (action.type === "Liked") {
        return {...state, liked: !state.liked}
    }

    return state;
}

export const likedInitialState = {
    liked: null
}

export function likedSelect (state) {
    return state.liked.liked;
}