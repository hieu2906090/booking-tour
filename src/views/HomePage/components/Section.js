import React from 'react'
import SectionItem from './SectionItem'

function Section() {
    const itemArr = [{
        tourName: "Tour Miền Bắc 5N4D: Sài Gòn - Hà Nội -SaPa - Hạ Long",
        liList: (<div className="itemli">
            <ul>
                <li>Khách sạn 3 sao</li>
                <li>Bay Vietjet</li>
            </ul>
        </div>),
        tourPrice: "6.490.000VND"
    },
    {
        tourName: "Tour Miền Nam 5N4D: Sài Gòn - Hà Nội -SaPa - Hạ Long",
        liList: (<div className="itemli">
            <ul>
                <li>Khách sạn 4 sao</li>
                <li>Bay VNAir</li>
            </ul>
        </div>),
        tourPrice: "7.490.000VND"
    },
    {
        tourName: "Tour Miền Nam 5N4D: Sài Gòn - Hà Nội -SaPa - Hạ Long",
        liList: (<div className="itemli">
            <ul>
                <li>Khách sạn 4 sao</li>
                <li>Bay VNAir</li>
            </ul>
        </div>),
        tourPrice: "7.490.000VND"
    },
    {
        tourName: "Tour Miền Nam 5N4D: Sài Gòn - Hà Nội -SaPa - Hạ Long",
        liList: (<div className="itemli">
            <ul>
                <li>Khách sạn 4 sao</li>
                <li>Bay VNAir</li>
            </ul>
        </div>),
        tourPrice: "7.490.000VND"
    }];
    return (
        <div className="section1">
            <h2>
                <a href="">
                    <span className="sec-til">
                        Tour Tết Tân Sửu
                    </span>
                    <span className="sec-sub">Xem thêm tours</span>
                </a>
            </h2>
            {itemArr.map((item, idx) => {
                return <SectionItem item={item} key={idx}></SectionItem>
            })}

        </div>

    )
}

export default Section
