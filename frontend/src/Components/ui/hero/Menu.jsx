import React from 'react'
import { MenuData } from '../../../data/MenuData'

const Menu = () => {
    return (
        <>
            <style>
                {`
                .custom-menu-item {
    background-color: white;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    width: 100%; /* Change from 200px to 100% */
    padding: 9px 15px; /* Add padding so text isn't touching the edge */
    cursor: pointer;
    border-radius: 6px;
    color: #505050; /* A softer grey like the design */
}
                .custom-menu-item:hover {
                    background-color: #E5F1FF !important;
                    color: #1C1C1C;
                    font-weight: 500;
                }
                `}
            </style>

            <div className='d-flex flex-column w-100'>
    {MenuData.map((item) => (
        <div key={item.id} className="custom-menu-item">
            {item.title}
        </div>
    ))}
</div>
        </>
    )
}

export default Menu;