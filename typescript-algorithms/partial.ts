interface Post {
    id: number;
    title: string;
    createdAt: string;
}

interface AppState {
    posts: Post[];
    userName: string;
}

function updateState(state: AppState, update: Partial<AppState>): AppState {
    return { ...state, ...update };
}

const initialState: AppState = {
    posts: [],
    userName: "Gleb"
}

const update: Partial<AppState> = {
    posts: []
}

// partial treats all the properties as optional