const { Router } = require('express')

const router = Router()

const cart = []

router.get('/', (req, res) => {
  res.json({ message: cart })
})

router.post('/', (req, res) => {
  const infoUser = req.body
  cart.push(infoUser)

  res.json({ message: 'cart created' })
})

module.exports = router