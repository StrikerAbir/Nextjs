import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params=[] } = router.query;  // [] dewa hoise jate error na ashe. default []
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        Viewing docs for features features {params[0]} and concepts {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    <h1>Viewing docs for features features{params[0]}</h1>;
  } 
    return <h1>docs home page</h1>;
}
export default Docs;
