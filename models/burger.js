var orm = require("../config/orm.js");

var borgar = {
    all: cb=>{
        orm.all("burgers", res=>{
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, (res)=>{
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, res=>{
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("burgers", condition, res=>{
            cb(res);
        });
    }
};

module.exports = borgar;