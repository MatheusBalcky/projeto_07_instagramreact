import objetoPost from './ApiPost';
import Post from './Post';

export default function Posts (){
    return (
        <div class='posts'>
            { objetoPost.map( (item, index) =>
            <Post
                imgPerfil={item.imgPerfil}
                namePerf={item.namePerf}
                contentPostImg={item.contentPostImg}
                srcPostVideo1={item.srcPostVideo1}
                srcPostVideo1Type={item.srcPostVideo1Type}
                srcPostVideo2={item.srcPostVideo2}
                srcPostVideo2Type={item.srcPostVideo2Type}
                srcPostVideo3={item.srcPostVideo3}
                srcPostVideo3Type={item.srcPostVideo3Type}
                friendLike={item.friendLike}
                peopleLiked={item.peopleLiked}
                nameComment={item.nameComment}
                comments={item.comments}
                index={index}
            />)}
        </div>
    )
}