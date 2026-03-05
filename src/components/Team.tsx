const teamMembers = [
    {
        name: "Bruno Medeiros",
        role: "Database Admin",
        image: "https://avatars.githubusercontent.com/u/165826045?v=4",
    },
    {
        name: "Jonathan Luis Uber",
        role: "Back-end & Front-end",
        image: "https://avatars.githubusercontent.com/u/159171775?v=4",
    },
    {
        name: "Kauã Felix",
        role: "IoT Physical Circuit",
        image: "https://avatars.githubusercontent.com/u/197680268?v=4",
    },
    {
        name: "Matheus Engel",
        role: "IoT Physical Circuit",
        image: "https://avatars.githubusercontent.com/u/165826045?v=4",
    },
    {
        name: "Pablo Ruan Tzeliks",
        role: "Back-end, Architecture and Planning",
        image: "https://avatars.githubusercontent.com/u/207361294?v=4",
    }
]

function Team() {
    return (
        <div className="px-8 lg:px-40 py-10 lg:mt-12 mx-auto font-mono font-medium text-[var(--color-text)]" id="team">

            <div className="max-w-2xl mx-auto text-center mb-10">
                <h2 className="text-2xl  md:text-4xl text-foreground font-sans tracking-wide italic text-primary">
                    Our Team
                </h2>
                <p className="mt-1 text-muted-foreground-2">
                    Time Trial System
                </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col rounded-xl p-6 bg-card border border-primary/50 border-card-line"
                    >
                        <div className="flex items-center gap-x-4">
                            <img
                                className="rounded-full size-20"
                                src={member.image}
                                alt={member.name}
                            />

                            <div>
                                <h3 className="font-semibold text-primary text-foreground text-xl">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-muted-foreground-1 text-primary/75">
                                    {member.role}
                                </p>
                            </div>
                        </div>

                        <p className="mt-3 text-muted-foreground-1">
                            Aprendiz em Análise e Desenvolvimento de Sistemas pelo CentroWEG. Turma MIDS 78.
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Team;