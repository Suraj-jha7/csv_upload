require('dotenv').config()
const mongoose = require('mongoose');
// mongoose.connect("mongodb://127.0.0.1/csv_upload1");



// exports.connectMonggose =()=>{
//   mongoose.connect(process.env.DATABASE_URL,
//   {
//       useNewUrlParser: true
//   })
//   .then((e)=>console.log("Connected to Mongodb =>> CSV Upload"))
//    .catch((e)=>console.log("Not Connect Mongodb"))
// }


const connectDB = async () => {
  
  try {
    console.log(process.env.DATABASE_URL);
    const db = await mongoose.connect(process.env.DATABASE_URL);
    
    console.log(`Successfully connected to the database`);
   
  } catch (err) {
    console.log("errror in connecting database", err);
    // process. Exit();
  }
};

module.exports= connectDB;

// const db = mongoose.connection;


// db.on('error', console.error.bind('error in connecting to the db'));

// db.once('open', function(){
//   console.log('Successfully connected to the DB');
// })

