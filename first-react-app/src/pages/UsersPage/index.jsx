import { UserCard } from '../../common/usercard';

export const UsersPage = (props) => {
    return (
        <div className="users-page">
            {props.users.map((item, index) => (
                <Usercard
                avatar={item.avatar}
                name={item.name}
                age={item.age}
                phone={item.phone}
                onCardClick={}
                />
            ))}
        </div>
    )
}