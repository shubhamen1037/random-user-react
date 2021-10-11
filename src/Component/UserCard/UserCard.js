import React, {Component} from 'react'
import './UserCard.css'

class UserCard extends Component{
    constructor(props){
        super(props)
    }


    render(){
        const {data: {picture:{large}, name:{last, first, title}, email}} = this.props;

       return <div className = "user-card-content">
                <img src={large} alt='shown' ></img>
                <div>
                    Name: <span>{title} {first} {last}</span>
                </div>
                <div>
                    Email-Id: <span>{email}</span>
                </div>
        </div>
    }
}

export default UserCard;