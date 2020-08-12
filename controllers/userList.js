var express     = require('express');
var userListModel = require('../models/userList');
var router      = express.Router();


router.get('/', function(req, res){
    
    userListModel.getAll(function(results){
        var data={results:results}
        res.render('admin/userList',data);
    });
});

module.exports = router;