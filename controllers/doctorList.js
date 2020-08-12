var express     = require('express');
var doctorListModel = require('../models/doctorList');
var router      = express.Router();


router.get('/', function(req, res){
    
    doctorListModel.getAll(function(results){
        var data={results:results}
        res.render('admin/doctorList',data);
    });
});

module.exports = router;