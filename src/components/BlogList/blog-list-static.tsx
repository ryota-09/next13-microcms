import { getList } from "@/lib/microcms";

async function fetchBlogs() {
  const { contents } = await getList();
  return contents;
}

export default async function BlogList() {
  const contents = await fetchBlogs();
  const debug = () => {
    console.log(contents)
  }
  return (
    <div>
      <p>Blogs</p>
      {/* <button onClick={() => debug()}>ボタン</button> */}
      <ul>
        {contents?.map((blog) => (
          <li key={blog.id}>
            {blog.title}
            {blog.content}
            {/* <Link href={`/blogs/${blog.id}`}>{blog.title}</Link> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
