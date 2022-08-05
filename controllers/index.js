const Plant = require('../models/plant')
//to create a plant
const createPlant = async (req, res) => {
  try {
    const plant = await new Plant(req.body)
    await plant.save()
    return res.status(201).json({
      plant,
    })

  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
//to get all plants
const getAllPlants = async (req,res)=>{
    try{
        const plants = await Plant.find()
        return res.status(200).json({plants})

    } catch(error){
        return res.status(500).send(error.message)
    }
}
//to get a single plant
const getPlantById= async(req,res)=> {
    try{
        const{id} = req.params;
        const plant=await Plant.findById(id)
        if(plant){
            return res.status(200).json({plant})
        }
        return res.status(404).send('Plant not found');

    }catch(error){
        return res.status(500).send(error.message)
    }
}
//crud - u - update. this will not be async. updates are not written async. it has to happen instanly
const updatePlant =(req,res)=>{
    try{
        const{id} = req.params
        Plant.findByIdAndUpdate(id,req.body,{new:true},(err,plant)=>{
            //edge cases for update goes here
            if(err!==null){
            console.log(err,"error")
        //if the entry is not found, iam gonna send a 404
            res.status(404).send(message)

            }else{
            console.log(plant)
            res.json(plant)
            }
        })



    }catch(error){
        return res.status(500).send(error.message)
    }
}

//CRUD-DELETE

const deletePlant = async(req,res)=>{
try{
const{id} = req.params
const deleted = await Plant.findByIdAndDelete(id)
if(deleted){
    return res.status(200).send("Plant deleted")
}
//throwing new error
throw new Error("Plant not found")

}catch(error){
    return res.status(500).send(error.message)

}

}

module.exports = {
  createPlant,
  getAllPlants,
  getPlantById,
  updatePlant,
  deletePlant,
}














