const mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let employeeschema = require("../models/employee");

router.route("/add-emp").post(async(req,res,next)=>{
    await employeeschema
    .create(req.body)
    .then((result)=>{
        res.json({
            data:result,
            message: "new employee added",
            status:200,
        });
    })
    .catch((err)=>{
        return next(err);
    });
});
//read employee data
router.route("/").get(async(req,res,next)=>{
    await employeeschema
    .find()
    .then((result)=>{
        res.json({
            data:result,
            message:"all employee details fetched succesfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);

    })
});
//read one emp data
router.route("/get-emp/:id").get(async(req,res,next)=>{
    await employeeschema
    .findById(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"one employee details fetched succesfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);

    })
});

//update one emp data
router.route("/update-emp/:id").put(async(req,res,next)=>{
    await employeeschema
    .findByIdAndUpdate(req.params.id,{
        $set:req.body,
    })
    .then((result)=>{
        res.json({
            data:result,
            message:"one employee details updated succesfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);

    })
});
//delete one emp data
router.route("/delete-emp/:id").delete(async(req,res,next)=>{
    await employeeschema
    .findByIdAndDelete(req.params.id)
    .then((result)=>{
        res.json({
            data:result,
            message:"one employee details deleted succesfully",
            status: 200,
        });
    })
    .catch((err)=>{
        return next(err);

    })
});
module.exports = router;