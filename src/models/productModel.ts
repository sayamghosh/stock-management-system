import exp from "constants";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"PLease provide a name"],
    },
    productId:{
        type:String,
        required:[true,"Please provide an id"],
        unique:true
    },
    price:{
        type:Number,
        required:[true,"Please provide a price"],
    },
    quantity:{
        type:Number,
        required:[true,"Please provide a quantity"]
    }
})

const Product = mongoose.models.products || mongoose.model("products",productSchema);
export default Product;