const router = require('express').Router()
const { PrismaClient } = require('@prisma/client')
const { account } = new PrismaClient()

router.get('/', async (req, res) => {
  const accounts = await account.findMany({
    select: {
      username: true
    }
  })

  res.json(accounts)
})
