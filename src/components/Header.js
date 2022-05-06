function RightIcons (props){
    return (
        <a href={props.link}><img src={props.imgSrc}/></a>
        <a href={props.link}><img src={props.imgSrc}/></a>
        <a href={props.link}><img src={props.imgSrc}/></a>
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
                <RightIcons link="https://www.instagram.com/direct/inbox/" imgSrc="./images/icon-direct.svg"/>
                <RightIcons link="https://www.instagram.com/direct/inbox/" imgSrc="./images/icon-explore.svg"/>
                <RightIcons link="https://www.instagram.com/direct/inbox/" imgSrc="notifications-icon"/>
                <RightIcons link="https://www.instagram.com/direct/inbox/" imgSrc="./images/icon-direct.svg"/>
                <a href="https://www.instagram.com/"><img src="./images/icon-heart.svg" alt="notifications-icon"/></a>
                <a href="https://www.instagram.com/instagram"><img src="./images/icon-person.svg" alt="icon-person"/></a>
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