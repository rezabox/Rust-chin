import header1_image from '../images/d2f8620652465f1c946223e6684c0323169ba79578262f-337x171.jpg';
import header2_image from '../images/1598415ff946ad20639e008d308e467278397c22478df4-337x171.png';
import header3_image from '../images/d1bd0d689b90f481b68a3fd0111196831f044e08a11655-337x171.png';
import header4_image from '../images/f0a198383f738b8a8b97931d0df421477656f52c778658-337x171.jpg';




function SectionCard2(){
  return(
    <section>
        <div className="cards block space-y-5 md:space-y-0 p-4 md:flex  md:p-5">
        <div className="card1 col-lg-3">
              <div className="product px-3">
                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header1_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
                    </div>
                  
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors xl:w-[90%]'> قالب فروشگاهی لکسون، lexoun </h4>
                    <div className='body_category'>
                      <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'> قالب  وردپرس </span></p> 
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center flex align-center justify-center">
                    <div className="footer_productDetails flex align-center justify-between mb-[-5%] md:w-[290px] w-[374px] p-5 font-bold">
                      <div className="footer_productDetails_sale">
                        <span className='text-color-span-sale md:text-xl text-2xl'>۱۲</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate'>
                         <span className='text-green-oil md:text-xl text-2xl' >۶۰%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base border-r-2 border-slate-200 '>
                        <div className='flex align-center mt-2 md:mr-2 mr-4'>
                         <span className='text-white rounded-sm '>۷۰%</span>
                         <span className='font-normal md:mr-4 mr-3'><del>۶۹۹۰۰۰</del></span>
                        </div>
                         <span className='font-normal md:mr-2 mr-5'>۱۷۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                      </div> 
                    </div>
                  </div>
                  <div className="product_action action2  text-sm p-2">
                      <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                      <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-1 py-2 md:px-3 md:py-2 rounded text-color-sub-title'>پیش نمایش</a>
                    </div> 
                  </div>
              </div> 
          </div>
          <div className="card1 col-lg-3">
              <div className="product px-3">
                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header2_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
                    </div>
                  
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors xl:w-[90%]'>افزودنی درگاه پرداخت زرین پال لیت پوینت</h4>
                    <div className='body_category'>
                      <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه درگاه پرداخت</span></p> 
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center flex align-center justify-center">
                    <div className="footer_productDetails flex align-center justify-between md:mb-[-5%] md:w-[290px] w-[374px] p-5 font-bold">
                      <div className="footer_productDetails_sale">
                        <span className='text-color-span-sale md:text-xl text-2xl'>۴۲</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate'>
                         <span className='text-green-oil md:text-xl text-2xl' >۹۰%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base border-r-2 border-slate-200 '>
                        <div className='flex align-center mt-2 md:mr-2 mr-4'>
                         <span className='text-white rounded-sm'>۷۰%</span>
                         <span className='font-normal md:mr-4 mr-3'><del>۶۹۹۰۰۰</del></span>
                        </div>
                         <span className='font-normal md:mr-2 mr-5'>۱۷۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                      </div> 
                    </div>
                  </div>
                  <div className="product_action action2   text-sm p-2">
                      <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                      <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-1 py-2 md:px-3 md:py-2 rounded text-color-sub-title'>پیش نمایش</a>
                    </div> 
                  </div>
              </div> 
          </div>
          <div className="card1 col-lg-3">
              <div className="product px-3">
                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header3_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
                    </div>
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'>افزودنی پیامک لیت پوینت IPPanel</h4>
                    <div className='body_category'>
                       <p className='text-base px-2 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه کاربردی</span></p>
                    </div>
                  </div>
                  <br/>
                  <div className="product_footer text-center  mb-[-5%] flex align-center justify-center">
                    <div className="footer_productDetails flex align-center justify-between md:w-[290px] w-[374px] p-5 font-bold">
                      <div className="footer_productDetails_sale">
                        <span className='text-color-span-sale  md:text-xl text-2xl'>۳۹</span>
                        <p className='text-base text-card-color-paragraph'>فروش</p>
                      </div>
                      <div className='footer_productDetails_rate'>
                         <span className='text-green-oil md:text-xl text-2xl'>۵۴%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base  border-r-2 border-slate-200'>
                        <div className='flex align-center mt-2 md:mr-2 mr-4'>
                         <span className='text-white rounded-sm'>۵۰%</span>
                         <span className='font-normal md:mr-4 mr-3'><del>۲۳۸۰۰۰</del></span>
                        </div>
                         <span className='font-normal md:mr-2 mr-5'>۱۱۹,۰۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="product_action action2 flex align-center text-sm p-2">
                      <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                      <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-1 py-2 md:px-3 md:py-2 rounded text-color-sub-title'>پیش نمایش</a>
                    </div>  
                  </div> 
              </div> 
          </div>
          <div className="card1 col-lg-3">
              <div className="product px-3 ">

                  <div className="product_header bg-slate-50 rounded-md">
                    <div className="img_header">
                        <img src={header4_image} className='rounded-md w-[500px] md:w-full' alt="header_1" />
                    </div>
                  <div className="product_body">
                    <h4 className='body_title text-xl p-3 hover:text-green-oil cursor-pointer transition-colors'> افزونه ثبت نام خودکار، Woo Auto Register </h4>
                    <div className='body_category'>
                       <p className='text-base px-3 text-card-color-paragraph'>دسته بندی اصلی: <span className='body_category_inner'>افزونه فروشگاهی</span></p>
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
                         <span className='text-green-oil md:text-xl text-2xl'>۷۴%</span>
                         <p className='text-base text-card-color-paragraph'>رضایت</p>
                      </div>
                      <div className='footer_productPrice text-base  border-r-2 border-slate-200 '>
                        <div className='flex align-center mt-2 md:mr-2 mr-4'>
                         <span className='text-white  rounded-sm'>۵۰%</span>
                         <span className='font-normal md:mr-4 mr-3'><del>۹۸۸۰۰۰</del></span>
                        </div>
                         <span className='font-normal md:mr-2 mr-5'>۴۹۸,۸۰۰ <span className='text-card-color-paragraph'>تومان</span></span>
                      </div>
                    </div>
                  </div>
                  <div className="product_action action2 flex align-center text-sm p-2">
                      <button className='product_button button2 bg-green-oil hover:bg-[#7caf54] transition-colors  text-white px-2 py-2 rounded'>افزدون به سبد خرید</button>
                      <a href="#" className='product_Link mr-6 bg-slate-200 hover:bg-slate-300 transition-colors px-1 py-2 md:px-3 md:py-2 rounded text-color-sub-title'>پیش نمایش</a>
                    </div>  
                  </div> 
              </div> 
          </div>
        </div>
     </section>
  )
}
export default SectionCard2;