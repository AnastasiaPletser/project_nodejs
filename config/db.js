import mongoose from 'mongoose';

const URI = 'mongodb+srv://nastusya89pl:FzjBkRTIzrL6mHfy@anastasia.x0dp8.mongodb.net/?retryWrites=true&w=majority&appName=Anastasia';

mongoose.connect(URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((e) => {
    console.error(e);
});


