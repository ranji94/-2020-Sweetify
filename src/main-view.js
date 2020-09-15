import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './styles/main.scss'
import { AppHeader, Form, Footer, Results } from './components/components'
import { loadText } from './operations'
import { formTypes,
  foodTypes,
  trainingActivities,
  snackTypes } from './constants'

export const MainView = () => {
  useEffect(() => {
    document.title = loadText('app-title')
  }, [])

  const fillingFinished = useSelector((state) => state.formFilled.formFilled)

  return (<div>
    <AppHeader text={'Sweetify'}/>
    {
      fillingFinished
      ? <Results {...{ formTypes }} />
      : <Form {...{ foodTypes, trainingActivities, formTypes, snackTypes }} />
    }
    <Footer />
  </div>)
}