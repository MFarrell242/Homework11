var borgar = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", (req, res)=>{
    borgar.all(data=>{
        var hereticBorgar = {
            burgers: data
        };
        console.log(hereticBorgar);
        res.render("index", hereticBorgar);
    });
});

router.post("/api/burgs", (req, res)=>{
    borgar.create(["burger_name", "eaten"], [req.body.burger_name, false], result=>{
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgs/:id", (req, res)=>{
    var menu = "id = " + req.params.id;

    borgar.update({
        eaten: req.body.eaten
    }, menu, resp=>{
        if (resp.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

router.delete("api/burgs/:id", (req, res)=>{
    var menu = "id = " + req.params.id;

    borgar.delete(menu, resp=>{
        if (resp.changedRows === 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});

module.exports = router;