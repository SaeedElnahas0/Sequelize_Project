const express = require('express');
const app = express();

const db = require('./models');

const studentRouter = require('./routes/studentRouter');
const identifierRouter = require('./routes/identifierRouter');
const tutorialRouter = require('./routes/tutorialRouter');
const commentRouter = require('./routes/commentRouter');
const tagRouter = require('./routes/tagRouter');
const tutorialTtagRouter = require('./routes/tutorialTagRouter');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/students', studentRouter);
app.use('/identifiers', identifierRouter);
app.use('/tutotials', tutorialRouter);
app.use('/comments', commentRouter);
app.use('/tags', tagRouter);
app.use('/tutorialTags', tutorialTtagRouter);

db.sequelize.sync().then(()=>{
    app.listen(3000, ()=>{
        console.log('connected ...')
    })
})