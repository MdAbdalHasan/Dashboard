import Title from "./Title";

function Content() {
    return (
        <div className="w-[1476px] h-[1091px] relative">

            {/* Title */}
            <Title />

            {/* TO-Do List */}

            <div className="w-[339px] h-[856px] left-[50px] top-[265px] absolute">
                <div className="w-[339px] h-[856px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="w-[49px] h-[49px] left-[277px] top-[16px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolut" xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                            <g filter="url(#filter0_d_1_413)">
                                <rect x="8" y="4" width="49" height="49" rx="14" fill="#6418C3" />
                            </g>
                            <path d="M30.426 20V26.596H24V30.744H30.426V37.34H34.914V30.744H41.34V26.596H34.914V20H30.426Z" fill="white" />
                            <defs>
                                <filter id="filter0_d_1_413" x="0" y="0" width="65" height="65" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="4" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_413" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_413" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        To-Do List (24)
                    </div>
                </div>
                <div className="w-[339px] h-[727px] left-0 top-[95px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[91px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-amber-400 text-sm font-semibold font-['Open Sans']">
                                Important
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-amber-400 rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Create sign up sheet for holiday student/parent
                            conferences.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-[67px] h-[7px] left-0 top-0 absolute bg-amber-400 rounded-2xl" />
                        </div>
                        <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>

                    <div className="w-[339px] h-[229px] left-0 top-[249px] absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[148px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-pink-500 text-sm font-semibold font-['Open Sans']">
                                Instructor Meeting
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#E328AF] rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Plan holiday demonstration program. Create outline.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-[107px] h-[7px] left-0 top-0 absolute bg-[#E328AF] rounded-2xl" />
                        </div>
                        <div className="w-[82px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>

                    <div className="w-[339px] h-[229px] left-0 top-[498px] absolute">
                        <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                        <div className="w-[77px] h-[19px] left-[30px] top-[30px] absolute">
                            <div className="left-[21px] top-0 absolute text-green-500 text-sm font-semibold font-['Open Sans']">
                                Databse
                            </div>
                            <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-green-500 rounded-full" />
                        </div>
                        <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                            <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                                <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                                <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                            </svg>
                        </div>
                        <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                            Determine how many boards need to be ordered for
                            testing and demo.
                        </div>
                        <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                            <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                            <div className="w-14 h-[7px] left-0 top-0 absolute bg-green-500 rounded-2xl" />
                        </div>
                        <div className="w-[57px] h-8 left-[30px] top-[169px] absolute">
                            <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                            <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        </div>
                        <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                            <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                                Due in 4 days
                            </div>
                            <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                        </div>
                    </div>
                </div>
            </div>

            {/* In Progress */}

            <div className="w-[383.39px] h-[613.43px] left-[419px] top-[265px] absolute">
                <div className="w-[339px] h-[505px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        In Progress (2)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[21px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75" />
                            <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3" />
                        </svg>
                    </div>
                </div>
                <div className="w-[339px] h-[229px] left-0 top-[93px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[59px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-cyan-300 text-sm font-semibold font-['Open Sans']">
                            Video
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-cyan-300 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Create sparring tutorial video for the weekly class.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-slate-800 rounded-2xl" />
                        <div className="w-[230px] h-[7px] left-0 top-0 absolute bg-cyan-300 rounded-2xl" />
                    </div>
                    <div className="w-[82px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>

                <div className="w-[339px] h-[229px] left-0 top-[342px] absolute bg-slate-950 rounded-[14px]" />
                <div className="origin-top-left rotate-[5.03deg] w-[339px] h-[229px] left-[45.70px] top-[355.57px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute origin-top-left rotate-[5.03deg] bg-[#211A75] rounded-[14px] shadow" />
                    <div className="origin-top-left rotate-[5.03deg] w-[108px] h-[19px] left-[27.25px] top-[32.52px] absolute">
                        <div className="left-[20.92px] top-[1.84px] absolute origin-top-left rotate-[5.03deg] text-rose-500 text-sm font-semibold font-['Open Sans']">
                            BUGS FIXING
                        </div>
                        <div className="w-2.5 h-2.5 left-[-0.44px] top-[4.98px] absolute origin-top-left rotate-[5.03deg] bg-rose-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[279.16px] top-[78.79px] absolute origin-top-left rotate-[-84.97deg] flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div className="w-[279px] left-[25.06px] top-[57.42px] absolute origin-top-left rotate-[5.03deg] text-white text-lg font-semibold leading-[30px]">
                        Payment gateway needs reauthorization.
                    </div>
                    <div className="origin-top-left rotate-[5.03deg] w-[279px] h-[7px] left-[17.78px] top-[140.10px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute origin-top-left rotate-[5.03deg] bg-slate-800 rounded-2xl" />
                        <div className="w-[269px] h-[7px] left-0 top-0 absolute origin-top-left rotate-[5.03deg] bg-rose-500 rounded-2xl" />
                    </div>
                    <div className="origin-top-left rotate-[5.03deg] w-[107px] h-8 left-[15.06px] top-[170.98px] absolute">
                        <div className="w-8 h-8 left-[74.71px] top-[6.58px] absolute origin-top-left rotate-[5.03deg] bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[49.81px] top-[4.39px] absolute origin-top-left rotate-[5.03deg] bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[24.90px] top-[2.19px] absolute origin-top-left rotate-[5.03deg] bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute origin-top-left rotate-[5.03deg] bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="origin-top-left rotate-[5.03deg] w-[115px] h-[19px] left-[177.90px] top-[191.34px] absolute">
                        <div className="left-[23.91px] top-[2.11px] absolute origin-top-left rotate-[5.03deg] text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-[-0.18px] top-[1.99px] absolute origin-top-left rotate-[5.03deg] flex-col justify-start items-start inline-flex" />
                    </div>
                </div>
            </div>

            {/* Done */}

            <div className="w-[339px] h-[786px] left-[788px] top-[265px] absolute">
                <div className="w-[339px] h-[740px] left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        Done (3)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[16px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75" />
                            <path d="M22.426 16V22.596H16V26.744H22.426V33.34H26.914V26.744H33.34V22.596H26.914V16H22.426Z" fill="#6418C3" />
                        </svg>
                    </div>
                </div>

                <div className="w-[339px] h-[229px] left-0 top-[89px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[108px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-rose-500 text-sm font-semibold font-['Open Sans']">
                            BUGS FIXING
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-rose-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Action Button needed for Google Maps visits.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-rose-500 rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>

                <div className="w-[339px] h-[199px] left-0 top-[338px] absolute">
                    <div className="w-[339px] h-[199px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[85px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-green-500 text-sm font-semibold font-['Open Sans']">
                            Database
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-green-500 rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Update new instructor photos.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[108px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-green-500 rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[139px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[145px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>

                <div className="w-[339px] h-[229px] left-0 top-[557px] absolute">
                    <div className="w-[339px] h-[229px] left-0 top-0 absolute bg-[#211A75] rounded-[14px] shadow" />
                    <div className="w-[148px] h-[19px] left-[30px] top-[30px] absolute">
                        <div className="left-[21px] top-0 absolute text-pink-500 text-sm font-semibold font-['Open Sans']">
                            Instructor Meeting
                        </div>
                        <div className="w-2.5 h-2.5 left-0 top-[5px] absolute bg-[#E328AF] rounded-full" />
                    </div>
                    <div className="w-6 h-6 left-[285px] top-[54px] absolute origin-top-left -rotate-90 flex-col justify-start items-start inline-flex">
                        <svg className="rotate-90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="3.5" cy="11.5" r="2.5" transform="rotate(-90 3.5 11.5)" fill="#A5A5A5" />
                            <circle cx="11.5" cy="11.5" r="2.5" transform="rotate(-90 11.5 11.5)" fill="#A5A5A5" />
                            <circle cx="19.5" cy="11.5" r="2.5" transform="rotate(-90 19.5 11.5)" fill="#A5A5A5" />
                        </svg>
                    </div>
                    <div className="w-[279px] left-[30px] top-[55px] absolute text-white text-lg font-semibold leading-[30px]">
                        Review/correct yellow belt techniques.
                    </div>
                    <div className="w-[279px] h-[7px] left-[30px] top-[138px] absolute">
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-neutral-100 rounded-2xl" />
                        <div className="w-[279px] h-[7px] left-0 top-0 absolute bg-[#E328AF] rounded-2xl" />
                    </div>
                    <div className="w-[107px] h-8 left-[30px] top-[169px] absolute">
                        <div className="w-8 h-8 left-[75px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[50px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-[25px] top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                        <div className="w-8 h-8 left-0 top-0 absolute bg-stone-300 rounded-full border-2 border-[#211A75]" />
                    </div>
                    <div className="w-[115px] h-[19px] left-[194px] top-[175px] absolute">
                        <div className="left-[24px] top-0 absolute text-right text-neutral-400 text-sm font-semibold font-['Open Sans']">
                            Due in 4 days
                        </div>
                        <div className="w-4 h-4 left-0 top-[2px] absolute flex-col justify-start items-start inline-flex" />
                    </div>
                </div>
            </div>

            {/* Revised */}

            <div className="w-[339px] h-56 left-[1157px] top-[265px] absolute">
                <div className="w-[339px] h-56 left-0 top-0 absolute bg-[#0D0B21] rounded-[20px]" />
                <div className="w-[339px] h-[81px] left-0 top-0 absolute">
                    <div className="w-[339px] h-[81px] left-0 top-0 absolute bg-[#0D0B21] rounded-tl-[14px] rounded-tr-[14px]" />
                    <div className="left-[30px] top-[22px] absolute text-white text-xl font-bold">
                        Revised (0)
                    </div>
                    <div className="w-[49px] h-[49px] left-[260px] top-[16px] absolute">
                        <svg className="w-[49px] h-[49px] left-0 top-0 absolute" xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
                            <rect width="49" height="49" rx="14" fill="#211A75" />
                            <path d="M22.4261 16V22.596H16.0001V26.744H22.4261V33.34H26.9141V26.744H33.3401V22.596H26.9141V16H22.4261Z" fill="#6418C3" />
                        </svg>
                    </div>
                </div>

                <div className="w-[339px] h-[107px] left-0 top-[101px] absolute">
                    <div className="w-[339px] h-[107px] left-0 top-0 absolute bg-[#211A75] rounded-[14px]" />
                    <div className="w-[299px] h-[67px] left-[20px] top-[20px] absolute bg-[#15132B] rounded-[14px] border-2 border-indigo-400" />
                    <div className="left-[109px] top-[41px] absolute text-center text-indigo-400 text-base font-semibold font-['Open Sans']">
                        Move card here
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
