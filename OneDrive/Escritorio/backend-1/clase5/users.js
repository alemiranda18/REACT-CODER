import { Router } from "express"

const router = Router()


const users = []
router.post('/', (req, res) => {
    const user = req.body
    users.push(users)

    res.json("agregado correctamente")
})
router.get('/', (req, res) => {
    res.json(users)
})

export default router;
