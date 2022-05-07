const icons = [ 
    { imgSrc: "./images/home-icon-menu.svg", alt: "home-icon"},
    { imgSrc: "./images/search-icon-menu.svg", alt: 'search-icon'},
    { imgSrc: "./images/add-circle-icon.svg", alt: 'circle-icon' },
    { imgSrc: "./images/icon-heart.svg", alt: 'heart-icon'},
    { imgSrc: "./images/icon-person.svg", alt: 'perfil-icon'}
]

function IconNav (props){
    return (
        <img width = '22px' height = '22px' src={props.imgSrc} alt="home-icon"/>
    )
}

export default function NavMobile (props){
    return (
        <div class='nav-mobile'>
            {icons.map( (item) => <IconNav imgSrc={item.imgSrc} alt={item.alt} /> )}
        </div>
    )
}