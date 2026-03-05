const teamMembers = [
    {
        name: "Bruno Medeiros",
        role: "Database Admin",
        image: "https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEWBcpHQMrwTF5p0hQf%2FUWTOk%2BGw%2FnAhiuuN0okrvVFOR2j%2FQLgVJc0ondGtd8eS8wrNHpODUHWmdwCpVDK25DB6BkqlFW%2F78Ay9ZDBPPnng%2BK1rocWLdzttSIc6qMDTWiaDcnsg9uQdJnSLsoixjkenD6j6jF657%2BcUpeMZugwK2sTJErkZ4Y%2FH9vALaTrMaVBsx4Vl6iWJdxLB2kjaz7IulCqeqARrbuGhNRb%2BrNyQTpmIbR%2FMB3naKalk6CTwCby%2FfbcP2zvFzIRLdIWjYZiJh1xdTvmonVzesLQ4v9xjQLPa1t98SlUxhJAgiNHrtLnpJ7%2FE7xieXMg8PbpPua34XMvz7r1SstgO7NPo4W5U5a1%2BDmTcbNOOIKbIeq78kiY23r1UQGUlM1zHB2HAUxNLqi5fb9QWXrUEM85JLsd%2FYyx%2FgRk9pN4ejHwEISpJTez1LUlehvOkdYMEKA6jFGs3Kkr1xfYsTMAU8h%2BzJ4CQUXVpG2o9FiWv06maOQ1a%2FFbeicOOrlGAvkUkX%2FympcY9Rai1KZSjIyth3g1vuZ08Rc7hSgQNFC7nb5jUwch6MVx3YG2%2FKLdOB7g0HyrMHE0%3D&allow_caching=true&sz=w1920-h945-rw&auditContext=forDisplay",
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
        image: "https://chat.google.com/u/0/api/get_attachment_url?url_type=FIFE_URL&content_type=image%2Fpng&attachment_token=AOo0EEU63%2BTiPjAzzv3MImTUrtp9VM3YedgfzO%2BO2BsoLBPCOe2kymQZZO87HkfdTVedCsJll5TPHItsP3XZA9XfOWQfJsRu4JVXPPW7n0M%2BP5Cqh2PRMIfBKX4rf26Os3RHVux8y1HpsJ3t2kzbACc9CGq4AjO5IFH9jjfWpZQnQa5iMorgIVZUpV5Ro6RpdWgW%2BQjFehetsLH2ZinIbf0eylSNNAYZ2pi44eL0TKyn44ih62dCfv8iWCOEKWsKeuRWRncnB7Xp8AjylF0xcWHpk5vp5mR0zFkKKJTvOSNEzKN%2Fusz3rCXI6I44DU8Ghv9CLxutIALmsUmDcfPIiYWZvfPkC3SvPgoHOYLDKusHlanEi2w%2B0C0aqCt%2FPSJmdKXMjChpwU2plDJ%2FO30oFh1g9dEa2rRWfnMxOAYu%2FvL4NJQTHTpAPTf7Kjg3KqUa%2BXVTGfM39K1iGStN3Adu7EacFuwRtkx7eMWxvKeFvaLau1iPKSJ02jWN3fsRBZU48pdy%2B5bhKqVqSSe9ftRkbj7q%2BkYuiM4dLqwyciyz99KFLPfj1O8oChgHvy4oB1%2B%2FBY31L%2FaaruSb7deu35UhMkZV&allow_caching=true&sz=w1920-h945-rw&auditContext=forDisplay",
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