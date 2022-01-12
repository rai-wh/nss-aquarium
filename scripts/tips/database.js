const database = {
    tips: [
        {
            name: "When scuba diving, NEVER hold your breath! Always breathe normally.",
        },
        {
            name: "Always double check your scuba gear before diving.",
        },
        {
            name: "When fishing, make sure to swim your lure accurately to how real bait would move."
        }
    ]
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}