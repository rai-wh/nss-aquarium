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
            location: "These Bass were found in North Carolina and Florida."
        },
        {
            name: "Trout",
            img: "http://outdoornebraska.gov/wp-content/uploads/2017/12/cutthroat3-2.png", 
            food: "They like to eat aquatic insects and other fish",
            size: "Trouts are around 16 inches long, usually.",
            location: "They were located in the Western half of USA"
        },
        {
            name: "Tilapia",
            img: "https://www.platinumlakemanagement.com/img/http/aHR0cDovL3d3dy5wbGF0aW51bWxha2VtYW5hZ2VtZW50LmNvbS9sZWdhY3kvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDMvdGlsYXBpYS1hbGdhZS1jb250cm9sLWNoYXJsb3R0ZS1uYy5qcGc=?w=900&q=80&s=79507a53def6edc84f400b2f269be36d",
            food: "Tilapia like to eat algae and aquatic plants.",
            size: "Tilapia grow to around 20 inches usually.",
            location: "These fish were found in Florida and Texas."
        }
        
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}