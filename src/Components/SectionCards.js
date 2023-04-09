import header1_image from '../images/d436602349ed171763bdcf54f05ac14e65ad6963936708-337x171.jpg';
import header2_image from '../images/604243240645f66546b1566116596b16108f8e06aae795-337x171.jpg';
import header3_image from '../images/671e921a43c077d44fa2bcf45aed91550628959507c932-337x171.png';
import header4_image from '../images/26e3715bb4031857fffcb6291d02066d91ab0a3214a2a0-337x171.jpg';


function SectionCards(){
 return(
     <section>
        <div className="cards flex  p-10">
          <div className="card1 col-lg-3">
              <div className="product px-3">
                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header1_image} className='rounded-md' alt="header_1" />
                    </div>
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>قالب فروشگاهی حرفه ای کاوه</h4>
                    <div className='body_category'>
                       <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>قالب فروشگاهی وردپرس</span></p>
                    </div>
                  </div>
                  <br/>  
                  <div className="product_footer text-center p-2 mt-1">
                    <div className="footer_productDetails flex align-center font-bold">
                      <div className="footer_productDetails_sale mr-2">
                        <span className='text-color-span-sale text-xl'>۱۶۱</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate mr-5'>
                         <span className='text-green-oil text-xl' >۹۸%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base mt-2 mr-5 border-r-2 border-slate-200 px-3'>
                        <div className='flex align-center'>
                         <span className='text-white px-1 rounded-sm'>۶۰%</span>
                         <span className='mr-4 font-normal'><del>۶۹۹۰۰۰</del></span>
                        </div>
                         <span className='mt-2 font-normal'>۲۷۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
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
                    <div className="img_header">
                        <img src={header2_image} className='rounded-md' alt="header_1" />
                    </div>
                  
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>افزونه درگاه پلاس,کاملترین پلاگین پرداخت</h4>
                    <div className='body_category'>
                      <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه درگاه پرداخت</span></p> 
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center px-2 mb-5  mt-[-6%]">
                    <div className="footer_productDetails flex align-center font-bold">
                      <div className="footer_productDetails_sale mr-2 mt-1">
                        <span className='text-color-span-sale text-xl'>۴۲۲</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate mr-5 mt-1'>
                         <span className='text-green-oil text-xl' >۹۰%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base mt-5 mr-5 border-r-2 border-slate-200 px-3'>
                        <div className='flex align-center justify-center'>
                         <span className='mt-2 font-normal'>۲۷۹,۰۰۰</span>
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
          <div className="card1 col-lg-3">
              <div className="product px-3">
                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header3_image} className='rounded-md' alt="header_1" />
                    </div>
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>افزونه تیکت و پشتیبانی تیکتور</h4>
                    <div className='body_category w-60'>
                       <p className='text-base px-2 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه پشتیبانی و چت</span></p>
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center p-3">
                    <div className="footer_productDetails flex align-center font-bold">
                      <div className="footer_productDetails_sale mr-2">
                        <span className='text-color-span-sale text-xl'>۳۹</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate mr-5'>
                         <span className='text-green-oil text-xl' >۹۴%</span>
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
                        <img src={header4_image} className='rounded-md' alt="header_1" />
                    </div>
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>افزونه ChatGPT, تولید محتوا با هوش مصنوعی virmuni</h4>
                    <div className='body_category'>
                       <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه کاربردی</span></p>
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center p-3 ">
                    <div className="footer_productDetails flex align-center font-bold">
                      <div className="footer_productDetails_sale mr-2">
                        <span className='text-color-span-sale text-xl'>۲۱۷</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate mr-5'>
                         <span className='text-green-oil text-xl' >۷۴%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base mt-2 mr-5 border-r-2 border-slate-200 px-3'>
                        <div className='flex align-center'>
                         <span className='text-white px-1 rounded-sm'>۴۰%</span>
                         <span className='mr-4 font-normal'><del>۹۸۸۰۰۰</del></span>
                        </div>
                         <span className='mt-2 font-normal'>۵۹۸,۸۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
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
     </section>
 )
}
export default SectionCards;