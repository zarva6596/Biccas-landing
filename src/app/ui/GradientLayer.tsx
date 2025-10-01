
export function GradientLayer() {
  return (
  <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-emerald-50" />
    {/* Переміщене коло праворуч біля секції choose plan */}
    <div className="absolute bottom-0 right-0 w-[634px] h-[634px] rounded-full
            bg-[radial-gradient(closest-side,rgba(45,212,191,0.35),transparent_80%)]
            blur-3xl" />
  </div>
  );
}
