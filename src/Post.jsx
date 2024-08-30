import './Friend.css'

export default function Post(post){

    const {title, body} = post.post;
    // console.log(post.post)

    return(
        <div className='box'>
            <h3>Title: {title} </h3>
            <p><strong>Disc:{body}</strong> </p>
        </div>
    )
}