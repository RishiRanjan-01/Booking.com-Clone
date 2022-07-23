import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./HomePageFotter.module.css"

const HomePageFotter = () => {
  return (
    <div className={styles.FotterMainBox}>
        <div className={styles.fotterTopBox}>
            <div className={styles.fotterContaintBox}>
                <p>Save time, save money!</p>
                <p>Sign up and we'll send the best deals to you</p>
                <div>
                    <input type="text" placeholder='Your Email' />
                    <button>Subscribe</button>
                </div>
                <input type="checkbox" />
                <label htmlFor=""> Send me a link to get the FREE Booking.com app!</label>
            </div>
        </div>
        <div className={styles.footerSecondBox}>
            <div>
                <button>List Your Property</button>
            </div>
            <div>
                <div>
                    <Link to="#">Mobile version</Link>
                    <Link to="#">Your Account</Link>
                    <Link to="#">Make changes to your booking online</Link>
                    <Link to="#">Customer Service help</Link>
                    <Link to="#">Become an affiliate</Link>
                    <Link to="#">Bookinf.com for Business</Link>

                </div>
            </div>         
        </div>
        <div className={styles.footerThirdBox}>
            <div>
                <div>
                    <p><Link to="#">Countries</Link></p>
                    <p><Link to="#">Regions</Link></p>
                    <p><Link to="#">Cities</Link></p>
                    <p><Link to="#">District</Link></p>
                    <p><Link to="#">Airport</Link></p>
                    <p><Link to="#">Hotels</Link></p>
                    <p><Link to="#">Places of interest</Link></p>
                </div>
                <div>
                    <p><Link to="#">Homes</Link></p>
                    <p><Link to="#">Apartments</Link></p>
                    <p><Link to="#">Resorts</Link></p>
                    <p><Link to="#">Villas</Link></p>
                    <p><Link to="#">Hostels</Link></p>
                    <p><Link to="#">B&Bs</Link></p>
                    <p><Link to="#">Guest Houses</Link></p>
                </div>
                <div>
                    <p><Link to="#">Unique Places to Stay</Link></p>
                    <p><Link to="#">All Destinations</Link></p>
                    <p><Link to="#">Discover</Link></p>
                    <p><Link to="#">Reviews</Link></p>
                    <p><Link to="#">Unpacked : Travel articles</Link></p>
                    <p><Link to="#">Travel Communities</Link></p>
                    <p><Link to="#">Seasonal and holiday deals</Link></p>
                </div>
                <div>
                    <p><Link to="#">Car hire</Link></p>
                    <p><Link to="#">Flight finder</Link></p>
                    <p><Link to="#">Restaurents reservations</Link></p>
                    <p><Link to="#">Booking.com for Travel Agents</Link></p>
                </div>
                <div>
                    <p><Link to="#">Coronavirus (COVID-19) FAQs</Link></p>
                    <p><Link to="#">About Booking.com</Link></p>
                    <p><Link to="#">Customer Service help</Link></p>
                    <p><Link to="#">Partner help</Link></p>
                    <p><Link to="#">Carriers</Link></p>
                    <p><Link to="#">Sustainability</Link></p>
                    <p><Link to="#">Press centre</Link></p>
                    <p><Link to="#">Safety resource centre</Link></p>
                    <p><Link to="#">Investor relations</Link></p>
                    <p><Link to="#">Terms & Conditions</Link></p>
                    <p><Link to="#">Partner dispute</Link></p>
                    <p><Link to="#">How we work</Link></p>
                    <p><Link to="#">Privacy & Cookie Statement</Link></p>
                    <p><Link to="#">Corporate contact</Link></p>
                </div>

            </div>
        </div>
        <div className={styles.extranetlogin}>
            <p><Link to="#">Extranet Login</Link></p>
        </div>
        <div className={styles.AllrightReserve}>
            <p>Copyright © 1996–2022 Booking.com™. All rights reserved.</p>
        </div>
        <div className={styles.footerbottomBox}>
            <div>
              <p>Booking.com is part of Booking Holdings Inc., the world leader in online travel and related services.</p>
              <div className={styles.fotterLogoBox}>
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_booking/27c8d1832de6a3123b6ee45b59ae2f81b0d9d0d0.png" alt="Booking.com" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_priceline/f80e129541f2a952d470df2447373390f3dd4e44.png" alt="Pipeline.com" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_kayak/83ef7122074473a6566094e957ff834badb58ce6.png" alt="KAYAK" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_agoda/1c9191b6a3651bf030e41e99a153b64f449845ed.png" alt="agada" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png" alt="Rentalcar.com" />
                <img src="https://cf.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png" alt="OpenTable" />
              </div>
            </div>
        </div>

    </div>
  )
}

export default HomePageFotter