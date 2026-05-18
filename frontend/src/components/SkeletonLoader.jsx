export default function SkeletonLoader() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav skeleton */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="flex items-center gap-3">
            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse hidden sm:block" />
            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page header skeleton */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="h-8 w-40 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="h-4 w-64 bg-gray-100 rounded animate-pulse" />
          </div>
          <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse shrink-0" />
        </div>

        {/* Stat cards skeleton */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
                <div className="h-4 w-4 bg-gray-100 rounded animate-pulse" />
              </div>
              <div className="h-8 w-16 bg-gray-100 rounded animate-pulse" />
            </div>
          ))}
        </div>

        {/* Search + filter skeleton */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex-1 h-10 bg-white border border-gray-200 rounded-lg animate-pulse" />
          <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-1 h-10 w-48 animate-pulse" />
        </div>

        {/* Link rows skeleton */}
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-4 space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1 space-y-2">
                  <div className="h-5 w-32 bg-gray-100 rounded animate-pulse" />
                  <div className="h-3 w-96 bg-gray-50 rounded animate-pulse" />
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full animate-pulse" />
                    <div className="h-3 w-20 bg-gray-50 rounded animate-pulse" />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="h-8 w-20 bg-gray-100 rounded animate-pulse" />
                  <div className="h-8 w-8 bg-gray-100 rounded animate-pulse" />
                </div>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="h-3 w-24 bg-gray-50 rounded animate-pulse" />
                <div className="h-5 w-16 bg-gray-50 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
