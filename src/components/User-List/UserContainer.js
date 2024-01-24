
import NewUser from './NewUser';

const UserContainer=(props)=>{
    return(
        props.users.map((user)=>{
            return <NewUser data={user}/>
        })
    )
}
export default UserContainer;