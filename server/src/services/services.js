
const Account=require('../models/signUp.model');
const Customer=require('../models/customer.model');
const Hotel=require('../models/hotel.model');

const { generalAccessTokens, refreshAccessTokens } = require('./jwt');

function signUpOwner(newOwner){
    return new Promise(async (resolve,rejects)=>{
        const{name,passWord,email,birthDate,phoneNum,address,dueDatePCCC,dueDateKD}=newOwner
        try{
            const checkAccountExisted=await Account.findOne({
                email:email
            })
            if(checkAccountExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại email'
                })
            }
            const createdOwner=await Account.create({
                name,
                passWord,
                email,
                birthDate,
                phoneNum,
                address,
                dueDatePCCC,
                dueDateKD
            })
            if(createdOwner){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdOwner
                })
            }
        } catch(e){
            rejects(e)
        }
    })
}

function signInOwner(existedOwner){
    return new Promise(async(resolve,rejects)=>{
        const {email,passWord}=existedOwner
        try{
            const foundOwner= await Account.findOne({
                email:email
            })
            if(foundOwner==null){
                resolve({
                    status:'BAD',
                    message: 'You havent registed'
                })
            }
            if(foundOwner.passWord!=passWord){
                resolve({
                    status:'BAD',
                    message:'Wrong password'
                })
            }
            const access_token=await generalAccessTokens({
                id:foundOwner._id,
                isUse:foundOwner.isUse
            })
            const refresh_token=await refreshAccessTokens({
                id:foundOwner._id,
                isUse:foundOwner.isUse
            })

            resolve({
                status:'OK',
                message:'Success log in',
                access_token: access_token,
                refresh_token: refresh_token,
                ownerID: foundOwner._id
            })
        }catch(e){
            rejects(e)
        }
    })
}
function signUpCustomer(newCustomer){
    return new Promise(async(resolve,rejects)=>{
        const{nameCus,phoneNum}=newCustomer
        try{
            const checkCustomerExisted=await Customer.findOne({
                phoneNum:phoneNum
            })
            if(checkCustomerExisted!==null){
                resolve({
                    status:'BAD',
                    message:'Đã tồn tại khách hàng'
                })
            }
            const createCustomer= await Customer.create({
                nameCus,
                phoneNum
            })
            if(createCustomer){
                resolve({
                    status:'OK',
                    message:'Succ',
                    data:createdCustomer
                })
            }
        }catch(e){
            rejects(e)
        }
    })
}
function signInCustomer(existedCustomer){
    return new Promise(async(resolve,rejects)=>{
        const {nameCus,phoneNum}=existedCustomer
        try{
            const foundCustomer=await Customer.findOne({
                phoneNum:phoneNum
            })
            if(foundCustomer==null){
                resolve({
                    status:'BAD',
                    message: 'You havent registed'
                })
            }
            resolve({
                status:'OK',
                message:'Success log in',
            })
        }catch(e){
            rejects(e)
        }
    })
}

//phải nhập id chủ nhà
function createHotel(newHotel,ownerID){
    return new Promise(async(resolve,rejects)=>{
        const{address,numberOfRooms,taxCode,companyName,nation,facilityName,businessType,scale}=newHotel
        try{
            console.log(ownerID)
            const checkExistedOwnerID=await Account.findOne({
                _id:ownerID
            })
            if(!checkExistedOwnerID){
                return rejects({
                    status:'BAD',
                    message:'Owner ID does not exist'
                })
            }
            const createdHotel = await Hotel.Hotel.create({
                address,
                numberOfRooms,
                taxCode,
                companyName,
                nation,
                facilityName,
                businessType,
                scale,
                ownerID
            });
            if(createdHotel){
                resolve({
                status: 'OK',
                message: 'Hotel created successfully',
                data: createdHotel
            });
            }
        } catch(e){
            rejects(e)
        }
    })
}
module.exports={
    signUpOwner,
    createHotel,
    signInOwner,
    signUpCustomer,
    signInCustomer
}