import React from 'react';

const objetoPost = [
    { imgPerfil:"./images/storie02.png",
    namePerf:"meowed",
    contentPostImg: "./images/gato-telefone-1.png",
    friendLike: "respondeai",
    peopleLiked: "outras 101.523 pessoas",
    nameComment: ["ronaldinho.gaucho",'ronaldo', 'tonystark'],
    comments: ["Enquanto tu tava lendo", "co foi vacilou meti o dribe aqui tbm hehe", "gatinho brabo"],
    },
    { imgPerfil:"./images/storie03.png",
    namePerf:"barked",
    contentPostImg: "./images/dog-photo.png",
    friendLike: "adorable_animals",
    peopleLiked: "utras 99.159 pessoas",
    nameComment: [],
    comments: [],
    },
    { imgPerfil:"./images/storie02.png",
    namePerf:"postcomvideo.",
    contentPostImg: "",
    srcPostVideo1: "/videos/video.mp4",
    srcPostVideo1Type: "video/mp4",
    srcPostVideo2: "/videos/video.ogv",
    srcPostVideo2Type: "video/ogv",
    srcPostVideo3: "",
    srcPostVideo3Type: "",
    friendLike: "respondeai",
    peopleLiked: "outras 101.523 pessoas",
    nameComment: ["ronaldinho.gaucho",'pessoa 02', 'pessoa 03'],
    comments: ["Tô feliz pq meu comentários automatizado pegou vei", "comentário 02", 'comentário'],
    }
]



function ComponentImg (props){
    return (
        <img src={props.contentPostImg} alt='content-post-img-or-video'/>
    )
}
function ComponentVideo (props){
    return (
        <video width="100%" autoPlay muted>
            <source src={props.srcPostVideo1} type={props.srcPostVideo1Type}/>
            <source src={props.srcPostVideo2} type={props.srcPostVideo2Type}/>
            <source src={props.srcPostVideo3} type={props.srcPostVideo3Type}/>
        </video>
    )
}
function IsVideoOrImg(valor, props){
    if (valor === 0){ return <ComponentVideo
        srcPostVideo1={props.srcPostVideo1}
        srcPostVideo1Type={props.srcPostVideo1Type}
        srcPostVideo2={props.srcPostVideo2}
        srcPostVideo2Type={props.srcPostVideo2Type}/>
    } else { return <ComponentImg contentPostImg={props.contentPostImg}/>}
}
function Comment(props){
    let arrayComments = [];
    let namesComment = objetoPost[props.index].nameComment;
    let comments = objetoPost[props.index].comments;
    for (let i = 0; i < namesComment.length; i++){
        arrayComments.push(
        <div>
            <span><strong>{namesComment[i]}</strong> {props.comments[i]}</span>
            <img width= '13px' height= '13px' src="./images/icon-heart.svg" alt="heart-like"/>
        </div>)
    }
    return(
        arrayComments
    )
    
}
function Post (props){
    const [heart, setImg] = React.useState('heart-outline');

    function clickLike (){
        heart === 'heart-outline' ? setImg('heart') : setImg('heart-outline');
    }

    return (
        <div>
            <div class="head-post">
                <div>
                    <img src={props.imgPerfil} alt="perfi-icon-img"/>
                    <h5>{props.namePerf}</h5>
                </div>
                <img src="./images/points-menu-head-post.svg" alt="points-menu-post"/>
            </div>

            <span class='canva-postimg' onDoubleClick={clickLike}>
            { IsVideoOrImg(props.contentPostImg.length, props)}
            </span>
    
            <div class="footer-post">
                <div class="icons-post">
                    <div>
                        <ion-icon onClick={clickLike} name={heart}></ion-icon>
                        <img src="./images/coment-icon.svg" alt="coment-icon"/>
                        <img src="./images/icon-direct.svg" alt="direct-icon"/>
                    </div>
                    <img src="./images/save-icon.svg" alt="save-icon"/>
                </div>

                <div class="information-post">
                    <img width= '20px' src={props.imgPerfil} alt={props.altImgPerf}/>
                    <h5>Curtido por <strong>{props.friendLike}</strong> e <strong>{props.peopleLiked}</strong></h5>
                </div>

                <div class="comments">
                    {Comment(props)}
                </div>
                
            </div>

            <div class="comment-bar">
                <div>
                    <img width= '28px' src="./images/happy-outline.svg" alt="emoji-icon"/>
                    <input type="text" placeholder="Add a comment..."/>
                </div>
                <button>Publicar</button>
            </div>
        </div>
    )
}


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