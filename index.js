const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const User = require('./models/user')
const { typeDefs } = require('./graphql/schema')
const resolvers = require('./graphql/resolvers')
const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const http = require('http')

const JWT_SECRET = 'SECRET_KEY'

mongoose.set('useFindAndModify', false)

const MONGODB_URI = 'mongodb+srv://fullstack:vkf467dji@cluster0-epvqk.mongodb.net/library?retryWrites=true'
console.log('connecting to ', MONGODB_URI)

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
.then(() => {
  console.log('connected to MongoDB')
})
.catch((error) => {
  console.log('error connecting to MongoDB: ', error.message)
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), JWT_SECRET
      )
      //console.log('decoded token', decodedToken)
      const currentUser = await User.findById(decodedToken.id)
      //console.log('current user ', currentUser)
      return { currentUser }
    }
  }
})

const PORT = process.env.PORT || 4000

const app = express()
app.use('/', express.static('build'))
//server.applyMiddleware({ path: 'build/index.html', app })
server.applyMiddleware({ path: '/api', app })

const httpServer = http.createServer(app)
server.installSubscriptionHandlers(httpServer)

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})