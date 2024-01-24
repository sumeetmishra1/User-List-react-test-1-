import './NewUser.css'
const User=(props)=>{
    const Name=props.data.name;
    const Age=props.data.age;
    return(
        <div className="list-item">
            <li>{Name} ({Age})</li>
        </div>
    )
}
export default User;