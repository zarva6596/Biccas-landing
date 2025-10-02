
export function GradientLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      {/* Ще більш м'який, розпливчастий лінійний градієнт у брендовому зеленому кольорі, ще ширше розсіювання */}
      <div
        className="absolute inset-0 top-[3278px] left-[1123px] w-[900px] h-[900px] rounded-full blur-[260px] opacity-25"
        style={{
          background: 'linear-gradient(135deg, #10B981 0%, #34D399 60%, #A7F3D0 100%)',
        }}
      />
    </div>
  );
}
