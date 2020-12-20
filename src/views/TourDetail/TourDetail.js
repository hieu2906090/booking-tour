import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/TourDetail/TourDetail.css";
import Header from "../../components/Header";
import DetailSideBar from "./components/DetailSideBar";
import DetailContent from "./components/DetailContent";
import Swal from 'sweetalert2';

function TourDetail(props) {
  const modalRef = useRef("");
  const [isOpen, setIsOpen] = useState('none');
  const [inputForm, setInputForm] = useState('');
  const handleCallModalOpen = () => {
    let styleModal = isOpen === 'none' ? 'block' : 'none';
    // if (isOpen === 'none') {
    //   document.getElementById('myModal').reset();
    // }
    setIsOpen(styleModal);
  }

  function handleInputChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setInputForm({
      ...inputForm,
      [name]: value
    });
  }

  function saveUserRequestForm() {
    // TODO 1: VALIDATE giá trị input truyền vào có rỗng hay đúng (là email, là điện thoại)
    //

    // STEP 2: Khi đúng rồi thì hiện thông báo hỏi người dùng có muốn lưu thông tin
    Swal.fire({
      title: `Bạn ${inputForm.fullname} có muốn đặt tour không?`,
      showDenyButton: true,
      confirmButtonText: `Đồng Ý`,
      denyButtonText: `Bỏ qua`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // STEP 3: Nếu thành công thì hiện thông báo cho người dùng
        Swal.fire('Thành Công!', `Bạn đã gởi yêu cầu thành công. Chúng tôi sẽ liên hệ đến số điện thoại ${inputForm.phone} trong thời gian sớm nhất.`, 'success')
        setIsOpen('none');
        // TODO 4: Lưu thông tin về server (trang admin)
        //
      } else if (result.isDenied) {
        Swal.fire('Không Thành Công', '', 'info');
        setIsOpen('none');
      }
    })
    console.log('Cac Gia Tri Input hien tai:', inputForm);

  }

  return (
    <div className="content-wrapper">
      <Header></Header>
      <div className="container">
        <div className="col-xs-12 no-padding">
          <div className="row">
            <DetailSideBar abc={handleCallModalOpen}></DetailSideBar>
            <DetailContent tour={props.tour}></DetailContent>
          </div>
        </div>
      </div>
      <div id="myModal" class="modal-tour-detail" ref={modalRef} style={{ display: isOpen }}>
        <div class="modal-content">
          <span class="close" onClick={handleCallModalOpen}>&times;</span>
          <form>
            <div className="form-group">
              <label for="hoVaTen"> Họ& Tên:</label>
              <input onChange={handleInputChange} class="form-control" name="fullname" type="text" id="hoVaTen" />
            </div>
            <div className="form-group">
              <label for="phone"> Điện thoại:</label>
              <input onChange={handleInputChange} class="form-control" name="phone" type="text" id="phone" />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input onChange={handleInputChange} class="form-control" name="email" type="text" id="email" />
            </div>
            <div className="form-group">

              <label for="requirement">Yêu cầu khác</label>
              <input onChange={handleInputChange} class="form-control" name="requirement" type="text" id="requirement" />
            </div>
            <button type="button" onClick={saveUserRequestForm} class="btn modal-btn">Gửi yêu cầu</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
