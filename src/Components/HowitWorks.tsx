export default function HowitWorks() {
  return (
    <>
      <div className="w-[80%] max-w-[1200px] mx-auto rounded-[54px] bg-gradient-to-b from-[#2c1c18] to-[#4a322d] p-10 m-10">
        <div className="w-full text-center">
          <p className="font-roboto text-[36px] md:text-[48px] font-black text-neutral-200">
            How It Works&nbsp;
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(92.57deg, #D84315 -28.74%, #FFC107 124.48%)",
              }}
            >
              - 3 Easy Steps
            </span>
          </p>
          <p className="font-roboto text-[14px] md:text-[18px] font-normal leading-[22px] text-neutral-300">
            Getting started with Swasthi is quick and easy! Follow these three
            simple steps to begin your journey towards a healthier lifestyle!
          </p>
        </div>
        <div className="w-full flex flex-wrap md:flex-nowrap justify-evenly items-center p-6">
          <div className="w-full md:w-[300px] space-y-8 text-center md:text-right">
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                Download App
              </p>
              <div className="flex justify-center md:justify-end gap-2">
                <img src="/applestore.png" alt="Apple store" />
                <img src="/googleplay.png" alt="Google play" />
              </div>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Download Swasthi on your favourite device. Available on both iOS
                and Android platforms.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <img src="/Frame 2608479.png" alt="login" className="mx-auto" />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                You're Done
              </p>
              <p className="text-neutral-100 font-roboto font-bold">
                Enjoy the Experience
              </p>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Explore the app's amazing features, track your progress, and
                share Swasthi with friends and family to inspire their health
                journey.
              </p>
            </div>
          </div>
          <div className="">
            <div className="m-8 xl:block md:block hidden">
              <img
                src="/Rectangle 7.png"
                alt="rectangle"
                className="ml-20 absolute mt-4"
              />
              <img
                src="/Circle1.png"
                alt="circle1"
                className="h-[60px] w-[60px] rounded-full relative z-10 ml-12 mt-[100px]"
              />
              <img
                src="/Circle2.png"
                alt="circle2"
                className="h-[60px] w-[60px] rounded-full relative z-10 my-[120px] ml-12"
              />
              <img
                src="/Circle3.png"
                alt="circle3"
                className="h-[60px] w-[60px] rounded-full relative z-10 mb-[50px] ml-12"
              />
            </div>
          </div>

          <div className="w-full md:w-[300px] space-y-8 text-center md:text-left">
            <div className="w-full md:w-[300px]">
              <img
                src="/Frame 2608478.png"
                alt="download_app"
                className="mx-auto"
              />
            </div>
            <div className="space-y-4">
              <p className="text-neutral-100 font-roboto text-[16px] md:text-[20px] font-bold">
                Create Account
              </p>
              <p className="text-neutral-100 font-roboto font-bold">
                7 days free trial
              </p>
              <p className="font-roboto text-[12px] md:text-[14px] text-neutral-300">
                Sign up easily using your email or social accounts like Google
                or Apple. Enjoy a 7-day free trial with full access to all
                premium features.
              </p>
            </div>
            <div className="w-full md:w-[300px]">
              <img
                src="/Frame 2608479 (1).png"
                alt="done"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80%] max-w-[720px] mx-auto">
        <img
          src="/Video.png"
          alt="video_img"
          className="translate-y-[-40px] cursor-pointer w-full h-auto"
        />
      </div>
    </>
  );
}