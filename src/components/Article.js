function Article({ date="January 1, 1970", title, preview}){
    console.log(preview, title)
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article