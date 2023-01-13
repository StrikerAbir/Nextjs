import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};
function DashboardSwr() {
  const { data, error, isLoading } = useSWR("dashboard", fetcher);
  console.log(data);
  if (error) return "An error occured";
  if (isLoading) return "Loading..";
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Posts- {data.post}</h2>
      <h2>Likes- {data.likes}</h2>
      <h2>Followers- {data.followers}</h2>
      <h2>Following- {data.following}</h2>
    </div>
  );
}
export default DashboardSwr;
