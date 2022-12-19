import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='d-flex align-items-center justify-content-around'>
            <ul className='d-flex mb-0 align-items-center'>
                <li className='list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/">Home</Link>
                </li>
                <li className='me-3 list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/list">List</Link>
                </li>
                <li className='me-3 list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/add">Add</Link>
                </li>
                <li className='list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/about">About</Link>
                </li>
            </ul>
            <h1>React With TypeScript</h1>
            <div className='d-flex mb-0 align-items-center'>
                <li className='list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/register">Register</Link>
                </li>
                <li className='list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/login">Login</Link>
                </li>
                <li className='list-unstyled'>
                    <Link className='me-3 text-decoration-none' to="/setting">Setting</Link>
                </li>
            </div>
        </div>
    )
}

export default Nav