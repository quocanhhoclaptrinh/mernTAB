//signUp,signIn
const signUpService=require('../../services/services')
const signUpOwner=async(req,res)=>{
    try{
        console.log(req.body)
        const{name,passWord,email,birthDate,phoneNum,address,dueDatePCCC,dueDateKD}=req.body

        if(!name || !passWord || !email || !birthDate ||!phoneNum ||!address||!dueDatePCCC||!dueDateKD){
            return res.status(403).json({message:'Input is required'})
        }
        else if(!validateEmail(email)){ 
            //email 
            return res.status(400).json({ message:'Invalid email'})
        }
        else if(!validateBirthDate(birthDate)){
            return res.status(400).json({message:'Not enough age'})
        }
        else{
            const currentDate=new Date()
            const validDueDatePCCC= currentDate.getFullYear()-new Date(dueDatePCCC).getFullYear
            const validDueDateKD= currentDate.getFullYear()-new Date(dueDateKD).getFullYear

            if(validDueDateKD<=1 || validDueDatePCCC<=1){
                return res.status(400).json({ message:'Invalid due date'})
            }
        }
        const result= await signUpService.signUpOwner(req.body)
        return res.status(201).json(result)
        }
     catch(e){
        console.log(e)
        return res.status(500).json({message:e})
    }

}

const signInOwner = async (req, res) => {
    console.log(req.body);
    const { email, passWord } = req.body;

    if (!email || !passWord) {
        return res.status(403).json({ message: 'Email and password are required' });
    }
    try {
        const result = await signUpService.signInOwner(req.body);
        return res.status(200).json(result);
    } catch (e) {
        console.error('Error signing in owner:', e);
        return res.status(e.status || 500).json(e);
    }
}

function validateBirthDate(birthDate){
    const currentDay=new Date()
    const dob =new Date(birthDate)
    const age =currentDay.getFullYear()-dob.getFullYear()
    const monthDiff=currentDay.getMonth()-dob.getMonth()
    if(monthDiff<0||(monthDiff===0 && currentDay.getDate()<dob.getDate())){
        age--
    }
    if(age<18){
        return false
    } return true
}

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

module.exports={
    signUpOwner,
    signInOwner,
    validateEmail,
    validateBirthDate
}