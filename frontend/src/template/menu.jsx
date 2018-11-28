import React from 'react'

export default props => (

    <nav className='navbar navbar-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand'>
                    <i className='fa fa-calendar-check-o'></i> TodoApp
                </a>
            </div>

            <div id='navbar'>
                <ul className='nav navbar-nav '>
                    <li className= "nav-item"><a className="nav-link" href='#/todos'>Tarefas</a></li>
                    <li className= "nav-item"><a className="nav-link" href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)