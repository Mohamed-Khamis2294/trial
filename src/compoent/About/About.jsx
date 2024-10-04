import React from 'react';
import elodo from "../../assets/images/Picture1 (2).jpg";
import Group from "../../assets/images/Group.jpg";
import soker from "../../assets/images/soker.jpg";
import ReactPlayer from 'react-player/lazy';
import Cookies from 'js-cookie'; // Import js-cookie

function About() {
  
    const handleError = (error) => {
        console.error('Error loading video:', error);
    };

    // Function to set a cookie with SameSite=None and Secure attributes
    const setCookie = () => {
        Cookies.set('userSession', 'yourValue', { 
            sameSite: 'None', 
            secure: true, 
            expires: 7 // Cookie will expire in 7 days
        });
    };

    // Call setCookie when the component mounts or at an appropriate time
    React.useEffect(() => {
        setCookie();
    }, []);

    return (
        <>
            <address className=''>  
                <div className="container">
                    <div className="row">
                        <div className="flex justify-center items-center absolute text-2xl right-0 gap-20 mx-36 top-96">
                            <a href="about"><button className='btn p-5 rounded-full'>قيمة الشكر</button></a>
                            <a href="spiritualReflections"><button className='btn p-5 rounded-full mx-6'>قيمة التأمل</button></a>
                            <a href="guidingValues"><button className='btn p-5 rounded-full right-16'>قيمة الأمانة</button></a>
                            <a href="theValuefBullying"><button className='btn p-5 rounded-full right-44'>قيمة التنمر</button></a>
                        </div>
                        <h2 className='text-4xl text-emerald-300 text-center z-20 m-20 flex items-center justify-center h-screen relative'>القيم الاسلامية</h2>
                        <img src={elodo} alt="elodo" className='absolute w-96 h-5/6 mb-9 py-5' />
                    </div>
                </div>
            </address>

            {/* section1 */}
            <section>
                <h1 className='text-4xl text-teal-600 flex justify-center items-center mt-14 text-center'>القيمة الاولى</h1>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>“ قيمة الشكر لله مستنبطة من سورة النبأ “</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl"> 
                            <h2 className='text-pretty text-right'>فى قوله تعالى : "أَلَمۡ نَجۡعَلِ ٱلۡأَرۡضَ مِهَٰدٗا (6) وَٱلۡجِبَالَ أَوۡتَادٗا (7) وَخَلَقۡنَٰكُمۡ أَزۡوَٰجٗا (8) وَجَعَلۡنَا نَوۡمَكُمۡ سُبَاتٗا (9) وَجَعَلۡنَا ٱلَّيۡلَ لِبَاسٗا (10) وَجَعَلۡنَا ٱلنَّهَارَ مَعَاشٗا (11) وَبَنَيۡنَا فَوۡقَكُمۡ سَبۡعٗا شِدَادٗا (12) وَجَعَلۡنَا سِرَاجٗا وَهَّاجٗا (13) وَأَنزَلۡنَا مِنَ ٱلۡمُعۡصِرَٰتِ مَآءٗ ثَجَّاجٗا (14) لِّنُخۡرِجَ بِهِۦ حَبّٗا وَنَبَاتٗا (15) وَجَنَّٰتٍ أَلۡفَافًا (16)"</h2>
                        </div>
                        <div className="relative lg:w-6/12 md:w-1/2"> 
                            <img src={elodo} alt="elodo" className='w-2/3 lg:mx-36 ml-14 py-5 text-center rounded-2xl' />
                        </div>
                        <div className="text-3xl right-0 m-72 text-emerald-300 absolute">قيمة الشكر</div>
                    </div>
                </div>
            </section>

            {/* 2 */}
            <section className='mt-96 m-auto'>
                <div className="container colorr relative mt-20 rounded-3xl">
                    <div className="row">
                        <div className="flex justify-center items-center lg:w-6/12 md:w-1/2"> 
                            <h2 className='text-pretty text-green-600 ms-20 text-2xl z-20'>نستنبط من هذه الآيات ان نعم الله سبحانه و تعالى كثيرة ولابد ان نشكر الله على هذه النعم</h2>
                        </div>
                        <div className="lg:w-6/12 md:w-1/5">
                            <img src={Group} alt="Group" className='absolute bottom-8 right-36 rounded-3xl' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section2 */}
            <section>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 text-center'>“ كيف نشكر الله على نعمه”</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl flex flex-col items-end space-y-2"> 
                            <span className='text-pretty text-right'>اولا: ان نحمد الله ونقول الحمد لله رب العالمين </span>
                            <br />
                            <span className='text-pretty text-right'>ثانيا: الثناء على الله بأن نذكر نعمه </span>
                            <br />
                            <span className='text-pretty text-right'>ثالثا: طاعه الله باتباع الأوامر واجتناب النواهى</span>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2"> 
                            <img src={soker} alt="soker" className='w-2/3 lg:mx-36 ml-14 py-5 text-center rounded-full' />
                        </div>
                    </div>
                </div>
            </section>

            {/* section3 */}
            <section className='bg-green-100'>
                <div className="container">
                    <h2 className='text-3xl text-teal-600 flex justify-center items-center mt-14 py-6 text-center'>“ قصص عن قيمة الشكر “</h2>
                    <div className="row">
                        <div className="lg:w-6/12 md:w-1/2 text-pretty text-green-600 text-2xl text-center"> 
                            <span className='text-pretty text-right my-3'>الحمد لله، هو شكرنا لله على كل نعمة أعطانا إياها، مثل الصحة والأصدقاء. فلنفرح بقلوبنا ونقول دائمًا: الحمد لله، لأنه يحبنا ويرعانا!</span>
                        </div>
                        <div className="py-2 lg:w-6/12 md:w-1/2 flex justify-center"> 
                            <ReactPlayer 
                                url={"https://www.youtube.com/embed/EaRxO1tC8e0"} 
                                onError={handleError} // Handle errors
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
