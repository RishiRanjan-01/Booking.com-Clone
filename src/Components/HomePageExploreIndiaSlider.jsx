import React from 'react'
import Slider from "react-slick";
import styles from "../Components/HomePageSlider.module.css"

const HomePageExploreIndiaSlider = () => {
  
    const mens = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Explore India</h1>
      <div className={styles.Slider_Elments_Main}>
      <Slider {...mens}>
        <div className={styles.Slider_Elements_Main_cont}>
          <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/city/square250/684622.webp?k=f9eacb40b8f7c8560afc74cdcfe2e7028e5117a36a0d8d3356f735ea3ac20f4f&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Gurgaon</div>
            <div className={styles.Slider_Elments_Main_Price}>1,134 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>New Delhi</div>
            <div className={styles.Slider_Elments_Main_Price}>2,913 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/city/square250/691495.webp?k=1c9ca7d6f4c56ca1c8b5b26d842a2345d1e074a2a34df42f5e3179ff0fe060f3&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Noida</div>
            <div className={styles.Slider_Elments_Main_Price}>436 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/city/square250/684657.webp?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Jaipur</div>
            <div className={styles.Slider_Elments_Main_Price}>1,558 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/city/square250/684501.webp?k=225f7713b3f47f0c2c580c34c35582ba70331757bcc8dc32e7f17072c80805ff&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Agra</div>
            <div className={styles.Slider_Elments_Main_Price}>413 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Goa</div>
            <div className={styles.Slider_Elments_Main_Price}>5,244 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Mumbai</div>
            <div className={styles.Slider_Elments_Main_Price}>1,651 properties</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Rishīkesh</div>
            <div className={styles.Slider_Elments_Main_Price}>480 properties</div>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  )
}

export default HomePageExploreIndiaSlider