//@ts-nocheck
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { question } from '../App'
import { useContext, useEffect, useState } from 'react'
import { formvalueContext } from '../App';

const Results = () => {
  const [ques, setQues] = useContext(question)
  console.log(ques)
  const [formvalue, setFormValue] = useContext(formvalueContext)
  console.log(formvalue)
  return (
    <Card sx={{ maxWidth: 600, margin: "auto" }}>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
      Thank You For attending the quiz
      </Typography>
      <Typography variant="h5" component="div">
        {formvalue?.username}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Your Quiz Results 
      </Typography>
      <Typography variant="body2">
        <pre>{JSON.stringify(ques,null,2)}</pre>
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
  </Card>
  )
}

export default Results
