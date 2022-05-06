import Stories from "./Stories";
import Posts from "./Posts";

export default function Main (){
    return(
        <main>
            <section>
                <div class="feed">
                    <Stories />
                    <Posts />
                </div>
            </section>
        </main>
    )
}