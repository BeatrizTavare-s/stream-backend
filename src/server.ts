import express from 'express';
import  StreamRouter  from '../src/routes/stream.router'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/stream', StreamRouter);

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
});