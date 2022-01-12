const database = {
    fish: [
        {
            name: "Salmon",
            img: "https://media.istockphoto.com/photos/salmo-salar-swimming-in-blue-water-in-quebec-picture-id1203537541?k=20&m=1203537541&s=612x612&w=0&h=zutNKh8HmY1qSwFEy4gyv6TcHwFz4lna2Ffc6TDLlDI=",
            food: "Salmon eat shrimp, mayflies, sand eels, herring",
            size: "The average length of a salmon is 28 in to 30 in.",
            location: "These salmon were found in Washington and Maine"
        },
        {
            name: "Catfish",
            img: "https://www.aces.edu/wp-content/uploads/2019/03/1106_workshop_691.jpg",
            food: "They eat algae, small fish, and scavenged debris",
            size: "The average length of a catfish is 22 inches.",
            location: "They were found in Alabama and Mississippi"
        },
        {
            name: "Bass",
            img: "https://files.osgnetworks.tv/14/files/2018/04/Scott-B-pond-bass.jpg",
            food: "Their diet consists of leeches, insects, baitfish, and frogs",
            size: "Bass are usually sized around 15.7 inches",
            location: "Martin found these Bass in North Carolina and Florida, as well as Mississippi"
        },
        {
            name: "Trout",
            img: "http://outdoornebraska.gov/wp-content/uploads/2017/12/cutthroat3-2.png", 
            food: "They like to eat aquatic insects and other fish",
            size: "Trouts are around 16 inches long, usually.",
            location: "They were located in the Western half of USA"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}