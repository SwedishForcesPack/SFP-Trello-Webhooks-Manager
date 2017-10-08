module.exports = function registerWebhooks (trello, organization, description, callbackUrl) {
  return trello.getOrgBoards(organization)
    .then((boards) => {
      Promise.all(boards.map((board) => {
        return trello.addWebhook(description, callbackUrl, board.id)
      }))
    })
}
