const Post = ({element,id,clicktag}) => {
    return (
        <li key={id}>
            <figure>
                <img src={element.image} alt={element.tags[0]} />
            </figure>
            <div className='detail'>
                <h3>ID : {element.id}</h3>
                <p>Text : {element.text}</p>
                <div className='tags'>Tags : {element.tags.map(tag => (<button key={tag} onClick={() => clicktag(tag)}>{tag}</button>))}</div>
                <div className='post-owner'>
                    <h5>-- {element.owner.title}. {element.owner.firstName} {element.owner.lastName}</h5>
                    <span>{element.publishDate.slice(0, 10)}</span>
                </div>
            </div>
        </li>
    )
}

export default Post;