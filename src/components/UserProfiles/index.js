const Profile = (props) => {
    const {userDetails , deletedUser} = props
    const {name , role , image , uniqueNo} = userDetails

    const deleteUser = () => {
        deletedUser(uniqueNo)
    }

    return (
        <div className="card-cont">
            <img src={image} className="img" alt="imgee"/>
            <div className="name-cont">
                <h1 className="head">{name}</h1>
                <p className="role">{role}</p>
            </div>
            <button className="del-button" onClick={deleteUser}><img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" alt="crs" className="cross"/></button>
        </div>
    )
}

export  default Profile
