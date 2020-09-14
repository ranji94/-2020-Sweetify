import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './styles/main.scss'
import { AppHeader, Form, Footer, Results } from './components/components'
import { loadText } from './operations'

const formTypes = [
  'form-type-breakfast',
  'form-type-lunch',
  'form-type-dinner',
  'form-type-snacks',
  'form-type-training'
]

const trainingActivities = [
  { value: 'none', label: loadText('training-activity-none') },
  { value: 'gym', label: loadText('training-activity-gym') },
  { value: 'running', label: loadText('training-activity-running') },
  { value: 'bike', label: loadText('training-activity-bike') }
]


const foodTypes = [
  { value: 'none', label: loadText('food-type-none') },
  { value: 'fit', label: loadText('food-type-fit') },
  { value: 'unhealthy-salty', label: loadText('food-type-unhealthy-salty') },
  { value: 'unhealthy-sweet', label: loadText('food-type-unhealthy-sweet') }
]


export const MainView = () => {
  useEffect(() => {
    document.title = 'Sweetify | Łatwo kontroluj swoją dietę!'
  }, [])

  const fillingFinished = useSelector((state) => state.formFilled.formFilled)

  return (<div>
    <AppHeader text={'Sweetify'}/>
    {
      fillingFinished
      ? <Results {...{ formTypes }} />
      : <Form {...{ foodTypes, trainingActivities, formTypes }} />
    }
    <Footer />
  </div>)
}