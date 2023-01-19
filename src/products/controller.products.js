const { Router } = require('express')

const router = Router()

const products = []

router.get('/', (req, res) => {
  res.json({ message: products })
})

router.post('/', (req, res) => {
  const infoUser = req.body
  products.push(infoUser)

  res.json({ message: 'product created' })
})

module.exports = router