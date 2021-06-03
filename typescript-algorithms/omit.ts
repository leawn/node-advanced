interface Post {
    id: number;
    title: string;
    createdAt: string;
}

type CreatePostDto = Omit<Post, "id" | "createdAt">;

const createDto: CreatePostDto = {
    title: "My post",
    //id: 1, -> error
    //createdAt: "2020-05-05" -> error
}