import card1_Image from '../images/064c00842fa12342682607b584e25b4f385672d9384b94.jpg';
import card2_Image from '../images/e703dc5b837129f0ece16b5707d89521374117d80b396e.png';
import card3_Image from '../images/5f46e5957340d24264645fc7610512d03a77d201519d2.jpg'
import card4_Image from '../images/edit.jpg';
function SectionPage(){
  return(
     <div className="page-builder">
        <div className="row block  md:flex align-center justify-between p-5">
            <div className="col-lg-6">
              <div className="card1 px-2 relative flex align-center justify-center">
                   <div className="card1 Image">
                     <img src={card1_Image} className='hidden md:block' alt="" />
                     <div className='image flex align-center justify-center '>
                     <img src={card4_Image} className='md:hidden rounded' alt=''/>
                     </div>
                   </div>
                   <div className='card1_details text-center   absolute block md:flex align-center justify-between w-[80%]  mt-[9%]'>
                       <div className='title_card1 text-white'>
                           <div className='first_sentens md:mr-20 md:mt-[-20px] '>
                              <strong className='text-6xl'>۱۵%</strong>
                              <span className='text-2xl'>مبلغ خرید</span>
                           </div>
                            <p className='text-base md:mr-20'>از راست چین هدیه دریافت کن</p>
                       </div>
                       <button className='text-base bg-transparent  hover:text-color-sub-title hover:bg-white transition-colors duration-300 text-white   border border-white px-5  py-3 mt-3 md:mt-0 rounded-md'>معرفی کش یک</button>
                   </div>
              </div>
            </div>
            <div className="col-lg-3 mt-5 md:mt-0">
                <div className="card2 px-2 relative flex align-center justify-center">
                     <div className="card2 Image">
                      <img src={card2_Image} alt="" />
                     </div>
                     <div className="btn_card2 bg-transparent hover:text-color-sub-title hover:bg-white transition-colors duration-300 text-white absolute mt-[18%] border border-white px-5 py-3 rounded-md">
                         <button className='text-base'>درباره راست چین </button>
                     </div>
                </div>
            </div>
            <div className="col-lg-3 mt-5 md:mt-0">
                <div className="card3 px-2 relative flex align-center justify-center">
                     <div className="card3 Image">
                         <img src={card3_Image} alt="" />
                     </div>
                     <div className='btn_card3 bg-transparent hover:text-color-sub-title hover:bg-white transition-colors duration-300 text-white absolute mt-[18%] border border-white px-5 py-3 rounded-md'>
                           <button className='text-base'>گارانتی کیفیت</button>
                     </div>
                </div>
            </div>
        </div>
     </div>
  )
}
export default SectionPage;