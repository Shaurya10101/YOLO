import Image from "next/image"
import Card from "@/public/image.png"
const Hero = () => {
    return (
        <>
            <div className="flex bg-[#0D0D0D] font-poppins flex-col justify-center items-center h-[600px]">
                <div className="text-white pb-11 flex flex-col justify-center items-center">
                    <div className="flex flex-col pb-10 justify-center items-center gap-6">
                        <div className="font-normal text-sm">
                            UNLOCKING FINANCIAL FREEDOM
                        </div>
                        <div className="font-semibold text-3xl">
                            India's first Hybrid Card
                        </div>
                    </div>
                    <div className=" flex justify-center items-center bg-gradient-to-r from-[#BB0700] to-[#650B0B]  h-[45px]
                    w-[155px]">
                        <button><span>Apply Now</span></button>
                    </div>
                </div>
                <Image className="pl-7"
                    src={Card}
                    width={423}
                    height={264}
                    alt="Credit Card"></Image>
            </div>
        </>
    )
}

export default Hero