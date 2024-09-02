import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <>
        <nav className='container bg-dark rounded d-flex justify-content-around'>
            <img src="" alt="" />
            <ul className='d-flex justify-content-evenly align-items-center'>
                <li className='text-white'>HOME</li>
                <li className='text-white'>ABOUT</li>
                <li className='text-white'>CONTACT</li>
            </ul>
        </nav>
      </>
    )
  }
}
