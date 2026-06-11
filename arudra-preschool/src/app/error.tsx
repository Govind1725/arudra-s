'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF8F0] px-4">
      <div className="text-center max-w-md">
        <span className="text-6xl block mb-4">😅</span>
        <h2 className="text-2xl font-fun text-gray-800 mb-2">Oops! Something went wrong</h2>
        <p className="text-gray-500 mb-6">Don&apos;t worry, even little stars stumble sometimes.</p>
        <button
          onClick={reset}
          className="px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
