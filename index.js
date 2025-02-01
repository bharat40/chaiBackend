import e from "express";
import 'dotenv/config'
const app = e();

const githubData = {
    "login": "bharat40",
    "id": 119802463,
    "node_id": "U_kgDOByQKXw",
    "avatar_url": "https://avatars.githubusercontent.com/u/119802463?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/bharat40",
    "html_url": "https://github.com/bharat40",
    "followers_url": "https://api.github.com/users/bharat40/followers",
    "following_url": "https://api.github.com/users/bharat40/following{/other_user}",
    "gists_url": "https://api.github.com/users/bharat40/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/bharat40/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/bharat40/subscriptions",
    "organizations_url": "https://api.github.com/users/bharat40/orgs",
    "repos_url": "https://api.github.com/users/bharat40/repos",
    "events_url": "https://api.github.com/users/bharat40/events{/privacy}",
    "received_events_url": "https://api.github.com/users/bharat40/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Bharat",
    "company": null,
    "blog": "",
    "location": "Ambala Cantt, Haryana, India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 47,
    "public_gists": 0,
    "followers": 3,
    "following": 2,
    "created_at": "2022-12-04T15:25:37Z",
    "updated_at": "2025-01-29T16:18:34Z"
}


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/twitter', (req, res) => {
    res.send('bharatdhiman21')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2> Chai aur code </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on port ${process.env.PORT}`)
})  