var borgar = require("../models/burger.js");

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
    borgar.create(["name", "eaten"], [req.body.name, req.body.eaten], result=>{
        res.json({ id: result.insertId });
    });
});

router.put