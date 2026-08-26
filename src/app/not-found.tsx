import Link from "next/link";

const points = [
    { n: 1, x: 200, y: 40 },
    { n: 2, x: 305, y: 78 },
    { n: 3, x: 365, y: 170 },
    { n: 4, x: 350, y: 285 },
    { n: 5, x: 265, y: 355 },
    { n: 6, x: 145, y: 355 },
    { n: 7, x: 60, y: 285 },
    { n: 8, x: 35, y: 170 },
    { n: 9, x: 95, y: 78 },
];

const innerLines = [
    [1, 4],
    [4, 2],
    [2, 8],
    [8, 5],
    [5, 7],
    [7, 1],
    [3, 6],
    [6, 9],
    [9, 3],
];

export default function NotFound() {
    return (
        <section className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-background px-6 py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(7,148,199,0.10),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(6,183,159,0.07),transparent_30%)]" />

            <div className="relative z-10 grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
                <div>
                    <div className="mb-5 inline-flex items-center rounded-full border border-secondary/10 bg-secondary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-secondary">
                        404 · Sayfa Bulunamadı
                    </div>

                    <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-primary md:text-6xl">
                        Bu sayfa kendi yolunu seçmiş olabilir.
                    </h1>

                    <p className="mt-6 max-w-xl text-base leading-7 text-primary/65 md:text-lg">
                        Aradığınız sayfa taşınmış, silinmiş ya da adresi değişmiş olabilir. Ana sayfaya dönerek keşfe kaldığınız yerden devam edebilirsiniz.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-lg">
                            Ana Sayfaya Dön
                        </Link>

                        <Link href="/iletisim" className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:border-secondary/40 hover:text-secondary">
                            Bize Ulaşın
                        </Link>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="relative w-full max-w-[520px]">
                        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/8 blur-3xl" />

                        <svg viewBox="0 0 400 400" className="relative z-10 h-auto w-full overflow-visible">
                            <circle cx="200" cy="200" r="170" fill="none" stroke="rgba(31,39,50,0.28)" strokeWidth="1.2" />

                            {innerLines.map(([from, to], index) => {
                                const p1 = points.find((p) => p.n === from)!;
                                const p2 = points.find((p) => p.n === to)!;

                                return (
                                    <line key={index} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="rgba(7,148,199,0.42)" strokeWidth="1.1" />
                                );
                            })}

                            {points.map((point) => (
                                <g key={point.n} className="group cursor-default origin-center transition-transform duration-300 hover:scale-[1.04]">
                                    <circle cx={point.x} cy={point.y} r="21" fill="#ffffff" stroke="#0794c7" strokeWidth="1.4" className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(7,148,199,0.35)]" />
                                    <text x={point.x} y={point.y + 6} textAnchor="middle" fontSize="18" fontWeight="600" fill="#1f2732">
                                        {point.n}
                                    </text>
                                </g>
                            ))}

                            <circle cx="200" cy="200" r="72" fill="#1f2732" />
                            <text x="200" y="194" textAnchor="middle" fontSize="52" fontWeight="700" fill="#ffffff">
                                404
                            </text>
                            <text x="200" y="222" textAnchor="middle" fontSize="12" letterSpacing="4" fill="rgba(255,255,255,0.55)">
                                KAYIP SAYFA
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}