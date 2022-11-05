import React from 'react'
import logo from '../images/logo.png'
import astheticPic from '../images/asthetic-background.jpg'
import {MdOutlineSpaceDashboard as dashboardIcon,
    MdOutlineTableRows as tableIcon,
    MdProductionQuantityLimits as productsIcon,
    MdOutlineAdsClick as buttonIcon,
MdOutlineArrowDropDown as dropdownButton,
MdAnalytics as analyticsButton}from 'react-icons/md'

import {IoMdCard as cardsIcon} from 'react-icons/io'

function Sidebar() {

    const logoImage = logo
    const navItems = [
        {
            name: 'Dashboard',
            Icon: dashboardIcon
        },
        {
            name: 'Table',
            Icon: tableIcon
        },
        {
            name: 'Cards',
            Icon: cardsIcon
        },
        {
            name: 'Products',
            Icon : productsIcon
        },
        {
            name: 'Buttons',
            Icon: buttonIcon
        },
        {
            name: 'Dropdown',
            Icon: dropdownButton
        },
        {
            name: 'Analytics',
            Icon: analyticsButton
        }

    ]

    const handleClick = (name)=>{
        
    }

    return (
        <div className='sidebar'>
            <div className='sidebar__logodiv'
                style={
                    {
                        backgroundImage: `url(${astheticPic})`,
                        backgroundRepeat: 'no-repeat'
                    }
                }>
                <img src={logoImage} alt="logo" className='sidebar__logodiv__img'
                />
            </div>
            <nav className='sidebar__nav'>
                {
                    navItems.map(({ name, Icon }, index) => {
                        return (<div key={index} 
                        className='sidebar__nav__navitems'
                        onClick={(name)=>{handleClick(name)}}>
                        <Icon />{name}
                        </div>)
                    })
                }
            </nav>
        </div>
    )
}

export default Sidebar