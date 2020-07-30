var PromotionSchema = require('../schemas/promotionBonus_schema.js');
var AccountSchema = require('../schemas/account_schema.js');

module.exports.getUnAccept = async function(req,res){
    try{
        var user = req.body.id
  //      console.log(req.query.id)
    //    console.log(req.body)
      //  console.log(req)
      //  console.log(user)
        var promotions = await PromotionSchema.find({
            receiver        :   req.query.id,
            status          :   0,
           
        }).populate({
            path: 'sender',
        })

    
        res.status(200).json({
            promotions: promotions
        })
    }catch(err){
        console.log(err)
        res.status(201).json({result:false})
    }
}
module.exports.acceptBonus = async function(req,res){
    try{
        /*
        console.log(req.body)
        console.log('query')
        console.log(req.query)
        */
       console.log(req.body)
        var userId = req.body.params.userId
        var level = req.body.params.level
        
        console.log(userId)
        
        /*
        User.updateMany({age:{$gte:5}},  
            {name:"ABCD"}, function (err, docs) { 
            if (err){ 
                console.log(err) 
            } 
            else{ 
                console.log("Updated Docs : ", docs); 
            } 
        }); */

        var promotions = await PromotionSchema.find({receiver:userId,promotionLevel:level,status:0})
        console.log(promotions.length)
        var totalBonus = 0
        promotions.map(async (item)=>{
            totalBonus += item.balance
            item.status = 1
            await item.save()
        })
        console.log(totalBonus)
        var user = await AccountSchema.findOne({_id:userId})

        user.balance += totalBonus * (level == 1 ? 0.03:0.015)
                     
        await user.save()
        var repromotions = await PromotionSchema.find({
            receiver        :   userId,
            status          :   0,
           
        }).populate({
            path: 'sender',
        }) 

        res.status(200).json({
            result:'success',
            promotions: repromotions
        })
        
    }catch(err)
    {
        console.log(err)
        res.status(201).json({result:'failed'})//must fix
    }
}