import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function Download() {
  return (
    <>
      <section className="flex justify-center flex-wrap bg-gradient-to-r from-orange-500 to-yellow-500 items-center h-auto calLastSection px-3 md:px-[72px] pb-10 md:pb-[72px] pt-10 md:pt-[155px] mq450:gap-5 mt-10 md:mt-[100px]">
        <div className="bg-[#171717] p-10 flex-col md:flex-row md:relative md:h-[600px] md:max-h-[600px] max-h-auto w-full flex justify-center items-center px-4 md:px-10 mq450:py-7 rounded-[32px]">
          <div className="flex-1 w-full flex flex-col justify-start items-start">
            <h4 className="text-[36px] md:text-[48px] text-[#D4D4D4] font-black leading-normal">
              Download Swasthi: Your
            </h4>
            <h1 className="text-[36px] md:text-[48px] text-[#F5F5F5] font-black leading-normal break-words">
              <span className="mr-3 block md:inline bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Health Companion
              </span>
            </h1>

            <h4 className="text-[16px] md:text-[18px] max-w-[484px] text-[#D4D4D4] font-normal leading-[22px] mt-3">
              Get Swasthi now on your Android or iOS device. Start your journey
              to a healthier you with just one click!
            </h4>
            <div className="flex gap-2 md:gap-6 mt-6 md:mt-12 mq450:mb-7">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto overflow-hidden bg-gradient-to-r from-orange-500 to-yellow-500 border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="31"
                          className="w-[22px] md:w-[26px] h-[25px] md:h-[31px]"
                          viewBox="0 0 26 31"
                          fill="none"
                        >
                          <path
                            d="M25.3685 23.1164C24.6748 24.6516 24.3436 25.3369 23.4503 26.6932C22.2058 28.5874 20.4497 30.9466 18.2737 30.9666C16.3409 30.9846 15.8442 29.7096 13.2201 29.725C10.5962 29.7403 10.0494 30.9893 8.1164 30.9713C5.94042 30.9519 4.27796 28.8215 3.03202 26.9261C-0.450586 21.6286 -0.814443 15.4123 1.33345 12.1078C2.85981 9.75787 5.26879 8.38484 7.53291 8.38484C9.83837 8.38484 11.2879 9.64781 13.1948 9.64781C15.0442 9.64781 16.1706 8.38281 18.8366 8.38281C20.8517 8.38281 22.9869 9.47904 24.5086 11.3731C19.523 14.1026 20.3336 21.2142 25.3685 23.1164Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M17.0953 5.06511C18.0641 3.82275 18.7985 2.07011 18.5314 0.277344C16.9491 0.385482 15.0996 1.39161 14.0193 2.70261C13.0385 3.89224 12.2286 5.65694 12.5437 7.37221C14.2697 7.42633 16.0571 6.39544 17.0953 5.06511Z"
                            fill="#F5F5F5"
                          />
                        </svg>
                      </span>
                      <div className="flex flex-col justify-center items-start">
                        <span className="text-[8px] md:text-[9px] text-white font-bold leading-[13px]">
                          Download on the
                        </span>
                        <span className="text-[18px] md:text-[22px] text-[#F5F5F5] font-bold md:leading-[150%]">
                          App Store
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Comming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="relative inline-flex h-auto bg-gradient-to-r from-orange-500 to-yellow-500 overflow-hidden border-2 border-white rounded-[8px]">
                    <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px]  py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white  ">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="29"
                          className="w-[22px] md:w-[27px] h-[25px] md:h-[29px]"
                          viewBox="0 0 27 29"
                          fill="none"
                        >
                          <path
                            d="M4.91987 28.0649C4.28691 28.4735 3.52669 28.5971 2.81348 28.4288L15.3455 15.9102L19.4071 19.9674L4.91987 28.0649Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M1.2577 27.4095C0.908256 26.9453 0.707031 26.3754 0.707031 25.7724V3.47296C0.707031 2.87003 0.908256 2.30009 1.2577 1.83594L14.0581 14.6226L1.2577 27.4095Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M24.7073 17.004L21.057 19.0442L16.6318 14.6238L21.0573 10.2031L24.708 12.2436C25.5825 12.733 26.1047 13.6228 26.1047 14.6238C26.1047 15.6248 25.5825 16.5144 24.7073 17.004Z"
                            fill="#F5F5F5"
                          />
                          <path
                            d="M15.3446 13.3383L2.81348 0.820392C3.01887 0.772034 3.228 0.746094 3.43703 0.746094C3.95382 0.746094 4.46869 0.892876 4.91912 1.18356L19.4064 9.28092L15.3446 13.3383Z"
                            fill="#F5F5F5"
                          />
                        </svg>
                      </span>
                      <div className="flex flex-col justify-center items-start">
                        <span className="text-[8px] md:text-[9px] text-white font-bold leading-[13px]">
                          Get it on
                        </span>
                        <span className="text-[18px] md:text-[22px] text-[#F5F5F5] font-bold md:leading-[150%]">
                          Google Play
                        </span>
                      </div>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="download-btn-modal-card w-[300px] md:w-full sm:max-w-[495px] flex flex-col justify-center items-center pb-8">
                  <h6>Comming Soon</h6>
                  <h4 className="w-[240px] md:w-[300px] text-[#E5E5E5] text-[24px] md:text-[33px] text-center leading-normal">
                    Scan & Download{" "}
                    <span className="mid-heading bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-bold text-[28px] md:text-[38px]">
                      SWASTHI
                    </span>{" "}
                    App
                  </h4>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="relative -top-12 sm:-top-24">
            <img src="/Mockup Mobile.png" alt="none" className="ml-10" />
          </div>

          {/* <div className="md:absolute md:top-[-15%] md:right-[5%]">
            <svg
              className="w-[320px] md:w-[457px] h-[360px] md:h-[612px]"
              width="457"
              height="612"
              viewBox="0 0 457 612"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink"
            >
              <path
                d="M0 79.3333C0 60.9239 14.8565 46 33.1829 46H219.007C237.334 46 252.19 60.9238 252.19 79.3333V532.667C252.19 551.076 237.334 566 219.007 566H33.1829C14.8565 566 0 551.076 0 532.667V79.3333Z"
                fill="#3A4245"
              />
              <path
                d="M2.41309 79.3349C2.41309 62.2643 16.1891 48.4258 33.1827 48.4258H219.007C236 48.4258 249.776 62.2643 249.776 79.3349V532.668C249.776 549.739 236 563.577 219.007 563.577H33.1827C16.1891 563.577 2.41309 549.739 2.41309 532.668V79.3349Z"
                fill="#121515"
              />
              <mask
                id="mask0_12029_50711"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="12"
                y="59"
                width="228"
                height="495"
              >
                <path
                  d="M12.6699 97.5138C12.6699 81.6059 12.6699 73.6519 16.7028 68.076C18.0052 66.2752 19.5817 64.6915 21.3744 63.3832C26.9252 59.332 34.8433 59.332 50.6794 59.332H201.511C217.347 59.332 225.265 59.332 230.816 63.3832C232.608 64.6915 234.185 66.2752 235.487 68.076C239.52 73.6519 239.52 81.6059 239.52 97.5139V515.09C239.52 530.998 239.52 538.952 235.487 544.527C234.185 546.328 232.608 547.912 230.816 549.22C225.265 553.271 217.347 553.271 201.511 553.271H50.6794C34.8433 553.271 26.9252 553.271 21.3744 549.22C19.5817 547.912 18.0052 546.328 16.7028 544.527C12.6699 538.952 12.6699 530.998 12.6699 515.09V97.5138Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_12029_50711)">
                <rect
                  x="12.6699"
                  y="59.332"
                  width="226.85"
                  height="493.939"
                  fill="url(#pattern0_12029_50711)"
                />
              </g>
              <g clipPath="url(#clip0_12029_50711)">
                <path
                  d="M156.098 39.2308C156.098 17.5642 173.645 0 195.29 0H414.767C436.413 0 453.96 17.5642 453.96 39.2308V572.769C453.96 594.436 436.413 612 414.767 612H195.29C173.645 612 156.098 594.436 156.098 572.769V39.2308Z"
                  fill="#3A4245"
                />
                <path
                  d="M158.948 39.2292C158.948 19.1384 175.219 2.85156 195.29 2.85156H414.768C434.839 2.85156 451.11 19.1384 451.11 39.2292V572.768C451.11 592.858 434.839 609.145 414.768 609.145H195.29C175.219 609.145 158.948 592.858 158.948 572.768V39.2292Z"
                  fill="#121515"
                />
                <mask
                  id="mask1_12029_50711"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="171"
                  y="15"
                  width="268"
                  height="583"
                >
                  <path
                    d="M171.062 60.6285C171.062 41.906 171.062 32.5448 175.826 25.9824C177.364 23.863 179.226 21.9991 181.343 20.4593C187.899 15.6914 197.251 15.6914 215.956 15.6914H394.103C412.807 15.6914 422.159 15.6914 428.715 20.4593C430.832 21.9991 432.694 23.863 434.233 25.9824C438.996 32.5448 438.996 41.906 438.996 60.6285V552.083C438.996 570.805 438.996 580.167 434.233 586.729C432.694 588.849 430.832 590.712 428.715 592.252C422.159 597.02 412.807 597.02 394.103 597.02H215.956C197.251 597.02 187.899 597.02 181.343 592.252C179.226 590.712 177.364 588.849 175.826 586.729C171.062 580.167 171.062 570.805 171.062 552.083V60.6285Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask1_12029_50711)">
                  <rect
                    x="171.062"
                    y="15.6914"
                    width="267.934"
                    height="581.329"
                    fill="url(#pattern1_12029_50711)"
                  />
                </g>
              </g>
              <defs>
                <pattern
                  id="pattern0_12029_50711"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_12029_50711"
                    transform="matrix(0.00257983 0 0 0.00118483 -0.00306761 0)"
                  />
                </pattern>
                <pattern
                  id="pattern1_12029_50711"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image1_12029_50711"
                    transform="matrix(0.00257071 0 0 0.00118483 -0.00128752 0)"
                  />
                </pattern>
                <clipPath id="clip0_12029_50711">
                  <rect
                    width="300"
                    height="612"
                    fill="white"
                    transform="translate(156.098)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div> */}
        </div>
      </section>
    </>
  );
}
