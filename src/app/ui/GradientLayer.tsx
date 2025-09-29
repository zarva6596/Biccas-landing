
export function GradientLayer() {
  return (
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>

      <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-emerald-50" />

      <div className="absolute -top-[3278px] -left-24 w-[1123px] h-[634px] rounded-full
                      bg-[radial-gradient(closest-side,rgba(16,185,129,0.45),transparent_20%)]
                      blur-3xl" />
      <div className="absolute -bottom-32 -right-16 w-[560px] h-[560px] rounded-full
                      bg-[radial-gradient(closest-side,rgba(45,212,191,0.35),transparent_20%)]
                      blur-3xl" />
    </div>
  );
}
