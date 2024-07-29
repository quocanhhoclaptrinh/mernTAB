//hotel,room
const mongoose =require('mongoose')
const hotelSchema =new mongoose.Schema(
    {
        address: { type: String, required: true },
        numberOfRooms: { type: Number, required: true },
        taxCode: { type: String, required: true },
        companyName: { type: String, required: true },
        nation: { type: String, required: true },
        facilityName: { type: String, required: true },
        businessType: { type: String, required: true },
        scale: { type: String, required: true },
        city: { type: String, required: true },
        minPrice:{type: Number,required: true, default: 0},
        imgUrl:{type:String,required:true},
        ownerID:{type:mongoose.Schema.ObjectId,ref:'Account',require:true}
    }
)
const roomSchema=new mongoose.Schema({
    numberOfBeds:{ type: Number, required: true },
    typeOfRoom:{type: String, required: true},
    money:{ type: Number, required: true },
    capacity:{ type: Number, required: true },
    isAvailable:{type:Boolean,required:true, default:true},
    revenue:{type:Number,required:false,default:0},
    hotelID:{type:mongoose.Schema.ObjectId,ref:'Hotel',require:true},
    customerID: { type: mongoose.Schema.ObjectId, ref: 'Customer', required: false }
})

const Hotel=mongoose.model('Hotel',hotelSchema)
const Room=mongoose.model('Room',roomSchema)
module.exports={
    Hotel,
    Room
}