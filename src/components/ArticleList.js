import Article from "./Article"

function ArticleList(posts){
    const postsArr=posts.posts;
    return(
        <main>
            {postsArr.map((postObj)=> {
                return <Article title={postObj.title} date={postObj.date} preview={postObj.preview} key={postObj.id} /> })
            }
        </main>
    );
};

export default ArticleList;