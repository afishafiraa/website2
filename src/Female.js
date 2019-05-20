    
import React, { Component } from 'react';


class Female extends Component {
    constructor(props){
        super(props);
        this.state= {
            items : []
        };
    }

componentDidMount(){
    fetch("https://randomuser.me/api/?results=6&gender=female")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(data => (
        {
            id : `${data.id.name}`,
            picture : `${data.picture.large}`,
            title : `${data.name.title}`,
            firstname : `${data.name.first}`,
            lastname : `${data.name.last}`,
            location : `${data.location.city}`
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
                const {id, picture, title, firstname, lastname, location} = item;
                return(
                    <div key={id} className="bgCircle">
                        <center><img src={picture} alt={firstname} className="circle"/></center>
                        <br />
                        <div className="ctr">
                           {title} {firstname} {lastname} <br />
                           {location}
                        </div>
                    </div>
                );
            }) : null
        }
      
      </div>
    );
  }
}
export default Female;