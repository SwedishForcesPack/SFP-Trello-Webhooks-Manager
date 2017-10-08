require('dotenv').config()
const Trello = require("trello")

const registerWebhooks = require('./registerWebhooks')
const removeWebhooks = require('./removeWebhooks')

const apiKey = process.env.TRELLO_API_KEY
const apiToken = process.env.TRELLO_API_TOKEN
const callbackUrl = process.env.TRELLO_CALLBACK_URL
const organization = process.env.TRELLO_ORGANIZATION
const description = process.env.TRELLO_WEBHOOK_DESCRIPTION

if (!apiKey) {
  console.error('TRELLO_API_KEY environment variable is not set')
}

if (!apiToken) {
  console.error('TRELLO_API_TOKEN environment variable is not set')
}

if (!callbackUrl) {
  console.error('TRELLO_CALLBACK_URL environment variable is not set')
}

if (!organization) {
  console.error('TRELLO_ORGANIZATION environment variable is not set')
}

if (!description) {
  console.error('TRELLO_WEBHOOK_DESCRIPTION environment variable is not set')
}

const trello = new Trello(apiKey, apiToken)

function catchError (error) {
  console.error(error)
}

removeWebhooks(trello)
  .then(() => {
    registerWebhooks(trello, organization, description, callbackUrl)
  })
  .catch(catchError)
