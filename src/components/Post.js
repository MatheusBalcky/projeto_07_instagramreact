import React from "react";
import CommentBar from './CommentBar'


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

// *FUNÇÃO QUE VALIDA SE É IMAGEM OU VIDEO PARA RENDERIZAR CERTO COMPONENTE...
function IsVideoOrImg(valor, props){
    if (valor === 0){ return <ComponentVideo
        srcPostVideo1={props.srcPostVideo1}
        srcPostVideo1Type={props.srcPostVideo1Type}
        srcPostVideo2={props.srcPostVideo2}
        srcPostVideo2Type={props.srcPostVideo2Type}/>
    } else { return <ComponentImg contentPostImg={props.contentPostImg}/> }
}

// * Essa função vai renderizar somente se tiver comentários
function Comment(props){ 
    let arrayComments = [];
    let numbersComment = props.nameComment;
    for (let i = 0; i < numbersComment.length; i++){
        arrayComments.push(
        <div>
            <span><strong>{props.nameComment[i]}</strong> {props.comments[i]}</span>
            <ion-icon class='heart-comment' name='heart-outline'></ion-icon>
        </div>)
    }
    return(
        arrayComments
    )
    
}


export default function Post (props){
    const currentPost = props.objetoPost;
    const [heart, setImg] = React.useState('heart-outline');

    function clickLike (){
        heart === 'heart-outline' ? setImg('heart') : setImg('heart-outline');
    }

    return (
        <div>
            <div class="head-post">
                <div>
                    <img src={currentPost.imgPerfil} alt="perfi-icon-img"/>
                    <h5>{currentPost.namePerf}</h5>
                </div>
                <img src="./images/points-menu-head-post.svg" alt="points-menu-post"/>
            </div>

            <span class='canva-postimg' onDoubleClick={clickLike}>
            { IsVideoOrImg(currentPost.contentPostImg.length, currentPost)}
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
                    <img width= '20px' src={currentPost.imgPerfil} alt={currentPost.altImgPerf}/>
                    <h5>Curtido por <strong>{currentPost.friendLike}</strong> e <strong>{currentPost.peopleLiked}</strong></h5>
                </div>

                <div class="comments">
                    {Comment(currentPost)}
                </div>
                
            </div>

            <CommentBar />
        </div>
    )
}