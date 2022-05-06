const itensIcons = [
    {link: "https://www.instagram.com/direct/inbox/", imgSrc:"./images/icon-direct.svg"},
    {link: "https://www.instagram.com/direct/inbox/", imgSrc:"./images/icon-explore.svg"},
    {link: "https://www.instagram.com/direct/inbox/", imgSrc:"./images/icon-heart.svg"},
    {link: "https://www.instagram.com/direct/inbox/", imgSrc:"./images/icon-person.svg"},
]
function RightIcons (props){
    return (
        <a href={props.link}><img src={props.imgSrc}/></a>
    )
}
export default function Header (){
    return (
    <header>
        <nav>
            <a href="https://www.instagram.com/">
                <div class="logo-insta">
                    <img src="./images/icon-insta.svg" alt="ico-insta"/>
                    <div class="line"></div>
                    <img src="./images/icon-insta-name.svg" alt="name-insta"/>
                </div>
            </a>

            <input type="text" placeholder="Pesquisar"/>

            <div class="right-icons">
                {itensIcons.map( item =>  <RightIcons link={item.link} imgSrc={item.imgSrc}/>)}
            </div>
        </nav>

        <div class="header-mobile">
            <img src="./images/icon-insta.svg" alt="ico-insta"/>
            <img src="./images/icon-insta-name.svg" alt="name-insta"/>
            <a href="https://www.instagram.com/direct/inbox/"><img src="./images/icon-direct.svg" alt="direct-image"/></a>
        </div>
    </header>
    )
}