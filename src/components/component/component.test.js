import React from 'react'
import ReactDOM from 'react-dom'
import component from './component'

it('renders without crashing',()=>{
  const div = document.createElement('div')
  ReactDOM.render(<component/>,div)
  ReactDOM.unmountComponentAtNode(div)
})