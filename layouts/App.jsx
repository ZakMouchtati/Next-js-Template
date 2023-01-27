import NavBar from '@/components/NavBar'
import Head from 'next/head'
import React from 'react'

const App = ({children}) => {
  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </Head>
    <NavBar />
    {children}
    </>
  )
}

export default App