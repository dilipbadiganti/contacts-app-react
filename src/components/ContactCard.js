import React from 'react'
import user from '../images/user.png'
 
const ContactCard = (props) => {


    const {id, name, email} = props.contact

    return(

        <div className='item'>
            <img className='ui avatar image' src={user} alt='user'/>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='header'>{email}</div>
                </div>
                <i className='trash alternate outline icon' style={{ color: 'firebrick', float: 'right', fontSize: '26px', marginTop: '1px'}}></i>
        </div>

    
    )
}


export default ContactCard