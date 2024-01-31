import React from 'react'
import ContactCard from './ContactCard'

const contactList = (props) => {

    
    const renderTheList = props.contacts.map((contact) => {
        return(
            
            <ContactCard contact={contact}></ContactCard>

        )
    })
    return <div className='ui celled list'>{renderTheList}</div>
}

export default contactList