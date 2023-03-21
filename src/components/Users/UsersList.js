import Card from '../UI/Card';

import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
// every child in a list should have a key prop which has a unique value. React needs this to efficiently update list items and render them efficientlly.