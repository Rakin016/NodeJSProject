var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from users where id="+id;
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
        var sql = "select * from users where status not in ('admin')";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

}
