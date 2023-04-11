function SectionInput() {
  return (
    <div className="w-[100%] mt-20 text-center">
      <div className="row m-0 ">
        <div className="p-3 md:p-0">
        <h1 className="sub_title text-xl md:text-4xl text-color-sub-title mb-[25px] mt-[60px]">
          بزرگترین فروشگاه قالب و افزونه وردپرس در ایران
        </h1>
        <h2 className="down_title text-3xl  md:text-2xl text-down-title mb-[40px]">
          راهکار مطمئن و<span className="title_word text-green-oil">سریع </span>
          برای طراحی و توسعه وب سایت
        </h2>
        </div>
        <form className="mr-[5%] ml-[15%] md:mr-[20%] md:ml-[22%]">
          <div className="mt-8 flex ">
            <input
              type="text"
              id="first_name"
              className="text-color-input relative shadow-shadowInput text-sm  rounded-sm block w-[200%] md:w-full p-2.5 outline-none"
              placeholder="اسم قالب یا افزونه شما مثلاً: انفولد"
              required
            />
            <button className="mb-4  h-[3vh]">
              <i className="bi bi-search hover:bg-hoverSearch-color transition-colors  mr-[60%] mt-[40%] text-xl bg-green-oil py-2 px-4 rounded-sm text-white"></i>
            </button>
            <div className="option absolute flex h-8 mt-1 mr-1">
              <button className="product text-base px-4 flex text-color-selectBox bg-back-selectBox rounded-sm  "><span className="text-sm mt-2 hidden md:block">همه محصولات</span><i className="bi bi-chevron-down mt-2 mr-0 md:mr-2"></i></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SectionInput;
