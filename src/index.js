import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import NavMobile from "./components/NavMobile";


function App (){
    return (
        <div>
            <Header />
            <Main />
            <NavMobile />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));