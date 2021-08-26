const fakeUser = {
    username: "Nicolas",
    loggedIn: true
}
let videos = [
    {
        title: "First Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1,
    },
    {
        title: "Second Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3,
    },
]

export const home = (req, res) => res.render("home", { pageTitle: "home!", fakeUser, videos });
export const trending = (req, res) => res.render("home", { pageTitle: "Home", fakeUser });
export const newUser = (req, res) => res.send("new");
export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");