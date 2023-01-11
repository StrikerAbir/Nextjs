function Post({post}) {
    return (
        <>
            <h2>{post.id} {post.title}</h2>
            <p>{ post.body}</p>
        </>
    )
}
export default Post

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map(post => {
    return {
      params: {
        postid:`${post.id}`
      }
    }
  })
  return {
    // paths: [
    //   {
    //     params: {postid:'1'}
    //   },
    //   {
    //     params: {postid:'2'}
    //   },
    //   {
    //     params: {postid:'3'}
    //   },
    // ],
    paths,
    fallback:false,
  }
}

export async function getStaticProps(context) {
    const { params } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`);
  const data = await res.json();
  return {
    props: {
      post: data
    },
  };
}