type Cell = string;

interface Row {
    [key: string]: Cell;
}

interface Post {
    id: number;
    title: string;
    createdAt: string;
}

const post: Post = { id: 1, title: "My post", createdAt: "2020-06-06" };

const row: Row = {
    title: post.title,
    createdAt: post.createdAt,
    randomKey: "is allowed"
}

type PostRow = Record<keyof Post, Cell>;

const postRow: PostRow = {
    id: post.id.toString(),
    title: post.title,
    createdAt: post.createdAt,
    //randomKey: "is not allowed" -> error
}