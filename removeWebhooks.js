module.exports = function removeWebhooks (trello) {
  return trello.makeRequest('get', '/1/members/me/tokens', { webhooks: true })
    .then((tokens) => {
      return Promise.all(tokens.map((token) => {
        return Promise.all(token.webhooks.map((webhook) => {
          return trello.deleteWebhook(webhook.id)
        }))
      }))
    })
}
