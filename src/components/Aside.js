const personsSuggested = [
    { imgSrc: "./images/badvibes-photo.png", personName: "bad.vibes.memes"},
    { imgSrc: "./images/birdperfil-photo.png", personName: "chibirdart"},
    { imgSrc: "./images/razoespara-photo.png", personName: "razoesparaacreditar"},
    { imgSrc: "./images/adorable-animals.png", personName: "adorable_animals"},
    { imgSrc: "./images/smallcutecats-photo.png", personName: "smallcutecats"}
]

function PersonsSuggested (props){
    return (
        <div class="person-suggested">
            <div>
                <img src={props.imgSrc} alt="photo-perfil-insta"/>
                <div class="name-person">
                    <h5>{props.personName}</h5>
                    <h6>Segue você</h6>
                </div>
            </div>
            <h6>Seguir</h6>
        </div>
    )
}

export default function Aside (){
    return (
        <div class='aside'>
                <div>
                    <img src="./images/photo-perfil-insta.png" alt="perfil-photo"/>
                    <div>
                        <h5>catanacomics</h5>
                        <h6>Catana</h6>
                    </div>
                </div>

                <div>
                    <div class="suggestion">
                        <h6>Sugestões para você</h6>
                        <a href="#"><strong>Ver tudo</strong></a>
                    </div>

                    <div class="canva-persons">
                        {personsSuggested.map( item => <PersonsSuggested imgSrc={item.imgSrc} personName={item.personName}/>)}
                    </div>

                </div>

                <div>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags • 
                    Idioma <br/> <br/> <br/>

                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
        </div>
    )
}