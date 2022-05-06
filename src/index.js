import ReactDOM from "react-dom";
import Header from "./components/Header";
import Main from "./components/Main";


function App (){
    return (
        <div>
            <Header />
            <Main />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));