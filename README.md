# SFP Trello Webhooks Manager

Managing Trello webhooks for a lot of boards is annoying, automate it!

## Environment Variables

All of the following environment variables needs to be set

- TRELLO_API_KEY
  - Get your API Key from https://trello.com/app-key
- TRELLO_API_TOKEN
  - A valid API Token that can remove and create webhooks for your boards. The test application token from https://trello.com/app-key can be used.
- TRELLO_CALLBACK_URL
  - A valid URL that responds with 200 for HEAD requests, read more at https://developers.trello.com/v1.0/page/webhooks
- TRELLO_ORGANIZATION
  - Organization id or slug, can be taken from the url
- TRELLO_WEBHOOK_DESCRIPTION
  - The description set for the webhook
