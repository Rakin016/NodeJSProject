var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from staff where s_id="+id;
        db.getResults(sql, function(result){
            if(result.length > 0){
                console.log(result[0]);
                callback(result[0]);
            }else{
                callback([]);
            }
        });
    },
    getAll: function(callback){
        var sql = "select * from staff";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

}
