const mongoose = require('mongoose')

const url = "mongodb://Dainius:Left4dead1235252@ac-ykljoiy-shard-00-00.bcuzhqv.mongodb.net:27017,ac-ykljoiy-shard-00-01.bcuzhqv.mongodb.net:27017,ac-ykljoiy-shard-00-02.bcuzhqv.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-gxk72a-shard-0&authSource=admin&retryWrites=true&w=majority"

module.exports.connect = () => {
    mongoose.connect(url).then((res) => console.log("MongoDB is connected successfully")).
    catch((err) => console.log('Error: ', err));
};
