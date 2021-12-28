const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const { user, transaction } = new PrismaClient()

router.post('/', async (req, res) => {
  // const { user_id, title, value, in_out, transaction_date, time_setted, method, description, account_id, category_id, sub_category_id, place_id, label_id, event_id } = req.body
  const { userId, title, value, inOut } = req.body

  const userExists = await user.findUnique({
    where: {
      id: userId
    }
  })

  if (!userExists) {
    return res.status(400).json({
      msg: 'Trasaction not created, user not found'
    })
  }

  const newTransaction = await transaction.create({
    data: {
      user: userId,
      title,
      value,
      in_out: inOut
    }
  })

  res.json(newTransaction)
})

module.exports = router
