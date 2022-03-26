const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Constant to use when converting pennies to dollars
const MULTIPLIER = 100;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate our Apollo server with the Express application as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// API key for testing purposes, needs to be placed in .env file before deploying
const stripe = require('stripe')('sk_test_51KgdiPLjNl0PfVF02aF7hfVDXiNDAXFcTcttw3ECXHqyRrA3Jb3gGA91IFOyEEIh5tjmnSqoc3zufbvzIXx2VLN200hJ9AWkvi');

// POST request to make a payment/donation to a charity, through Stripe checkout window
app.post('/donate', async (req, res) => {

  const charityName = req.body.charity
  const amount = parseInt(req.body.donation)

  try {
    // Creating a new payment session
      const session = await stripe.checkout.sessions.create({

      line_items: [
        {
        price_data: {
          currency: 'cad',
          product_data: {
            name: charityName,
          },
          unit_amount: amount * MULTIPLIER,
        },
        quantity: 1,
        },
      ],
        mode: 'payment',
        // Redirect back to homepage, temp links at the moment
        success_url: 'http://localhost:3000/saved',
        cancel_url: 'http://localhost:3000/saved',
      });

      res.redirect(303, session.url);
  }
  catch(err){
    console.log("Need to enter charity name and amount");
  }

  
});


db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});