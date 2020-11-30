import React from 'react'

function Slider() {
    return (
        <div class="mainvisual">
            <img class="slide" src="./assets/imgs/main.png" idx="0" alt="" />
            <img class="slide" src="./assets/imgs/main2.png" idx="1" alt="" />
            <img class="slide" src="./assets/imgs/main.png" idx="1" alt="" />
            <img class="slide" src="./assets/imgs/main2.png" idx="1" alt="" />


            <img class="btn-change" id="prev" src="./assets/imgs/prev.png" alt="" />
            <img class="btn-change" id="next" src="./assets/imgs/next.jpg" alt="" />

            <div class="inputarea">
                <input type="text" class="inp1" placeholder="Bạn muốn đi đâu?" />
                <input type="text" class="inp2" placeholder="Thứ sáu 27-22-2020" />
                <input type="text" class="inp2" placeholder=" Khởi hành từ" />
                <button class="searchbtn">Search</button>
            </div>
        </div>
    )
}

export default Slider
