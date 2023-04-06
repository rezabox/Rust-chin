function SectionInput() {
  return (
    <div className="w-[100%] mt-20 text-center">
      <div className="row m-0">
        <h1 className="sub_title text-4xl text-color-sub-title mb-[25px] mt-[60px]">
          بزرگترین فروشگاه قالب و افزونه وردپرس در ایران
        </h1>
        <h2 className="down_title  text-2xl text-down-title mb-[40px]">
          راهکار مطمئن و<span className="title_word text-green-oil">سریع </span>
          برای طراحی و توسعه وب سایت
        </h2>
        <form className="mr-[20%] ml-[22%]">
          <div className="mt-8 flex ">
            <input
              type="text"
              id="first_name"
              className="text-color-input relative shadow-shadowInput text-sm rounded-sm block w-full p-2.5 outline-none"
              placeholder="اسم قالب یا افزونه شما مثلاً: انفولد"
              required
            />
            <button className="mb-4  h-[2vh]">
              <i className="bi bi-search hover:bg-hoverSearch-color transition-colors  mr-[60%] mt-[40%] text-xl bg-green-oil py-2 px-4 rounded-sm text-white"></i>
            </button>
            <div className="option absolute flex h-8 mt-1 mr-1">
              <button className="product text-base px-4 text-color-selectBox bg-back-selectBox rounded-sm  ">همه محصولات<span className="text-sm"><i class="bi bi-chevron-down mr-2"></i></span></button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SectionInput;
