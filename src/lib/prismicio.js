// const dotenv = require("dotenv")

// dotenv.config()

import * as prismic from '@prismicio/client'

const repoName = 'prisimic-proj' // Fill in your repository name

//const accessTo = process.env.ACCESS

// console.log(accessTo)

const accessToken = 'MC5ZNm12cHhFQUFDa0FKMFg0.dAIB77-977-9EO-_ve-_ve-_vSHvv73vv73vv70777-9Ah4C77-9cO-_ve-_ve-_vWtR77-977-9Yjjvv70NLQ' // If your repository is private, add an access token

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'page',
    uid: 'homepage',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
]

const createClient = ({ request, fetch } = {}) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(repoName, clientOptions)

  if (request) {
    client.enableAutoPreviewsFromReq(request);
  }

  return client
}

export default createClient
