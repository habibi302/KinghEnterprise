const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");
const cors = require("cors");
const multer = require("multer");
const PopulerProductModel = require("./models/popularProduct");
const ShopProduct = require("./models/shopproduct");
const Order = require("./models/order");
const { title } = require("process");
const adminlogindata = require("./models/adminlogindata");
const GalleryPhotos = require("./models/gallery");
const { validate } = require("./models/shopproduct");
const CarouselBanners = require("./models/carouselBanners");

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
        const p = new PopulerProductModel({
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
                size1: req.body.size1,
                price1: req.body.price1,
                size2: req.body.size2,
                price2: req.body.price2,
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

app.get("/singleshopproductread/:productID", function(req, res){
        ShopProduct.findOne({"_id" : req.params.productID},function(err,result){
                if(err){
                        res.send(err);
                }else{
                        console.log(req.params);
                      res.send(result);  
                }
        });
});



app.get("/", function(req, res){
        res.send("hello world");
});

app.get("/populerproducts", function(req, res){
        PopulerProductModel.find({},function(err,result){
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
        PopulerProductModel.deleteOne({id: req.body.title})
})

app.listen(3001,function(){
        console.log("Server started successfully on port 3001!!");
});


app.post("/findproduct", function(req, res){

        console.log(req.body.keyword);

        ShopProduct.find({$text: {$search:req.body.keyword}}, function(err, result){
                if(err){
                        res.send(err);
                }else{
                        res.send(result);
                }
        });

});

app.post("/createorder",upload.single("image"), function(req, res){
                
        const sp = new Order({
                name: req.body.name,
                cName: req.body.cName,
                country: req.body.country,
                address: req.body.address,
                town: req.body.town,
                state: req.body.state,
                zipCode: req.body.zipCode,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email,
                subTotal: req.body.subTotal,
                total: req.body.total,
                message: req.body.message,
                imgurl: req.file.path,
                orderedProduct: [req.body.productsTitle, req.body.productsPrice, req.body.productsQty, req.body.productsSize, req.body.productsImgurl]
        });

        sp.save(function(err){
                if(err){
                        res.send(err);
                }else{
                        res.send("Successfully created the order!");
                }
        });
});

app.get("/galleryphotos", function(req, res){
        GalleryPhotos.find({},function(err,result){
                if(err){
                        res.send(err);
                }else{
                      res.send(result);  
                }
        })
})

app.post("/uploadgalleryphoto", upload.single("image"), function(req, res){
        const gp = new GalleryPhotos({
                src: "http://localhost:3001/"+req.file.path,
                width: req.body.width,
                height: req.body.height
        })

        gp.save(function(err){
                if(err){
                        res.send(err);
                }else{
                        res.send("Successfully uploaded!");
                }
        })
})



app.post("/carouselbanners", upload.single("banner"), function(req, res){
        const gp = new CarouselBanners({
                src: "http://localhost:3001/"+req.file.path,
        })

        gp.save(function(err){
                if(err){
                        res.send(err);
                }else{
                        res.send("Successfully uploaded!");
                }
        })
})


app.get("/carouselbanners", function(req, res){
        CarouselBanners.find({},function(err,result){
                if(err){
                        res.send(err);
                }else{
                      res.send(result);  
                }
        })
})

