import style from "./service.module.css"
import Viewer from "../viewer/viewer";
function Service(){
    return (
        <div id={'service'} className={style['service-wrapper']}>
            <Viewer />
            <div className={style['service-pamphlet']}></div>
        </div>
    )
}
export default Service;