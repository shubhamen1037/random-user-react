import React, {Component} from 'react'

class SearchBox extends Component{

    constructor(props){
        super(props);
    }
 
   
    render(){
        const { handleChange } = this.props;
        return <div>
                    <input type="text" name="searchInput"  onChange={handleChange}/>
                </div>
    }
}

export default SearchBox;
