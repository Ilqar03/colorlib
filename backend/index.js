const express = require('express')
const app = express()
const port = 3003
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

app.use(express.json())
app.use(cors())

const colorlibSchema = new mongoose.Schema({
    img: String,
    name: String,
    title: String,
    description: String,
});

const colorlib = mongoose.model('Mycolorlib', colorlibSchema);

app.get('/', (req, res) => {
    colorlib.find({}, (err,docs)=> {
        if(!err) {
            res.send(docs)
        } 
        else {
            res.send("get alinmadi")
        }
    })
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    colorlib.findById(id, (err,docs)=> {
        if(!err) {
            res.send(docs)
        } 
        else {
            res.send("id gore get alinmadi")
        }
    })
   
})

app.post('/', (req, res) => {
    const newColorlib = new colorlib({
        img: req.body.img,
        name: req.body.name,
        title: req.body.title,
        description: req.body.description,
    });
    newColorlib.save()
    res.send(newColorlib)
})

app.delete('/:id', (req, res) => {
    const { id } = req.params
    colorlib.findByIdAndDelete(id, (err,docs)=> {
        if(!err) {
            res.send(docs)
        } 
        else {
            res.send("delete gore get alinmadi")
        }
    })
})

mongoose.set('strictQuery', true);
mongoose.connect(process.env.UP)
    .then(() => console.log('Connected!'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})