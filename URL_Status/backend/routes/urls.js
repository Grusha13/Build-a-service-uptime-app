const express = require('express')

const router = express.Router()

router.get('/urls', (req, res, next) => {
  console.log('GET Request in Places');
  res.json({ message: 'It works!' })
})

// router.post('/urls', (req, res, next) => {
//   console.log(req.body.url);
//   res.json({ message: 'It works!' })
// })

module.exports = router