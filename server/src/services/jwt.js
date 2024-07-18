const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
dotenv.config()

const generalAccessTokens=async(payload)=>{
    console.log(payload)
    const access_token=jwt.sign({
        payload
    },process.env.ACCESS_TOKEN,{expiresIn:'24h'})
    
    return access_token
}

const refreshAccessTokens=async(payload)=>{
    const refresh_token=jwt.sign({
        payload
    },process.env.REFRESH_TOKEN,{expiresIn:'365d'})
    
    return refresh_token
}

module.exports={
    generalAccessTokens,
    refreshAccessTokens
}