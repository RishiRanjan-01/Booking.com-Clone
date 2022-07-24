import React from 'react'
import Slider from "react-slick";
import styles from "../../FlightHome/PopularFlight/PopularflightCarosel.module.css"


export const PopularflightdomesticCarousal = () => {
  
  const mens = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  
  return (
    <div className={styles.SliderImage_main}>
      <h1 className={styles.SliderIamge_title}>Popular flights</h1>
      <div className={styles.Slider_Elments_Main}>
      <Slider {...mens}>
        <div className={styles.Slider_Elements_Main_cont}>
          <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684764.jpg?k=6c3c9e920a39ca4f9eddcdfaa916999ea5d2765844610dd59349f4271f7596b3&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>New Delhi, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684533.jpg?k=efaef4796fa555481ddabf686c3fc66433b50ba69c936d6f702b1125b1d06748&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Bangalore, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/971345.jpg?k=9bf85dfa10a224e2855ca2f8ca3fcd96916a962d87cdfcc48d6d57c09bef3c65&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Mumbai, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684568.jpg?k=2e0d30ebcaf31e7469617ea53a01cdaf68d14c506d1167af9b9b38e53832f156&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Kolkata, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/619923.jpg?k=4fb13225390240a51ee5aa1d76318d03dc0de8a046ddc06e4598f17b287bdcc9&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Dubai, United Arab Emirates</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684820.jpg?k=29ee5cee377c4e6cfba7a474d02914660d3311f0b75d1b9cf3bdefef0eabffdd&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Pune, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684652.jpg?k=5055a718205497d78d7d80b05c6cfbd59b79af5998231e50c23832e103087691&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Hyderabad, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684757.jpg?k=5cd52ccbba6806c371689dab0da9678a5c1f4dcef697ea976a000f5e53ac4f18&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Panaji, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
        <div className={styles.Slider_Elements_Main_cont}>
        <div>
            <div className={styles.Slider_Elments_Main_Image}><img src="https://q-xx.bstatic.com/xdata/images/city/square210/684727.jpg?k=a6fd59b0c31df52ae2a907dcf2441c7842bb56e2e68d89bffd2398024c0812d3&o=" alt="" /></div>
            <div className={styles.Slider_Elments_Main_Brand_Name}>Chennai, India</div>
            <div className={styles.Slider_Elments_Main_Price}>Flights from Lok Nayak Jayaprakash Airport</div>
          </div>
        </div>
      </Slider>
      </div>
    </div>
  )
}




