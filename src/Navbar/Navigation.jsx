import React, { Component } from 'react'
import './NavigationStyle.css'
export default class Navigation extends Component {
  render() {
    return (
      <>
        <nav className='container bg-white rounded d-flex flex-row-reverse mt-1 shadow'>
            <ul className='w-25 d-flex justify-content-between m-3 navigation'>
                <li className='text-white p-2 bg-primary rounded'>HOME</li>
                <li className='p-2'>ABOUT</li>
                <li className='p-2'>CONTACT</li>
            </ul>
        </nav>
      </>
    )
  }
}
