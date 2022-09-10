const express = require("express")
const userService = require("../services/user")

const router = express.Router()

router.post("/login", async (req, res) => {
    const {email, password} = req.body
    const result = await userService.login(email, password)
    res.json(result)
})

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body
    const result = await userService.register(name, email, password)
    res.json(result)
})

router.post("/create-user", async (req, res) => {
    const {name, email, password} = req.body
    const result = await userService.createUser(name, email, password)
    res.json(result)
})

router.get("/get-all-user", async (req, res) => {
    const result = await userService.getUserAll()
    res.json(result)
})

router.get("/:id", async (req, res) => {
    const id = req.params.id
    const result = await userService.getUserById(id)
    res.json(result)
})

router.post("/:id", async (req, res) => {
    const id = req.params.id
    const email = req.body.email
    const name = req.body.name
    const password = req.body.password
    const result = await userService.updateUser(id, name, email, password)
    res.json(result)
})

module.exports = router