const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/Users');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobs")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/jobDetails', (req, res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/jobDetails/:id', (req, res) => {
    const { id } = req.params; 
    UserModel.findById(id)
        .then(job => {
            if (!job) return res.status(404).json({ error: 'Job not found' });
            res.json(job);
        })
        .catch(err => res.status(500).json({ error: 'Error fetching job details', details: err }));
});

app.get('/candidate/jobdetails', (req, res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/candidate/jobdetails/:id', (req, res) => {
    const { id } = req.params; 
    UserModel.findById(id)
        .then(job => {
            if (!job) return res.status(404).json({ error: 'Job not found' });
            res.json(job);
        })
        .catch(err => res.status(500).json({ error: 'Error fetching job details', details: err }));
});

app.post("/posting-new-job", (req, res) => {
    UserModel.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

app.listen(5000, () => {
    console.log("Server is Running on port 5000");
});

