// require('dotenv').config();

// module.exports={
//     url:`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`
// };


require('dotenv').config();

module.exports = {
    url: process.env.MONGO_URI
};