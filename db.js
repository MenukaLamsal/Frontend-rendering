const mongoose = require('mongoose');

mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://menuka191712:pukuchi1205@api-call.p6xluhe.mongodb.net/firstapi',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
})
.then(() => {
    console.log('Connected to the database');
})
.catch((error) => {
    console.error('Error connecting to the database: ', error);
});
    
module.exports = mongoose;

/*,(err)=>{
        if(err)
        {
            console.log('Connection has ended with error' +err);
        }
        else{
            console.log('Connection is successful');
        }
    });*/ 