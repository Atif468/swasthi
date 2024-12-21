export default function HowitWorks() {
  return (
    <>
      <div className="w-[80%] h-[1100px] mx-auto rounded-[54px] bg-gradient-to-b from-[#2c1c18] to-[#4a322d] p-10 m-10">
        <div className="w-full h-auto text-center">
          <p className="font-roboto text-[48px] font-black text-center text-neutral-200">
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
          <p className="font-roboto text-[18px] font-normal leading-[22px] text-center decoration-skip-ink-none text-neutral-300">
            Getting started with Swasthi is quick and easy! Follow these three
            simple <br />
            steps to begin your journey towards a healthier lifestyle!
          </p>
        </div>
        <div className="w-full h-auto flex justify-evenly p-10  ">
          <div className="w-[300px] space-y-14">
            <div className="w-[270px] h-[119px] my-6 text-right space-y-2 ml-7">
              <p className="text-neutral-100 font-roboto text-[20px] font-bold leading-[23.44px] text-right decoration-skip-ink">
                Download App
              </p>
              <div className="flex justify-end gap-2">
                <img src="/applestore.png" alt="Apple store" />
                <img src="/googleplay.png" alt="Google play" />
              </div>
              <p className="font-roboto font-normal text-[14px]  text-right text-neutral-300">
                Download Swasthi on your favourite device. Available on both iOS
                and Android platforms
              </p>
            </div>
            <div className="w-[300px] h-[200px]">
              <img src="/Frame 2608479.png" alt="login" />
            </div>
            <div className="w-[300px] h-[119px] my-6 text-right space-y-2 ml-0">
              <p className="text-neutral-100 font-roboto text-[20px] font-bold leading-[23.44px] text-right decoration-skip-ink">
                You're Done
              </p>
              <p className="text-neutral-100 font-roboto text-right font-bold">
                Enjoy the Experience
              </p>
              <p className="font-roboto font-normal text-[14px] leading-[17.41px] text-right text-neutral-300">
                Explore the app's amazing features, track your progress, and
                share Swasthi with friends and family to inspire their health
                journey
              </p>
            </div>
          </div>
          <div className="m-auto">
             <img
              src="/Rectangle 7.png"
              alt="rectangle"
              className="absolute mt-4"
            />
            <img
              src="/Circle1.png"
              alt="circle1"
              className=" rounded-full relative z-10 -ml-6 mt-[60px]"
            />
            <img
              src="/Circle2.png"
              alt="circle2"
              className="  rounded-full relative z-10 my-[120px] -ml-6"
            />
            <img
              src="/Circle3.png"
              alt="circle3"
              className=" rounded-full relative z-10 mb-[50px] -ml-6"
            />
          </div>
          <div className="w-[300px] space-y-14">
            <div className="w-[300px] h-[200px]">
              <img src="/Frame 2608478.png" alt="download_app" />
            </div>
            <div className="w-[300px] h-[119px] my-6 text-leaft space-y-2 ml-0">
              <p className="text-neutral-100 font-roboto text-[20px] font-bold leading-[23.44px] text-left decoration-skip-ink">
                Create Account
              </p>
              <p className="text-neutral-100 font-roboto text-left font-bold">
                7 days free trial
              </p>
              <p className="font-roboto font-normal text-[14px] leading-[17.41px] text-left text-neutral-300">
                Sign up easily using your email or social accounts like Google
                or Apple. Enjoy a 7-day free trial with full access to all
                premium features
              </p>
            </div>
            <div className="w-[300px] h-[200px]">
              <img src="/Frame 2608479 (1).png" alt="done" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] h-[224px] m-auto">
        <img
          src="/Video.png"
          alt="video_img"
          className="translate-y-[-240px] cursor-pointer w-full h-auto"
        />
      </div>
    </>
  );
}
