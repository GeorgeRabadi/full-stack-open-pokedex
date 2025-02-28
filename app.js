const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.use(express.static('dist'))


app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('server started on port 5000')
})
