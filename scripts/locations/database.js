const database = {
    area: [
        {
            name: "Washington",
            location: "Martin travelled to Mississippi and was able to find not only Catfish but also Trout!"
        },
        {
            location: "He also travelled to Florida and Texas to check out their local fish."
        },
        {
            name: "Alabama",
            location: "Martin also visited Alabama and found that their were various fish to experience."
        },
        {
            location: "Martin's favorite place to visit, though, was California, in which he found a plethora of various fish."
        }
    ]
}

export const getArea = () => {
    return database.area.map(area => ({...area}))
}