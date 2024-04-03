import React from 'react'
import { Card } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { MoviedPage } from './Pages/MoviePage'
import { BookingPage } from './Pages/BookingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Link to="/">
        <Card className='sticky-nav'>
          <h1 className='text-center m-2'
           style={{textAlign : 'center'}}>
            Movie Mingle
          </h1>
        </Card>
      </Link>
      <Routes>
        <Route exact path='/' element={<MoviedPage />} />
        <Route exact path='/bookmovie/:id' element = {<BookingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
