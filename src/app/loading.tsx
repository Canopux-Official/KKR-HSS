export default function Loading() {
  return (
    <div
      className="min-h-[50vh] flex items-center justify-center bg-surface"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="text-center">
        <div
          className="loading-spinner w-8 h-8 border-2 border-border border-t-maroon rounded-full mx-auto"
          aria-hidden="true"
        />
        <p className="mt-4 font-body text-body-sm text-stone">Loading...</p>
      </div>
    </div>
  );
}
