import User from "../components/user";

function UserList({ users }) {
  return (
    <>
      <h1>List of User</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user}></User>
          </div>
        );
      })}
    </>
  );
}
export default UserList;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      users: data,
    },
  };
}
