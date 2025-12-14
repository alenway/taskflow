import { Bell, Grid, HelpCircle, Plus, Search, User } from "lucide-react";

export default function Header() {
    return (
        <header className="bg-[#1d2125] border-b border-[#323940] px-4 md:px-6 py-2.5">
            <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        className="text-gray-300 hover:text-white hover:bg-[#323940] p-2 rounded transition-all duration-200"
                        aria-label="Show workspace menu"
                    >
                        <Grid size={22} />
                    </button>

                    <div className="flex items-center gap-2.5">
                        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-md px-2 py-1.5 flex items-center justify-center shadow-sm">
                            <div className="flex gap-1">
                                <div className="w-1.5 h-4 bg-white rounded-sm"></div>
                                <div className="w-1.5 h-4 bg-white rounded-sm"></div>
                            </div>
                        </div>
                        <span className="text-white font-bold text-xl tracking-tight">
                            TaskFlow
                        </span>
                    </div>
                </div>

                <div className="flex-1 max-w-2xl mx-4">
                    <div className="relative group">
                        <Search
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-300 transition-colors"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search boards, cards, or teams"
                            className="w-full bg-[#22272b] text-gray-200 placeholder-gray-500 pl-11 pr-4 py-2.5 rounded-lg border border-[#323940] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-200 group-hover:border-[#44546f]"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:block">
                            <kbd className="text-xs text-gray-500 bg-[#2c333a] px-1.5 py-0.5 rounded border border-[#3d474f]">
                                ⌘K
                            </kbd>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2.5 flex-shrink-0">
                    <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98]">
                        <Plus size={18} />
                        <span className="hidden sm:inline">Create</span>
                    </button>

                    <div className="hidden md:flex items-center gap-1 border-l border-[#323940] pl-2.5 ml-1">
                        <button
                            className="text-gray-300 hover:text-white hover:bg-[#323940] p-2.5 rounded-lg transition-all duration-200 relative group"
                            aria-label="Notifications"
                        >
                            <Bell size={22} />
                            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-[#1d2125]"></div>
                        </button>

                        <button
                            className="text-gray-300 hover:text-white hover:bg-[#323940] p-2.5 rounded-lg transition-all duration-200"
                            aria-label="Help"
                        >
                            <HelpCircle size={22} />
                        </button>
                    </div>

                    <button
                        className="flex items-center gap-2 text-gray-300 hover:bg-[#323940] p-1.5 rounded-lg transition-all duration-200 group ml-1"
                        aria-label="Account menu"
                    >
                        <div className="relative">
                            <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md">
                                <User size={20} className="text-white" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1d2125]"></div>
                        </div>
                        <span className="hidden lg:inline text-sm font-medium">
                            You
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
}
