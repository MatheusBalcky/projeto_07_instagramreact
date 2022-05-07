import Stories from "./Stories";
import Posts from "./Posts";
import Aside from "./Aside";

export default function Main (){
    return(
        <main>
            <section>
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
                <Aside />
            </section>
        </main>
    )
}