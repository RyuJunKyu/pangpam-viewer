import { SketchPicker } from "react-color";
import { HexColorPicker } from "react-colorful";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from './viewColor.module.css'
function ViewerColor({props}){
    return(
        <div className={style['viewColor']}>
            <div className={style['viewColor-header']}>
                <FontAwesomeIcon className={style['xmark']} icon={faXmark} onClick={() => props(false)}/>
            </div>
                <HexColorPicker className={style['color-picker']} />
        </div>
    )
}
export default ViewerColor;