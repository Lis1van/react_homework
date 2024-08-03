const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        byId: (id: number): string => urls.users.base + `/${id}`
    },
    posts: {
        base: '/posts',
        byId: (id: number): string => urls.posts.base + `/${id}`
    },
    comments: {
        base: '/comments',
        byPostId: (postId: number): string => urls.comments.base + `?postId=${postId}`
    }
}

export {
    urls,
    baseUrl
}
