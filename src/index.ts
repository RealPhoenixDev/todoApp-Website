import express from 'express'

const app = express()
app.set('view engine', 'ejs')

app.set('views', __dirname + '/web/')

// todo app
app.get('/', (req, res) => {
    res.render('todoApp/index')
})
app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/web/todoApp/script.js')
})




app.get('/src/web/output.css', (req, res) => {
    res.sendFile(__dirname + '/web/output.css')
})

app.listen(3000, () => {
    console.log('Listening at port 3000')
})

module.exports = app