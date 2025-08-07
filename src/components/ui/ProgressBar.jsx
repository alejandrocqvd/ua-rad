export function ProgressBar({ progress }) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100)

  return (
    <div className="w-full md:w-[95%] h-8 bg-gray-300 rounded-[12px] p-1 md:ml-4">
      <div
        className="h-full bg-[#247F4A] rounded-[9px] transition-all duration-300 ease-in-out flex items-center justify-end md:justify-start md:pl-3"
        style={{ width: `${clampedProgress}%` }}
      >
        {clampedProgress > 0 && (
          <span className="text-white text-sm font-medium whitespace-nowrap mr-0 flex items-center">
            {clampedProgress}%
            <span className="hidden md:inline ml-1"></span>
          </span>
        )}
      </div>
    </div>
  )
}
