const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
const cors = require("cors");
const multer = require("multer");
const ProductModel = require("./models/popularProduct");
const ShopProduct = require("./models/shopproduct");
const { title } = require("process");
const adminlogindata = require("./models/adminlogindata");

const app = express();

app.use('/populerproductimage',express.static('populerproductimage'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


const storage = multer.diskStorage({
        destination: function(req, file, callback){
                callback(null, './populerproductimage/');
        },
        filename: function(req, file, callback){
                callback(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
        }
});

const fileFilter = (req, file, callback)=>{
        if(file.mimetype === 'image/jpeg' || file.mimetype == 'image/png'){
               callback(null, true); 
        }else{
                callback(null, false);
        }
};

const upload = multer({storage: storage, limits: {
        fileSize: 1024 * 1024 * 5
},
fileFilter: fileFilter
}); 



mongoose.connect("mongodb://localhost:27017/KinghEnterPrise");


app.post("/products",upload.single("productImage"), function(req, res){
        const p = new ProductModel({
                title: req.body.title,
                imgurl: req.file.path
        });

        p.save(function(err){
                if(err){
                        res.send(err);
                }else{
                        res.send("Successfully added to the database!");
                }
        })
})


app.post("/shopproductinsert",upload.single("productImage"), function(req, res){
        const sp = new ShopProduct({
                title: req.body.title,
                desc: req.body.desc,
                price: req.body.price,
                imgurl: req.file.path
        });

        sp.save(function(err){
                if(err){
                        res.send(err);
                }else{
                        res.send("Successfully added to the database!");
                }
        });
});


app.get("/shopproductread", function(req, res){
        ShopProduct.find({},function(err,result){
                if(err){
                        res.send(err);
                }else{
                      res.send(result);  
                }
        });
});



app.get("/", function(req, res){
        res.send("hello world");
});

app.get("/populerproducts", function(req, res){
        ProductModel.find({},function(err,result){
                if(err){
                        res.send(err);
                }else{
                      res.send(result);  
                }
        })
})

app.get("/adminlogin", function(req, res){
        adminlogindata.find({},function(err,result){
                if(err){
                        res.send(err);
                }else{
                      res.send(result);  
                }
        })
})


app.delete("/deletesingleproduct", function(req,res){
        ProductModel.deleteOne({id: req.body.title})
})

app.listen(3001,function(){
        console.log("Server started successfully on port 3001!!");
});

