export default function Section({ title, subtitle, children }: { title: string, subtitle: string, children: React.ReactNode }) {
    return (
        <section className="m-8 flex flex-col items-start gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-(--text-dark)">{title}</h2>
            <p className="text-lg md:text-xl lg:text-2xl text-(--text-gray)">{subtitle}</p>
            <div className="w-full">
                {children}
            </div>
        </section>
    );
}