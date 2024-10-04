import React from 'react';
import nab from "../../assets/images/nab.jpg";
import nabb from "../../assets/images/class (2).jpg";
import Picture from "../../assets/images/Picture1.jpg";
import kyamm from "../../assets/images/kyamm.jpg";
import Hasanati from "../../assets/images/Hasanati.jpg";
import Group from "../../assets/images/Group.jpg";
import Group1 from "../../assets/images/Group-1.jpg";
import Group2 from "../../assets/images/Group-2.jpg";
import Group3 from "../../assets/images/Group-3.jpg";
import Wepp from "../../assets/images/Wepp.jpg";

function Home() {

    return (
        <>
<header/>



{/* section1 */}

<section>
<div className=" container my-11 ">

    <div className="row">
    <h2 className=' text-center text-3xl bg-green-500 m-auto  rounded-full p-4'>رؤيتنا</h2>

<div className="  flex justify-between " >
<div className="  lg:lg:w-6/12 md:w-1/2 px-5 text-2xl text-green-600  flex-col text-right flex justify-center items-center ">
   
 <span className='text-balance'> نشأة جيل لديه الوعي الكافي بتعاليم دينه من حيث الأخلاق و القيم الدينية و في أول سنة إن شاء الله سيتم طرح منهج تعليمي وفي خلال المد من ( سنتين ل 3 سنوات  )  سيتم طرح تطبيق متكامل للطفل يكون له خير معين; لأننا نرى أن المجتمع يحتاج إلى نشئ جديد وملم بتعاليم دينه بعيدًا عن الملهيات المنتشرة هذه الأيام و الألعاب التي ليس لها فائدة ولا تفيد الطفل بالعكس تؤثر عليه بالسلب و توجهه للعنف و الإنطوائية و التوحد.</span>
</div>
<div className="  lg:lg:w-6/12 md:w-1/2">
 <img src={kyamm} alt="kyamm" className='w-2/3 mx-36   rounded-2xl' />
    </div> 
</div>
</div>
</div>

</section>


{/* section2 */}



<section>

<div className=" container py-11 colorr rounded-3xl m-auto ">
    <div className="row">
        <h2 className=' text-center text-3xl bg-green-500 m-auto p-4 rounded-full my-4'>مهمة الشركة</h2>
        <div className=" flex justify-between">
            <div className="lg:w-6/12 md:w-1/2  px-5 text-3xl text-teal-600 flex justify-center items-center">
            
  <div className="text-pretty text-green-600 m-5 text-2xl  flex-col text-right">
     <h2 className='text-center text-teal-700 my-5 text-3xl'> لتحقيق رؤية الشركة سنقوم بعمل الآتي</h2> 
  <span className='text-justify'>اولا: عمل منهج تعليمي متميز للمعلم و للطفل بمساعدة ولي الأمر</span>
  <br />
  <span className='text-justify '> ثانيا: عمل تطبيق على الموبايل يسهل استخدامه وبه قصص تعليمية  -منهج   مشوق للطفل وبه قيم مستنبطة من القرآن ألعاب تعليمية هادفة </span>
  <span className='text-justify'>  ثالث : ويحتوي التطبيق أيضاً ما يحتاجه الطفل من تطبيقات آخرى سيتم تجميعها في مكان واحد لعدم تشتيته وتقديم له كل ما يفيده
  </span>
  </div>



            
            </div>
            <div className="lg:w-6/12 md:w-1/2  ">
            <img src={Wepp} alt="Wepp" className='w-2/3 mx-36 rounded-2xl' />
            </div>
        </div>
    </div>
</div>





</section>


{/* section 3 */}

<section className='my-24 p-10  m-auto rounded-3xl' >

<div className=" container colorr relative  rounded-3xl">
    <div className="row ">

<div className="lg:w-6/12 md:w-1/2 mt-9 ">
    <img src={Hasanati} alt="Hasanati  "  className=' absolute  bottom-8 left-0  rounded-3xl'/>
</div>

       <div className=" lg:lg:w-6/12 md:w-1/2     ">
<h2 className='text-teal-700 px-5 text-3xl '> بيئة إسلامية آمنة من الإعلانات، وخالية من الموسيقى</h2>
<h3 className='text-pretty text-green-600 m-5 text-2xl'> نراعي الثوابت الإسلامية ونحرص على إيجاد بيئة تربوية آمنة لأطفال المسلمين ومطمئنة للأهالي، عبر منع النغمات الموسيقية والإعلانات من خارج التطبيق.</h3>
       </div>
     


</div>
</div>

</section>

{/* 4 */}

<section className=' mt-96 m-auto  '>
<div className=" container  colorr relative  mt-20 rounded-3xl">
    <div className="row">
<div className=" flex justify-center items-center lg:w-6/12 md:w-1/2"> 
    <h2 className='text-pretty text-green-600 ms-20 text-2xl'> اعتمد القيم الاسلامية في منظومتك التعليمية
    وأدخل الإبداع إلى حصة التربية الإسلامية
    </h2>
</div>
<div className=" lg:w-6/12 md:w-1/2">
    <img src={Group} alt="Group" className='absolute  bottom-8 right-36  rounded-3xl' />
</div>

    </div>
</div>

</section>

{/* section 5 */}


<section className='mt-96 m-auto '>
<div className=" container  colorr  py-20 relative  rounded-3xl  ">
    <div className="row">
    <div className=" lg:w-6/12 md:w-1/2">
    <img src={Group1} alt="Group" className=' absolute  bottom-8 left-36   rounded-3xl' />
</div>
<div className=" lg:lg:w-6/12 md:w-1/2 flex justify-between ">
    <img src={Group2} alt="Group" className='  absolute bottom-8  right-auto  rounded-3xl' />
    <img src={Group3} alt="Group" className='  absolute bottom-8 right-20 rounded-3xl ' />
    
</div>
    </div>
</div>





</section>





        </>
        
    )
}

export default Home
