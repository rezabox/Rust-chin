import header5_image from '../images/b622973de6039c21330a5090270a24b62cd2c147862732-337x171.jpg';
import header6_image from '../images/01b60f607386024e1649830e51b960df754c8d8672f754-337x171.jpg';
import header7_image from '../images/b215926c957592d2f78296cf07b8b61b2526b1eb327ec9-337x171.jpg';
import header8_image from '../images/d436602349ed171763bdcf54f05ac14e65ad6963936708-337x171.jpg';
function SectionCard3(){
 return(
  <section>
  <div className="cards block space-y-5 md:space-y-0 md:flex  p-5">
  <div className="card1 col-lg-3">
        <div className="product px-3">
            <div className="product_header bg-slate-50 rounded-md">
              <div className="img_header">
                  <img src={header5_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
              </div>
            
            <div className="product_body">
              <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors xl:w-[90%]'>قالب خبری ۷ تیر فروشگاهی آنلاین</h4>
              <div className='body_category'>
                <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'> قالب  خبری </span></p> 
              </div>
            </div>
            <br/>
            <div className="product_footer text-center flex align-center justify-center">
              <div className="footer_productDetails flex align-center justify-between mb-[-5%] md:w-[290px] w-[374px] p-5 font-bold">
                <div className="footer_productDetails_sale">
                  <span className='text-color-span-sale md:text-xl text-2xl'>۲۱</span>
                  <p className='text-base text-card-color-paragraph'>فروش</p>
                </div>
                <div className='footer_productDetails_rate'>
                   <span className='text-green-oil md:text-xl text-2xl' >۸۰%</span>
                   <p className='text-base text-card-color-paragraph'>رضایت</p>
                </div>
                <div className='footer_productPrice text-base border-r-2 border-slate-200 '>
                  <div className='flex align-center mt-2 md:mr-2 mr-4'>
                   <span className='text-white rounded-sm'>۵۰%</span>
                   <span className='font-normal md:mr-4 mr-3'><del>۲۹۸۰۰۰</del></span>
                  </div>
                   <span className='font-normal md:mr-2 mr-5'>۱۴۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                </div> 
              </div>
            </div>
            <div className="product_action action2 flex align-center text-sm p-2">
                <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
              </div> 
            </div>
        </div> 
    </div>
    <div className="card1 col-lg-3">
        <div className="product px-3">
            <div className="product_header bg-slate-50 rounded-md">
              <div className="img_header">
                  <img src={header6_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
              </div>
            
            <div className="product_body">
              <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors xl:w-[90%]'>افزونه AIKit، تولید محتوا با ChatGPT</h4>
              <div className='body_category'>
                <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه  کاربردی</span></p> 
              </div>
            </div>
            <br/>
            <div className="product_footer text-center flex align-center justify-center">
              <div className="footer_productDetails flex align-center justify-between mb-[-5%] md:w-[290px] w-[374px] p-5 font-bold">
                <div className="footer_productDetails_sale">
                  <span className='text-color-span-sale md:text-xl text-2xl'>۱۴۲</span>
                  <p className='text-base text-card-color-paragraph'>فروش</p>
                </div>
                <div className='footer_productDetails_rate'>
                   <span className='text-green-oil md:text-xl text-2xl'>۹۰%</span>
                   <p className='text-base text-card-color-paragraph'>رضایت</p>
                </div>
                <div className='footer_productPrice text-base border-r-2 border-slate-200 '>
                  <div className='flex align-center mt-2 md:mr-2 mr-4'>
                   <span className='text-white rounded-sm'>۶۰%</span>
                   <span className='font-normal md:mr-4 mr-3'><del>۳۸۷۰۰۰</del></span>
                  </div>
                   <span className='font-normal md:mr-2 mr-5'>۱۵۴,۸۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                </div> 
              </div>
            </div>
            <div className="product_action action2 flex align-center text-sm p-2">
                <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
              </div> 
            </div>
        </div> 
    </div>
    <div className="card1 col-lg-3">
        <div className="product px-3">
            <div className="product_header bg-slate-50 rounded-md">
              <div className="img_header">
                  <img src={header7_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
              </div>
            <div className="product_body">
              <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>  قالب فروشگاهی Uminex، یومی نکس  </h4>
              <div className='body_category'>
                 <p className='text-base px-2 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>قالب فروشگاهی</span></p>
              </div>
            </div>
            <br/>
            <div className="product_footer text-center  mb-[-5%] flex align-center justify-center">
              <div className="footer_productDetails flex align-center justify-between md:w-[290px] w-[374px] p-5 font-bold">
                <div className="footer_productDetails_sale">
                  <span className='text-color-span-sale md:text-xl text-2xl'>۹۹</span>
                  <p className='text-base text-card-color-paragraph'>فروش</p>
                </div>
                <div className='footer_productDetails_rate'>
                   <span className='text-green-oil md:text-xl text-2xl'>۵۴%</span>
                   <p className='text-base text-card-color-paragraph'>رضایت</p>
                </div>
                <div className='footer_productPrice text-base  border-r-2 border-slate-200'>
                        <div className='flex align-center  mt-2 md:mr-2 mr-4'>
                         <span className='mt-2 font-normal md:mr-4 mr-3'>۵۷۹,۰۰۰</span>
                         <p className='text-card-color-paragraph mt-2'>تومان</p>                        
                        </div> 
                </div>
              </div>
            </div>
            <div className="product_action action2 flex align-center text-sm p-2">
                <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
              </div>  
            </div> 
        </div> 
    </div>
    <div className="card1 col-lg-3">
        <div className="product px-3 ">

            <div className="product_header bg-slate-50 rounded-md">
              <div className="img_header">
                  <img src={header8_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
              </div>
            <div className="product_body">
              <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>  قالب فروشگاهی حرفه ای کاوه  </h4>
              <div className='body_category w-[90%] mt-1'>
                 <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'> قالب فروشگاهی حرفه ای کاوه </span></p>
              </div>
            </div>
            <br/>
            <div className="product_footer text-center flex align-center justify-center">
              <div className="footer_productDetails mb-[-5%] flex align-center justify-between md:w-[290px] w-[374px] p-5 font-bold">
                <div className="footer_productDetails_sale ">
                  <span className='text-color-span-sale md:text-xl text-2xl'>۲۷</span>
                  <p className='text-base text-card-color-paragraph'>فروش</p>
                </div>
                <div className='footer_productDetails_rate '>
                   <span className='text-green-oil md:text-xl text-2xl'>۴۴%</span>
                   <p className='text-base text-card-color-paragraph'>رضایت</p>
                </div>
                <div className='footer_productPrice text-base  border-r-2 border-slate-200 '>
                  <div className='flex align-center mt-2 md:mr-2 mr-4'>
                   <span className='text-white  rounded-sm'>۵۰%</span>
                   <span className='font-normal md:mr-4 mr-3'><del>۸۰۰۰۰۰</del></span>
                  </div>
                   <span className='font-normal md:mr-2 mr-5'>۴۰۰,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                </div>
              </div>
            </div>
            <div className="product_action action2 flex align-center text-sm p-2">
                <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
              </div>  
            </div> 
        </div> 
    </div>
  </div>
  </section>
 )
}
export default SectionCard3;