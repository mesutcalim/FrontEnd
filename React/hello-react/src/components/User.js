import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn,friends, address}){
    //console.log(props)
    return <><h1>{
        isLoggedIn ? `${name} ${surname} (${age})`
        :"Giriş Yapmadınız."
    }</h1>
    {address.title} {address.zip}
    <br />
    <br />
    {friends && 
        friends.map((friend) => (<div key={friend.id}>{friend.id} - {friend.name}</div>))
    }
</>
    
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age : PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    friends : PropTypes.array,
    address : PropTypes.shape({
        title: PropTypes.string,
        zip : PropTypes.number,
    })
};

User.defaultProps = {
    name : "isimsiz",
    isLoggedIn : false,
}

export default User;