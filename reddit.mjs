#! /usr/bin/env node

//hash bang tells to interpret this file node enviroment//

// importing node modules
import fetch from 'node-fetch'
import open from 'open'
import yargs from 'yargs'
//
// //yargs is used for processed argument passed into cli has been executed
const{ argv } = yargs(process.argv)
// fetch is used to communicate with reddit API
const res = await fetch('https://reddit.com/.json')
const data = await res.json()
const children = data.data.children
const randomPost = children[Math.floor(Math.random()* data.data.children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print){
    console.log(`
    title: ${randomPost.data.title}
    link: ${link}
    `)
} else {
    open(link)
}
