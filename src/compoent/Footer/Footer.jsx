import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import facebook from "../../assets/images/facebook.jpg"
import instagram from "../../assets/images/instagram.jpg"
import youtube from "../../assets/images/youtube.jpg"

function Footer() {
    return (
        <>

<section className='mt-32'>
    <div className=" container flex justify-between items-center  w-80 mx-7  ">
<h2 className='text-green-400 font-bold text-2xl  mr-4'>
      تابعنا على منصات <br /> التواصل الاجتماعي
    </h2>
    
  <a href="">
        <img src={youtube} alt="youtube" className='text-right' />
      </a>
      <a href="https://www.facebook.com/inomtechs2022?mibextid=ZbWKwL">
        <img src={facebook} alt="facebook" />
      </a>
  
      <a href="https://www.instagram.com/inomtechs98?igsh=MTltbmhmd3Y1M2kwZw==">
        <img src={instagram} alt="instagram" />
  </a>

  </div>
</section>

        {/*  */}
            <div className="colorr  mt-44 py-2">
                <div className=" container">
                    <div className="row ">
             
                        <h2 className='text-pretty text-green-600  text-xl text-center m-auto rounded-full' >جميع الحقوق محفوظة لصالح شركة إنوم تك © 2024</h2>
                      
                         
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
