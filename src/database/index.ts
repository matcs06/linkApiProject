import mongoose from 'mongoose';
import credentials from '../credentials/index';

try {
  mongoose.connect(
    `mongodb+srv://${credentials.databaseUser}:${credentials.databasePassword}@cluster0-p32wr.mongodb.net/linkapi?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
  console.log('Connected to the database!!');
} catch (error) {
  console.log('Error trying to connect to database!!');
}
