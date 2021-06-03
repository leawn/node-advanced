interface Post {
    id: number;
    title: string;
    createdAt: string;
}

type UpdatePostDto = Pick<Post, "id" | "title">;

const updateDto: UpdatePostDto = {
    id: 1,
    title: "My new post",
    //createdAt: "20200" -> error
}