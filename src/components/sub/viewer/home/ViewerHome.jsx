import style from './ViewerHome.module.css'
function ViewerHome({props}){
    const onClickViewer = (model) => {
        props(false,model);
    }
    return (
        <div className={style['viewerHome']}>
            <div>뷰어</div>
            <ul className={style['viewer-list']}>
                <li onClick={()=>onClickViewer('1')}>
                    <div className={style['box']}></div>
                    <span className={style['label']}>viewer1</span>
                </li>
                <li onClick={()=>onClickViewer('2')}>
                    <div className={style['box']}></div>
                    <span className={style['label']}>viewer2</span>
                </li>
                <li onClick={()=>onClickViewer('3')}>
                    <div className={style['box']}></div>
                    <span className={style['label']}>viewer3</span>
                </li>
                <li onClick={()=>onClickViewer('4')}>
                    <div className={style['box']}></div>
                    <span className={style['label']}>viewer4</span>
                </li>
            </ul>
        </div>
    )
}
export default ViewerHome