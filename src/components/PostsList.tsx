import { useEffect, useState } from "react";
import { Post } from "./Post";

interface IPost {
    id: number
    image: string
    name: string
}

export function PostsList () {

    const [posts, setPosts] = useState<IPost[]>([])

    async function getAllPosts() {
        await fetch('https://pokeapi.co/api/v2/pokemon')
        .then(results => results.json())
        .then(json => setPosts(json))
    }
    
    console.log(posts)

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <ul className="py-6 flex flex-col gap-3">
            {posts.map(({id, image, name}) => (
                <li key={id}>
                    <Post name={name} image={image}/>
                </li>
            ))}
        </ul>
    )
}