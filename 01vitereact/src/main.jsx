import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
// import './index.css'
import App from './App.jsx'
import Com from './com.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href:'https:// google.com', target : '_blank'},
  'click me to visit'
)

const anotherElement = (
  <a href="https://google.com">Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
//  <>
//  reactElement
//  {/* <MyApp/> */}
//  </>
// reactElement
anotherElement
)
