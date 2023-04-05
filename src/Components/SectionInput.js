function SectionInput() {
  return (
    <div className="container text-center mt-20">
      <div className="row">
        <h1 className="sub_title text-4xl text-color-sub-title mb-[25px] mt-[60px]">
          بزرگترین فروشگاه قالب و افزونه وردپرس در ایران
        </h1>
        <h2 className="down_title text-2xl text-down-title mb-[40px]">
          راهکار مطمئن و<b className="title_word text-green-oil">سریع</b>
          برای طراحی و توسعه وب سایت
        </h2>
        <form className="mr-[30%] ml-[30%]">
          <div className="mb-6 md:grid-cols-2">
            <div>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="اسم قالب یا افزونه شما مثلاً: انفولد"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SectionInput;
