export default function Section({title, subtitle, children}: {title: string, subtitle: string, children: React.ReactNode}) {
    return(
        <section className="m-8 flex flex-col items-center gap-4">
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-2xl text-gray-500">{subtitle}</p>
            <div className="w-full">
                {children}
            </div>
        </section>
    );
}