import {
    Clock,
    LayoutDashboard,
    Lock,
    MoreHorizontal,
    Plus,
    Star,
    TrendingUp,
    Users,
    X,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
    const [boards, setBoards] = useState([
        {
            id: 1,
            name: "Marketing Plan",
            color: "from-blue-500 to-blue-600",
            starred: true,
            recent: true,
            visibility: "private",
            members: 3,
        },
        {
            id: 2,
            name: "Product Roadmap",
            color: "from-green-500 to-emerald-600",
            starred: false,
            recent: true,
            visibility: "workspace",
            members: 5,
        },
        {
            id: 3,
            name: "Team Tasks",
            color: "from-purple-500 to-violet-600",
            starred: true,
            recent: true,
            visibility: "private",
            members: 8,
        },
        {
            id: 4,
            name: "Design System",
            color: "from-pink-500 to-rose-600",
            starred: false,
            recent: false,
            visibility: "public",
            members: 4,
        },
        {
            id: 5,
            name: "Sprint Planning",
            color: "from-orange-500 to-amber-600",
            starred: false,
            recent: true,
            visibility: "workspace",
            members: 6,
        },
        {
            id: 6,
            name: "Client Projects",
            color: "from-teal-500 to-cyan-600",
            starred: true,
            recent: false,
            visibility: "private",
            members: 2,
        },
        {
            id: 7,
            name: "Content Calendar",
            color: "from-indigo-500 to-blue-600",
            starred: true,
            recent: true,
            visibility: "workspace",
            members: 7,
        },
        {
            id: 8,
            name: "Bug Tracking",
            color: "from-red-500 to-orange-600",
            starred: false,
            recent: true,
            visibility: "private",
            members: 4,
        },
    ]);

    const [showCreateBoard, setShowCreateBoard] = useState(false);
    const [workspaceView, setWorkspaceView] = useState("grid");

    const toggleStar = (id: any) => {
        setBoards(
            boards.map((board) =>
                board.id === id ? { ...board, starred: !board.starred } : board
            )
        );
    };

    const starredBoards = boards.filter((b) => b.starred);
    const recentBoards = boards.filter((b) => b.recent).slice(0, 8);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#1d2125]">
            <main className="max-w-7xl mx-auto px-8 py-10">
                <div className="mb-10">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white mb-2">
                                Your Workspaces
                            </h1>
                            <p className="text-gray-400">
                                Manage your projects and collaborate with your
                                team
                            </p>
                        </div>
                        <div className="flex items-center gap-2 bg-[#22272b] rounded-lg p-1">
                            <button
                                onClick={() => setWorkspaceView("grid")}
                                className={`p-2.5 rounded-md transition-all ${
                                    workspaceView === "grid"
                                        ? "bg-[#323940] text-white"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <LayoutDashboard size={20} />
                            </button>
                            <button
                                onClick={() => setWorkspaceView("list")}
                                className={`p-2.5 rounded-md transition-all ${
                                    workspaceView === "list"
                                        ? "bg-[#323940] text-white"
                                        : "text-gray-400 hover:text-white"
                                }`}
                            >
                                <TrendingUp size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                    <LayoutDashboard
                                        size={24}
                                        className="text-white"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">
                                        Product Team
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        12 boards • 24 members
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full border-2 border-[#1d2125]"
                                        ></div>
                                    ))}
                                </div>
                                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                                    View all workspaces →
                                </button>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <Users size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg">
                                        Design Team
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        8 boards • 16 members
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full border-2 border-[#1d2125]"
                                        ></div>
                                    ))}
                                </div>
                                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                                    View all workspaces →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    {starredBoards.length > 0 && (
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-yellow-500/10 rounded-lg">
                                    <Star
                                        size={22}
                                        className="text-yellow-400"
                                        fill="currentColor"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-2xl">
                                        Starred Boards
                                    </h2>
                                    <p className="text-gray-400">
                                        Quick access to your favorite boards
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                                {starredBoards.map((board) => (
                                    <BoardCard
                                        key={board.id}
                                        board={board}
                                        onToggleStar={toggleStar}
                                    />
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-500/10 rounded-lg">
                                    <Clock
                                        size={22}
                                        className="text-blue-400"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-white font-bold text-2xl">
                                        Recent Boards
                                    </h2>
                                    <p className="text-gray-400">
                                        Boards you've recently viewed
                                    </p>
                                </div>
                            </div>
                            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1">
                                View all
                                <TrendingUp size={16} />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {recentBoards.map((board) => (
                                <BoardCard
                                    key={board.id}
                                    board={board}
                                    onToggleStar={toggleStar}
                                />
                            ))}

                            <button
                                onClick={() => setShowCreateBoard(true)}
                                className="bg-[#22272b] hover:bg-[#2c333a] border-2 border-dashed border-[#323940] hover:border-blue-500/50 h-32 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all group hover:scale-[1.02]"
                            >
                                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                    <Plus size={24} className="text-blue-400" />
                                </div>
                                <div>
                                    <span className="text-gray-300 font-medium">
                                        Create new board
                                    </span>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Start organizing your work
                                    </p>
                                </div>
                            </button>
                        </div>
                    </section>
                </div>
            </main>

            {showCreateBoard && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
                    <div className="bg-[#22272b] rounded-2xl w-full max-w-lg p-6 border border-[#323940] shadow-2xl animate-slideUp">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-white font-bold text-xl">
                                    Create board
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    Add a new board to organize your tasks
                                </p>
                            </div>
                            <button
                                onClick={() => setShowCreateBoard(false)}
                                className="text-gray-400 hover:text-white hover:bg-[#323940] p-2 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <label className="text-gray-300 font-medium">
                                    Board title
                                </label>
                                <span className="text-xs text-gray-500">
                                    (Required)
                                </span>
                            </div>
                            <input
                                type="text"
                                placeholder="e.g., Marketing Campaign Q4"
                                className="w-full bg-[#2c333a] text-white placeholder-gray-600 px-4 py-3 rounded-xl border border-[#3d474f] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all"
                            />
                        </div>

                        <div className="mb-8">
                            <label className="text-gray-300 font-medium mb-3 block">
                                Choose background
                            </label>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    "from-blue-500 to-blue-600",
                                    "from-green-500 to-emerald-600",
                                    "from-purple-500 to-violet-600",
                                    "from-pink-500 to-rose-600",
                                    "from-orange-500 to-amber-600",
                                    "from-teal-500 to-cyan-600",
                                    "from-red-500 to-orange-600",
                                    "from-indigo-500 to-blue-600",
                                ].map((color, i) => (
                                    <button
                                        key={i}
                                        className={`h-16 rounded-xl bg-gradient-to-br ${color} hover:scale-105 transition-transform border-2 border-transparent hover:border-white/50`}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="flex-1 bg-[#2c333a] hover:bg-[#323940] text-gray-300 py-3 rounded-xl font-medium transition-colors">
                                Cancel
                            </button>
                            <button className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25">
                                Create Board
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function BoardCard({ board, onToggleStar }: any) {
    const getVisibilityIcon = () => {
        switch (board.visibility) {
            case "private":
                return <Lock size={14} className="text-gray-400" />;
            case "public":
                return <Users size={14} className="text-gray-400" />;
            default:
                return <Lock size={14} className="text-gray-400" />;
        }
    };

    return (
        <div
            className={`bg-gradient-to-br ${board.color} h-32 rounded-2xl p-4 cursor-pointer group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
        >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex items-start justify-between">
                    <h3 className="text-white font-bold text-lg leading-tight">
                        {board.name}
                    </h3>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggleStar(board.id);
                        }}
                        className="opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-200 bg-black/20 p-1.5 rounded-lg"
                    >
                        <Star
                            size={18}
                            className="text-white hover:text-yellow-300"
                            fill={board.starred ? "currentColor" : "none"}
                        />
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {getVisibilityIcon()}
                        <span className="text-white/90 text-sm">
                            {board.members} members
                        </span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 text-white/80 hover:text-white p-1 transition-all">
                        <MoreHorizontal size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
