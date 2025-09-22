export default async function BlogPost({ params }: { params: { id: string } }) {
  const id = (await params).id;
  // Simulate fetching blog post data based on the id
  const post = {
    id,
    title: `Blog Post ${id}`,
    content: `This is the content of blog post ${id}.`,
  };
  return (
    <main>
      <div className="container">
        <h1 className="title">
          Blog Post {id}
        </h1>
        <div className="content">
          {post.content}
        </div>
      </div>
    </main>
  );
}