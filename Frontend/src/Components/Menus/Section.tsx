export default function Section({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
    return (
        <section className={`flex flex-col items-start gap-4 flex-1 min-w-0`}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--text-dark)">{title}</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-(--text-gray)">{subtitle}</p>
            <div className="w-full h-full">
                {children}
            </div>
        </section>
    );
}