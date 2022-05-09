import objetoPost from './ApiPost';
import Post from './Post';

export default function Posts (){
    return (
        <div class='posts'>
            { objetoPost.map( (item) =>
            <Post
                objetoPost={item}
            />)}
        </div>
    )
}