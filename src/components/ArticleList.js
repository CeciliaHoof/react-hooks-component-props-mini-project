import Article from "./Article.js"

function ArticleList({ posts }){
    const postsToRender = posts.map(post => (
        <Article date={post.date}
            preview={post.preview}
            title={post.title}
            key={post.id} />
    ))
        
    return(
        <main>
            {postsToRender}
        </main>
    )
}

export default ArticleList