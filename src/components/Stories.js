const stories = [
    {img: "./images/storie01.png", alt:"perfil-photo", name:'9gag'},
    {img: "./images/storie02.png", alt:"perfil-photo", name:'meowed'},
    {img: "./images/storie03.png", alt:"perfil-photo", name:'barked'},
    {img: "./images/storie04.png", alt:"perfil-photo", name:'nathanwpylestrangeplanet'},
    {img: "./images/storie05.png", alt:"perfil-photo", name:'wawawiwacomics'},
    {img: "./images/storie06.png", alt:"perfil-photo", name:'respondeai'},
    {img: "./images/storie07.png", alt:"perfil-photo", name:'filomodernag'},
    {img: "./images/storie08.png", alt:"perfil-photo", name:'memeriago'}]
    
function Storie(props){
    return(
        <div>
            <div class="background-img">
                <img src={props.img} alt={props.alt}/>
            </div>
            <h6>{props.name}</h6>
        </div>
    )
}
export default function Stories (){
    return (
        <div class='stories'>
            { stories.map( item => <Storie img={item.img} alt={item.alt} name={item.name} />) }
            <img src="./images/icon-arrow.svg" alt="arrow-ico"></img>
        </div>
    )
}