import React from 'react'

function SectionItem(props) {
    console.log(props)
    return (
        <div className="item">
            <img src="./assets/imgs/mienbac.jpg" alt="" />
            <p>{props.item.tourName}</p>
            <div className="item-firs">
                <span className="score">8.0</span>
                <span>Rất tốt | 1 đánh giá</span>
            </div>
            {props.item.liList}
            <div className="price">
                <p>{props.item.tourPrice}</p>
            </div>
        </div>
    )
}

export default SectionItem
