import { h } from 'preact';

export function User (props) {
  return (
    <div class="user">
      <img src={props.image}/>
      <p class="user__name">{props.name}</p>
    </div>
  );
}

export default User;
