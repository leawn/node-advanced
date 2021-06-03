interface Post {
    id: number;
    title: string;
    createdAt: string;
}

interface AppState {
    posts: Post[];
    userName: string;
}

const state: Readonly<AppState> = {
    posts: [],
    userName: "Gleb"
}

//state.posts = [] -> error