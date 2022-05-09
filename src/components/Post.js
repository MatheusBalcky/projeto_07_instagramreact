import React from "react"
import objetoPost from "./ApiPost"


function ComponentImg (props){
    return (
        <img src={props.contentPostImg}/>
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

function Comment(props){ // essa função vai renderizar somente se tiver comentários
    let arrayComments = [];
    let namesComment = objetoPost[props.index].nameComment;
    let comments = objetoPost[props.index].comments;
    for (let i = 0; i < namesComment.length; i++){
        arrayComments.push(
        <div>
            <span><strong>{namesComment[i]}</strong> {props.comments[i]}</span>
            <ion-icon class='heart-comment' name='heart-outline'></ion-icon>
        </div>)
    }
    console.log(arrayComments);
    return(
        arrayComments
    )
    
}


export default function Post (props){
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