import React, { Component } from 'react'
import axios from 'axios'
import './teamStyle.bundle.css'
export default class Teams extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teams: []

            //  logo:'',
            //  teamName:'',
            //  captianName
        }
    }

    // componentDidMount() {
    //     axios.get('data.json').then((response) => {
    //         this.setState({ teams: response.data })
    //     })

    // }

    render() {
        return (
            <div className='container'>
                <div className="d-flex justify-content-evenly flex-wrap mt-3 p-3 shadow">
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    <div className="col-3 m-1 p-3 shadow border border-1 rounded-2">
                        <img src="" alt="image not found" />
                        <p className='fs-5'>Team Name:</p>
                        <p className='fs-5'>Captian Name:</p>
                        <a href="" className='btn btn-primary'>View Team</a>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}
