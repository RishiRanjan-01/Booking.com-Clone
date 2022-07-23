import React from 'react'
import Slider from "react-slick";
import styles from "../Components/HomePageSlider.module.css"

const HomePageHomeGuestLoveSlider = () => {
  
  const mens = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  
return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Guest Love</h1>
      <div className={styles.Slider_Elments_Main}>
      <Slider {...mens}>
        <div className={styles.Slider_Elements_Main_cont}>
          <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Villa Domina</div>
            <div className={styles.Slider_Elments_Main_Price}>Starting from ₹ 12,991</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Appartamento Benincampi</div>
            <div className={styles.Slider_Elments_Main_Price}>Starting from ₹ 20,426</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Templova 6 Old Town Apartment</div>
            <div className={styles.Slider_Elments_Main_Price}>Starting from ₹ 15,442</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Lake View Apartment Amsterdam</div>
            <div className={styles.Slider_Elments_Main_Price}>Starting from ₹ 73,533</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>P&J Luxury Apartments</div>
            <div className={styles.Slider_Elments_Main_Price}>Starting from ₹ 5,756</div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomePageHomeGuestLoveSlider