const express = require('express')
const nodeHtmlToImage = require('node-html-to-image')

const app = express()

app.use(express.static('public'))
app.use('/', async (req, res) => {
    nodeHtmlToImage({
        output: `./public/image.png`,
        html: '<html><body>Hello world!<h1>สวัสดี</h1></body></html>',
        puppeteerArgs: {
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        }
    }).then(() => console.log('The image was created successfully!'))

    return res.send('ok 200')
})

app.listen(3000, () => {
    console.log('app start')
})