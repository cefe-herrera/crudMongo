const mongoose = require('mongoose');
let count = 0;

const options = {
    autoIndex: false, // Don't build indexes
    // Maintain up to 10 socket connections
    maxPoolSize: 10,
    // If not connected, return errors immediately rather than waiting for reconnect
    //bufferMaxEntries: 0,
    // all other approaches are now deprecated by MongoDB:
    useNewUrlParser: true,
    useUnifiedTopology: true

}; 
const connectWithRetry = () => {
    console.log('MongoDB connection with retry')
    console.log('process', process.env.MONGODB_URI);
    mongoose.connect(process.env.MONGODB_URI, options).then(() => {
        console.log('MongoDB is connected')
    }).catch(err => {
        console.log(err);
        console.log('MongoDB connection unsuccessful, retry after 5 seconds. ', ++count);
        setTimeout(connectWithRetry, 5000)
    })
};


connectWithRetry();

//mongoose.set('debug', true);

exports.mongoose = mongoose;