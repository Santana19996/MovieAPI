const router = require('express').Router()

router.get('/', function (req, res) =>{
    res.json({dummyPosts: {title:'a post',description:'random data u shuldnt see'}})
}
)