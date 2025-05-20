import Service from "../sub/service/Service";
import style from "./main.module.css"
function Main(){
    return(
        <div className={style.main}>
            <Service />
        </div>
    )
}
export default Main;