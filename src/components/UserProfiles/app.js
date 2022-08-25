import './index.css'
import {Component} from 'react'
import Profile from './index'

const initialList = [
  {
  uniqueNo:1,
  image:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Esther HOward",
  role:"Software Developer",
  },
  {
  uniqueNo:2,
    image:"https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name:"Floyd Miles",
    role:"Software Developer",
  },
  {
  uniqueNo:3,
    image:"https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name:"Jaacob Jones",
    role:"Software Developer",
  }, 
  {
  uniqueNo:4,
    image:"https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name:"Devon Lane",
    role:"Software Developer",
  },
  {
    uniqueNo:5,
    image:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name:"Robert Junior",
    role:"Software Developer",
    },
    {
      uniqueNo:6,
      image:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
      name:"Iron Man",
      role:"Software Developer",
      },
]

class Users extends Component {
state = {
  searchInput: "",
  userDetailsList: initialList
}

changeState = (user) => {
  this.setState({searchInput: user.target.value})
  
}

   delete = (uniqueNo) => {
    const {userDetailsList} = this.state
    const updatedList = userDetailsList.filter(each => each.uniqueNo !== uniqueNo)
    this.setState({userDetailsList: updatedList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResult = userDetailsList.filter(eachUser => eachUser.name.toLowerCase().includes(searchInput.toLowerCase()))
  return (
    <div className="usercont">
        <div>
          <h1 className = "title">Users List</h1>
          <input type="search" onChange = {this.changeState} value={searchInput}/>
          {searchResult.map(eachUser => <Profile userDetails = {eachUser} key ={eachUser.uniqueNo } deletedUser = {this.delete}/>)}
        </div>
    </div>
  )
}
}
export default Users