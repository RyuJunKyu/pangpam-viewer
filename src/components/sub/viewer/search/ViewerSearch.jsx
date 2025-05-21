import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import style from './ViewerSearch.module.css'
function ViewerSearch({props}){
    return (
        <div className={style['viewSearch']}>
            <div className={style['viewSearch-header']}>
                <div>주변 관광 정보</div>
                <FontAwesomeIcon className={style['xmark']} icon={faXmark} onClick={() => props(false)}/>
            </div>
            <div className={style['header-line']}></div>
            <div className={style['search-input']}>
                <input></input>
            </div>
            <div className={style['viewer-category']}>
                <div>관광</div>
                <div>숙박</div>
                <div>맛집</div>
            </div>
        </div>
    )
}
export default ViewerSearch