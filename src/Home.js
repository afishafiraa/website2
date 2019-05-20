import React, { Component } from 'react';


class Home extends Component {
    constructor(props){
        super(props);
        this.state= {
            items : []
        };
    }

componentDidMount(){
    fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.results.map(data => (
        {
            id : `${data.id.name}`,
            picture : `${data.picture.large}`,
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
                const {id, picture, firstname, lastname, location} = item;
                return(
                    <div key={id} className="bgCircle">
                        <center><img src={picture} alt={firstname} className="circle"/></center>
                        <br />
                        <div className="ctr">
                           {firstname} {lastname} <br />
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

export default Home;