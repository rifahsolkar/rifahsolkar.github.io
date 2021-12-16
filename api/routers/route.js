const express = require('express');
const { route } = require('express/lib/application');
const { rawListeners } = require('../model/db');
const router = express.Router()
const Post = require('../model/db')

router.get('/',async(req,res)=>{
    try{
        const rif = await Post.find()
        res.json(rif)
    }catch(err){
        res.send("Error "+err)
    }
})


router.post('/',async(req,res)=>{
    const rif = new Post({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub
    })

    try{
        const a1 = await rif.save()
        res.json(a1)
    }catch(err){
        res.send("Error "+err)
    }
})

//Update
router.patch('/:id',async(req,res)=>{
    try{
        const riff = await Post.findById(req.params.id)
        riff.sub = req.body.sub
        const a1 = await riff.save()
        res.json(a1)
    }catch(err){
        res.send("Error "+err)
    }
})

//Delete
router.delete('/:id',async(req,res)=>{
    try{
        const riff = await Post.findById(req.params.id)
        riff.sub = req.body.sub
        const a1 = await riff.remove()
        res.json(a1)
    }catch(err){
        res.send("Error "+err)
    }
})

module.exports = router;