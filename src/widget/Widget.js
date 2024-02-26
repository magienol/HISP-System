import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './Widget.css';

const Widget = ({ type }) => {
    // Temporary data 
    let data;
    const amount = 500;
    const diff = 30;

    /* let data = {
        title: "",
        isMoney: false,
        link: "See Details",
        icon: null
    }; */

    switch (type) {
        case "customers":
            data = {
                title: "CUSTOMER",
                isMoney: false,
                link: "See details",
                icon: <PersonOutlineOutlinedIcon className='icon' style={{color: "crimson" , backgroundColor: "#ff000033" }} />
            };
            break;

        case "orders":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className='icon' style={{color: "goldenrod" , backgroundColor: "#daa52033" }} />
            };
            break;

        case "earnings":
            data = {
                title: "TOTAL EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className='icon' style={{color: "green" , backgroundColor: "#00800033" }} />
            };
            break;

        case "balance":
            data = {
                title: "MY BALANCE",
                isMoney: true,
                link: "Withdraw Money",
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color: "purple" , backgroundColor: "#80008033" }} />
            };
            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title} </span>
                <span className='Counter'> {data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage postive'>
                    <KeyboardArrowUp />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

Widget.propTypes = {
    type: PropTypes.string.isRequired,
};

export default Widget; 