const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
const Connection=()=>{
mongoose.connect("mongodb+srv://SahilDragoon:Lm4LRGYPgNkO8ur8@cluster0.dlxkkkc.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology: true, useNewUrlParser: true }).then(() => console.log('DB CONNECTED!'))
.catch(err => console.log(err));
}
module.exports=Connection;
