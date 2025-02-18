interface Props {
    name: string
    image: string
}

export function Post( { name, image }: Props) {
    return (
        <div className="border border-gray-300 rounded-md p-4 cursor-pointer hover:shadow-md">
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="font-light text-gray-500">{image}</p>
        </div>
    )
}