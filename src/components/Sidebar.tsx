'use client';
import { useRouter } from 'next/navigation';

function Sidebar() {
    const router = useRouter();

    return (
        <aside className="w-full h-full bg-gray-800 border-r text-white p-6">
            <div className="space-y-8">
                {/* Home Page Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">🏠</span>
                    <a onClick={() => router.push('/')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Analytics</a>
                </div>
                                
                {/* Donation Section */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">💰</span>
                    <a onClick={() => router.push('/donation')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Donation</a>
                </div>

                {/* Donation History Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">📜</span>
                    <a onClick={() => router.push('/donation-history')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Donation History</a>
                </div>
                
                {/* Education Section Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">📚</span>
                    <a onClick={() => router.push('/education')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Education</a>
                </div>

                {/* Recipe Suggestion Link */}
                <div className="flex items-center space-x-3">
                    <span className="text-xl font-semibold">🍲</span>
                    <a onClick={() => router.push('/recipe-suggestions')} className="text-lg font-medium hover:text-blue-400 cursor-pointer">Recipe Suggestions</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
