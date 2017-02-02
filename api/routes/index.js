import express from 'express';
const router = express.Router();

router
  .route('/')
  .get(function(req,res){
    res.status(200).json({data : "helloWorld"})
  });

export default router;
