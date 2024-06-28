import   { MongoClient }  from "mongodb";
const clint = new MongoClient("mongodb://udcxdt3vf9kwshc5kvp9:hdvNNo5ibX9aXmmHEdC4@bqrvjmsu46tsywvnii4i-mongodb.services.clever-cloud.com:2247/bqrvjmsu46tsywvnii4i")
clint.connect().then(()=>{
    console.log('Connected To MongoDB');
}).catch((err)=>{
    console.log(err);
})

const db = clint.db('bqrvjmsu46tsywvnii4i')

export default db
