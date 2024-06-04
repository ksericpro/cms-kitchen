import * as contentful from 'contentful'

console.log(`REACT_APP_SPACE_ID = ${process.env.REACT_APP_SPACE_ID}`)
console.log(`REACT_APP_ACCESS_TOKEN = ${process.env.REACT_APP_ACCESS_TOKEN}`)
export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})