import React, { Component } from 'react';


class Australia extends Component {
    constructor(props){
        super(props);
        this.state= {
            items : []
        };
    }

componentDidMount(){
    fetch("https://randomuser.me/api/?results=6&nat=au")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(data => (
        {
            id : `${data.id.name}`,
            picture : `${data.picture.large}`,
            title : `${data.name.title}`,
            firstname : `${data.name.first}`,
            lastname : `${data.name.last}`,
            email : `${data.email}`,
            username : `${data.login.username}`,
            password : `${data.login.password}`
        }
    )))
    .then(items => this.setState({
        items,
        isLoaded : false
    }))
    .catch(error=>console.log('parsing failed', error)
    )
}

  render(){
    const {items }= this.state;
    return(
      <div className="boxWhite">
        {
            items.length > 0 ? items.map(item => {
                const {id, picture, title, firstname, lastname, email,username,password} = item;
                return(
                    <div key={id} className="bgCircle">
                        <center><img src={picture} alt={firstname} className="circle"/></center>
                        <br />
                        <div className="ctr">
                           {title} {firstname} {lastname} 
                           <br/>
                           {email}
                           <br/>
                           <a>u : {username} </a>
                           <br/>
                           <a>p : {password} </a>
                        </div>
                    </div>
                );
            }) : null
        }
      
      </div>
    );
  }
}
export default Australia;