//@ts-nocheck
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Button, Tooltip } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import { question, question1, question2, question3, question4 } from '../App'
import SelectInput from '@mui/material/Select/SelectInput'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import Checkbox from '@mui/material/Checkbox'
import { Link } from 'react-router-dom'
const Quiz = () => {
  let list = { ...question1 }
  let list2 = { ...question2 }
  let list3 = { ...question3 }
  let list4 = { ...question4 }
  const [value, setValue] = useContext(UserContext)
  const [value1, setValue1] = useContext(list)
  const [ques, setQues] = useContext(question)
  const [value2, setValue2] = useContext(list2)
  const [value3, setValue3] = useContext(list3)
  const [value4, setValue4] = useContext(list4)
  const [detail, setDetails] = useState(1)
  const [cvf, setCvf] = useState({
    one: false,
    two: false,
    three: false,
    four: false
  })

  useEffect(() => {
    if (value) {
      if (value.one == true) {
        setDetails(1)
      } else if (value.two === true) {
        setDetails(2)
      } else if (value.three === true) {
        setDetails(3)
      } else if (value.four === true) {
        setDetails(4)
      } else if (value.five === true) {
        setDetails(5)
      }
    }
  }, [value])
  const handleClick = e => {
    setValue({ [e]: true })
  }

  const handleChange = e => {
    if (value?.one == true) {
      let listsd = { ...ques }
      listsd[0].answer = e.target.value
      setQues(listsd)
    } else if (value?.two == true) {
      let listsd = { ...ques }
      listsd[1].answer = e.target.value
      setQues(listsd)
    } else if (value?.three == true) {
      let listsd = { ...ques }
      listsd[2].answer = e.target.value
      setQues(listsd)
    }
  }

  useEffect(() => {
    console.log(ques)
  }, [ques])

  const handleChanged = (e: string, i: string) => {
    if (i === 'one') {
      cvf.one = e.target.checked
    }
    if (i === 'two') {
      cvf.two = e.target.checked
    }
    if (i === 'three') {
      cvf.three = e.target.checked
    }
    if (i === 'four') {
      cvf.four = e.target.checked
    }
    let listsd = { ...ques }
    listsd[3].answer = cvf
    setQues(listsd)
  }

  return (
    <>

      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          style={{
            borderRadius: '50px',
            marginRight: '5PX',
            background:
              value?.one === true ||
                value1?.one === true ||
                value1?.two === true ||
                value1?.three === true ||
                value1.four === true
                ? `red`
                : 'gray',
            color: 'white'
          }}
          onClick={e => handleClick('one')}
        >
          1
        </Button>
        <Button
          variant='outlined'
          style={{
            borderRadius: '50px',
            marginRight: '5PX',
            background:
              value?.two === true ? 'red' : value2.one === true ? 'red' : 'gray',
            color: 'white'
          }}
          onClick={e => handleClick('two')}
        >
          2
        </Button>
        <Button
          variant='outlined'
          style={{
            borderRadius: '50px',
            marginRight: '5PX',
            background:
              value?.three === true
                ? 'red'
                : value3.one === true
                  ? 'red'
                  : 'gray',
            color: 'white'
          }}
          onClick={e => handleClick('three')}
        >
          3
        </Button>
        <Button
          variant='outlined'
          style={{
            borderRadius: '50px',
            marginRight: '5PX',
            background:
              value?.four === true ? 'red' : value4.one === true ? 'red' : 'grey',
            color: 'white'
          }}
          onClick={e => handleClick('four')}
        >
          4
        </Button>
        <Button
          variant='outlined'
          style={{
            borderRadius: '50px',
            marginRight: '5PX',
            background: value?.five == true ? 'red' : 'grey',
            color: 'white'
          }}
          onClick={e => handleClick('five')}
        >
          5
        </Button>
      </div>
      <br></br>
      <Card
        sx={{ display: 'flex', justifyContent: 'center' }}
        style={{ margin: 'auto', width: 600 }}
      >
        <br></br>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component='div' variant='h5'>
              <br></br>
              {detail}.{ques[detail - 1]?.text}
            </Typography>
            <Typography
              variant='subtitle1'
              color='text.secondary'
              component='div'
            >
              {detail == 1 ? (
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='female'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value='0'
                    checked={ques[0]?.answer == '0' ? true : false}
                    control={<Radio />}
                    label={ques[0].option[0].text}
                    onChange={e => handleChange(e)}
                  />
                  <FormControlLabel
                    value='1'
                    checked={ques[0]?.answer == '1' ? true : false}
                    control={<Radio />}
                    label={ques[0].option[1].text}
                    onChange={e => handleChange(e)}
                  />
                  <FormControlLabel
                    value='2'
                    checked={ques[0]?.answer == '2'? true : false}
                    control={<Radio />}
                    label={ques[0].option[2].text}
                    onChange={e => handleChange(e)}
                  />
                  <FormControlLabel
                    value='3'
                    checked={ques[0]?.answer == '3' ? true : false}
                    control={<Radio />}
                    label={ques[0].option[3].text}
                    onChange={e => handleChange(e)}
                  />
                </RadioGroup>
              ) : detail == 2 ? (
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  fullWidth
                  onChange={e => handleChange(e)}
                  value={ques[1]?.answer}
                />
              ) : detail == 3 ? (
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='female'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    checked={ques[2]?.answer == 'true' ? true : false}
                    value='true'
                    control={<Radio />}
                    label='true'
                    onChange={e => handleChange(e)}
                  />
                  <FormControlLabel
                    checked={ques[2]?.answer == 'false' ? true : false}
                    value='false'
                    control={<Radio />}
                    label='false'
                    onChange={e => handleChange(e)}
                  />
                </RadioGroup>
              ) : detail == 4 ? (
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label='HTML'
                    name='pair[]'
                    checked={ques[3]?.answer?.one == true ? true : false}
                    value='html'
                    onChange={e => {
                      handleChanged(e, 'one')
                    }}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='CSS'
                    name='pair[]'
                    checked={ques[3]?.answer?.two == true ? true : false}

                    value='css'
                    onChange={e => handleChanged(e, 'two')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Javascript'
                    name='pair[]'
                    checked={ques[3]?.answer.three ==  true ? true : false}
                    value='js'
                    onChange={e => handleChanged(e, 'three')}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label='English'
                    name='pair[]'
                    checked={ques[3]?.answer.four == true ? true : false}
                    value='es'
                    onChange={e => handleChanged(e, 'four')}
                  />
                </FormGroup>
              ) : (
                ''
              )}
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label='previous' style={{ float: 'left' }}>
              {detail > 1 ? (
                <>
                  <Tooltip title="Go Back">
                    <SkipPreviousIcon
                      onClick={e =>
                        setValue(
                          detail == 2
                            ? { one: true }
                            : detail == 3
                              ? { two: true }
                              : detail == 4
                                ? { three: true }
                                : detail == 5
                                  ? { four: true }
                                  : ''
                        )
                      }
                    />
                  </Tooltip>
                </>
              ) : (
                ''
              )}
            </IconButton>
            <IconButton aria-label='next'>
              {detail < 5 ? (
                <>
                  <Tooltip title="Go Next">
                    <SkipNextIcon
                      onClick={e =>
                        setValue(
                          detail == 1
                            ? { two: true }
                            : detail == 2
                              ? { three: true }
                              : detail == 3
                                ? { four: true }
                                : detail == 4
                                  ? { five: true }
                                  : ''
                        )
                      }
                    />
                  </Tooltip>
                </>
              ) : (
                ''
              )}
            </IconButton>
            {detail == 5 ? (
              <>
                <Link to="/result">
                  <Button variant='contained'>Submit Test</Button>
                </Link>
              </>
            ) : (
              ''
            )}
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default Quiz