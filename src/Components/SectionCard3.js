import header5_image from '../images/b622973de6039c21330a5090270a24b62cd2c147862732-337x171.jpg';
import header6_image from '../images/01b60f607386024e1649830e51b960df754c8d8672f754-337x171.jpg';
import header7_image from '../images/b215926c957592d2f78296cf07b8b61b2526b1eb327ec9-337x171.jpg';
import header8_image from '../images/d436602349ed171763bdcf54f05ac14e65ad6963936708-337x171.jpg';
function SectionCard3(){
 return(
  <div className="cards flex px-10 space-x-1.5 ">
  <div className="card1 col-lg-3">
      <div className="product px-3">
          <div className="product_header bg-slate-50 rounded-md">
            <div className="img_header">
                <img src={header5_image} className='rounded-md' alt="header_1" />
            </div>
          <div className="product_body">
            <h4 className='body_title text-2xl p-3 hover:text-green-oil cursor-pointer transition-colors'>قالب خبری ۷ تیر </h4>
            <div className='body_category'>
               <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'> قالب فروشگاهی هفت تیر </span></p>
            </div>
          </div>
          <br/>  
          <div className="product_footer text-center p-2 mt-1">
            <div className="footer_productDetails flex align-center font-bold">
              <div className="footer_productDetails_sale mr-2">
                <span className='text-color-span-sale text-xl'>۱۲۸</span>
                <p className='text-base text-card-color-paragraph'>فروش</p>
              </div>
              <div className='footer_productDetails_rate mr-5'>
                 <span className='text-green-oil text-xl' >۸۰%</span>
                 <p className='text-base text-card-color-paragraph'>رضایت</p>
              </div>
              <div className='footer_productPrice text-base mt-2 mr-5 border-r-2 border-slate-200 px-3'>
                <div className='flex align-center'>
                 <span className='text-white px-1 rounded-sm'>۶۰%</span>
                 <span className='mr-4 font-normal'><del>۳۸۷۰۰۰</del></span>
                </div>
                 <span className='mt-2 font-normal'>۱۵۴,۸۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
              </div>
            </div>
          </div>
            <div className="product_action text-sm py-2  mt-2">
              <button className='product_button bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2  rounded'>افزدون به سبد خرید</button>
              <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
              
            </div>  
          </div>
      </div> 
  </div>
  <div className="card1 col-lg-3">
      <div className="product px-3">
          <div className="product_header bg-slate-50 rounded-md">
            <div className="img_header w-[280px]">
                <img src={header6_image} className='rounded-md' alt="header_1" />
            </div>
          
          <div className="product_body">
            <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>افزونه AIKit، تولید محتوا با ChatGPT</h4>
            <div className='body_category'>
              <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه کاربردی</span></p> 
            </div>
          </div>
          <br/>
          <div className="product_footer text-center px-2  ">
            <div className="footer_productDetails flex align-center font-bold mb-5">
              <div className="footer_productDetails_sale mr-2 mt-1 ">
                <span className='text-color-span-sale text-xl'>۲۱</span>
                <p className='text-base text-card-color-paragraph'>فروش</p>
              </div>
              <div className='footer_productDetails_rate mr-5 mt-1'>
                 <span className='text-green-oil text-xl' >۶۰%</span>
                 <p className='text-base text-card-color-paragraph'>رضایت</p>
              </div>
              <div className='footer_productPrice text-base mt-5 mr-8 border-r-2 border-slate-200 px-3'>
                <div className='flex align-center justify-center'>
                 <span className='mt-2 font-normal'>۱۴۹,۰۰۰</span>
                 <p className='text-card-color-paragraph mt-2'>تومان</p>                        
                </div> 
              </div>
            </div>
          </div>
          <div className="product_action flex align-center text-sm p-2">
              <button className='product_button bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
              <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
            </div> 
          </div>
      </div> 
  </div>
  <div className="card1 col-lg-3 ">
      <div className="product px-1  ">
          <div className="product_header bg-slate-50 rounded-md">
            <div className="img_header">
                <img src={header7_image} className='rounded-md' alt="header_1" />
            </div>
          <div className="product_body">
            <h4 className='body_title text-xl  p-3  hover:text-green-oil cursor-pointer transition-colors'> قالب فروشگاهی Uminex، یومی نکس </h4>
            <div className='body_category mt-[-6px]'>
               <p className='text-base p-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>قالب فروشگاهی وردپرس</span></p>
            </div>
          </div>
          <div className="product_footer text-center p-3 mt-[-10px]">
            <div className="footer_productDetails flex align-center font-bold">
              <div className="footer_productDetails_sale mr-2">
                <span className='text-color-span-sale text-xl'>۳۹</span>
                <p className='text-base text-card-color-paragraph'>فروش</p>
              </div>
              <div className='footer_productDetails_rate mr-5'>
                 <span className='text-green-oil text-xl' >۵۴%</span>
                 <p className='text-base text-card-color-paragraph'>رضایت</p>
              </div>
              <div className='footer_productPrice text-base mt-2 mr-5 border-r-2 border-slate-200 px-3'>
                <div className='flex align-center'>
                 <span className='text-white px-1 rounded-sm'>۵۰%</span>
                 <span className='mr-4 font-normal'><del>۲۳۸۰۰۰</del></span>
                </div>
                 <span className='mt-2 font-normal'>۱۱۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
              </div>
            </div>
          </div>
          <div className="product_action flex align-center text-sm p-2">
              <button className='product_button bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
              <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
            </div>  
          </div> 
      </div> 
  </div>
  <div className="card1 col-lg-3">
      <div className="product px-3 ">

          <div className="product_header bg-slate-50 rounded-md">
            <div className="img_header">
                <img src={header8_image} className='rounded-md' alt="header_1" />
            </div>
          <div className="product_body">
            <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'> قالب فروشگاهی حرفه ای کاوه </h4>
            <div className='body_category'>
               <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'> قالب فروشگاهی وردپرس </span></p>
            </div>
          </div>
          <br/>
          <div className="product_footer text-center p-3 ">
            <div className="footer_productDetails flex align-center font-bold">
              <div className="footer_productDetails_sale mr-2">
                <span className='text-color-span-sale text-xl'>۲۷</span>
                <p className='text-base text-card-color-paragraph'>فروش</p>
              </div>
              <div className='footer_productDetails_rate mr-5'>
                 <span className='text-green-oil text-xl' >۷۴%</span>
                 <p className='text-base text-card-color-paragraph'>رضایت</p>
              </div>
              <div className='footer_productPrice text-base mt-2 mr-5 border-r-2 border-slate-200 px-3'>
                <div className='flex align-center'>
                 <span className='text-white px-1 rounded-sm'>۵۰%</span>
                 <span className='mr-4 font-normal'><del>۹۸۸۰۰۰</del></span>
                </div>
                 <span className='mt-2 font-normal'>۴۹۸,۸۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
              </div>
            </div>
          </div>
          <div className="product_action flex align-center text-sm p-2">
              <button className='product_button bg-green-oil hover:bg-[#7caf54] transition-colors  text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
              <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-3 py-2 rounded text-color-sub-title'>پیش نمایش</a>
            </div>  
          </div> 
      </div> 
  </div>
</div>
 )
}
export default SectionCard3;