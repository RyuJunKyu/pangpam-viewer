import style from './pamplat.module.css'
function Pamplat(){
    return (
        <div id="pamplat" className={style['pamplat']}>
            <div className={style['pamplat-content']}>
                <div className={style['content']}>
                    <div>1번영역</div>
                    <div>1번내용</div>
                </div>
            </div>
            <div className={style['pamplat-content']}>
                <div className={style['content']}>
                    <div>2번영역</div>
                    <div>2번내용</div>
                </div>
            </div>
            <div className={style['pamplat-content']}>
                <div className={style['content']}>
                    <div>3번영역</div>
                    <div>3번내용</div>
                </div>
            </div>
            <div className={style['pamplat-content']}>
                <div className={style['content']}>
                    <div>4번영역</div>
                    <div>4번내용</div>
                </div>
            </div>
        </div>
    )
}
export default Pamplat