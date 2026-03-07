'use client';

import { IoArrowUp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { IoMdMic } from "react-icons/io";
import Dou3DModel from './Dou3DModel';

export default function HeroSection() {
    return (
        <div id="hero-section" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#8FA8E8] via-[#6B8DD6] to-[#2948FF]">

            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
            </div>

            {/* Floating Sparkles */}
            <div className="absolute top-[12%] left-[20%] w-1 h-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] animate-pulse" />
            <div className="absolute top-[18%] right-[25%] w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_15px_4px_rgba(255,255,255,0.9)] animate-pulse delay-75" />
            <div className="absolute top-[30%] left-[15%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] animate-pulse delay-150" />
            <div className="absolute top-[22%] right-[18%] w-1 h-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.8)] animate-pulse delay-100" />
            <div className="absolute top-[35%] right-[12%] w-2 h-2 rounded-full bg-white shadow-[0_0_20px_5px_rgba(255,255,255,0.9)] animate-pulse delay-200" />
            <div className="absolute top-[45%] left-[8%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.6)] animate-pulse delay-300" />
            <div className="absolute top-[50%] right-[22%] w-1 h-1 rounded-full bg-white shadow-[0_0_10px_3px_rgba(255,255,255,0.7)] animate-pulse delay-150" />
            <div className="absolute top-[8%] left-[45%] w-1 h-1 rounded-full bg-white shadow-[0_0_8px_2px_rgba(255,255,255,0.7)] animate-pulse delay-500" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center w-full max-w-5xl px-6 text-center">

                {/* Logo */}
                <div className="mb-8 relative w-48 h-48">
                    <Dou3DModel />
                </div>

                <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 tracking-wide mb-2">
                    Distributed Operational Utility
                </p>

                <p className="text-base sm:text-lg text-white/70 max-w-xl mb-12 italic">
                    Your intelligent AI assistant, ready to help you accomplish anything
                </p>

                <div className="w-full max-w-[600px] bg-white/20 backdrop-blur-2xl rounded-[2rem] p-4 sm:p-6 md:p-8 border border-white/30 shadow-[0_8px_32px_rgba(41,72,255,0.2)]">
                    <div className="flex items-center justify-center mb-4 sm:mb-5 space-x-3">
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">
                            DOU
                        </span>
                        <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-[#2948FF] bg-white/90 rounded-full tracking-wider">
                            v0.1
                        </span>
                    </div>

                    {/* Input Area */}
                    <div className="relative flex items-center w-full bg-white/80 backdrop-blur-md rounded-full px-3 sm:px-5 py-2.5 sm:py-4 border border-white/50 shadow-inner">

                        <FiPlus className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 mr-2 sm:mr-3 shrink-0" />

                        <input
                            type="text"
                            placeholder="Ask DOU anything..."
                            className="flex-1 bg-transparent text-gray-800 placeholder-gray-400 outline-none text-sm sm:text-base md:text-lg focus:ring-0"
                        />

                        <button className="ml-2 sm:ml-3 text-gray-500 hover:text-gray-700 transition-colors duration-200 shrink-0">
                            <IoMdMic className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        <button className="bg-[#FB6EFE] hover:bg-[#e85ce0] text-white rounded-full p-2 sm:p-2.5 ml-2 sm:ml-3 transition-all duration-200 shrink-0 shadow-lg hover:shadow-[0_0_20px_rgba(251,110,254,0.5)]">
                            <IoArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2948FF]/50 to-transparent pointer-events-none" />
        </div>
    );
}