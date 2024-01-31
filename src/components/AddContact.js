import React from "react"


class addContact extends  React.Component{

    state = {
        name : "",
        email : "",
    }

    add = (e) => {
        e.preventDefault()
        if(this.state.name === "" || this.state.email === ""){
            alert("Please fill all the fields")
            return 
        }
        this.props.addContactHandler(this.state)

        this.setState({name: "", email: "",})
        // console.log(this.state);
        
    }

    render(){

        return(
        
        <div className="ui main">
                <h2>Add Contacts</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" name="name" onChange={ (e)=> this.setState({name:e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" placeholder="Enter Email" name="email" onChange={ (e) => this.setState({email:e.target.value})}></input>
                    </div>
                    <button className="ui button orange">Add</button>
                </form>
        
    
        </div>





        )


    }


}

export default addContact