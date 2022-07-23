import React from 'react'
import Slider from "react-slick";
import styles from "../Components/HomePageSlider.module.css"

const HomePageSlider = () => {
  
    const mens = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Browes by Property type</h1>
      <div className={styles.Slider_Elments_Main}>
      <Slider {...mens}>
        <div className={styles.Slider_Elements_Main_cont}>
          <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Hotels</div>
            <div className={styles.Slider_Elments_Main_Price}>877,251 hotels</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Resorts</div>
            <div className={styles.Slider_Elments_Main_Price}>17,978 resorts</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Villas</div>
            <div className={styles.Slider_Elments_Main_Price}>476,432 villas</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Apartments</div>
            <div className={styles.Slider_Elments_Main_Price}>906,009 apartments</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Cabins</div>
            <div className={styles.Slider_Elments_Main_Price}>36,202 cabins</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Cottages</div>
            <div className={styles.Slider_Elments_Main_Price}>155,642 cottages</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Glamping</div>
            <div className={styles.Slider_Elments_Main_Price}>13,370 glamping sites</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Service apartments</div>
            <div className={styles.Slider_Elments_Main_Price}>35,245 service apartments</div>
          </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
      </Slider>
      </div>
    </div>
  )
}

export default HomePageSlider