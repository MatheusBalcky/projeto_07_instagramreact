import ReactDOM from "react-dom";
import Header from "./components/Header";


function App (){
    return (
        <Header />
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));