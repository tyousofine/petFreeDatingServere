const PORT = 8000
const express = require('express')
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://tyousofine:pianoklavier@cluster0.riid7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const app = express()

app.get('/', (req, res) => {
    res.json("Hello from server!")
})


app.post('/signup', (req, res) => {
    const client = new MongoClient(uri)

})

// test DB connection and seed
app.get('/users', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const users = database.collection('users')


        const returnedUsers = await users.find().toArray()
        // returnedUsers = returnedUsers.json()

        console.log(returnedUsers);
        res.send(returnedUsers)

    }
    catch (e) {
        console.log(e)



    }
    finally {
        await client.close()
    }

})

app.listen(PORT, () => console.log("server running on port" + PORT))