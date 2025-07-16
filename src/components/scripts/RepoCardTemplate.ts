
interface Repo {
    name: string;
    description: string;
    created_at: string;
    language: string;
    id?: string;
}

export function createRepoCard(repo: Repo): string {
    return `
        <a href="/post/${repo.id || repo.name}" class="group">
        <article class="flex flex-col h-full bg-white dark:bg-neutral-800/60 p-4 rounded-lg shadow-sm backdrop-blur-sm
                        border border-neutral-500/10 hover:shadow-lg dark:border-neutral-700/30 transition duration-200
                        hover:dark:bg-neutral-800/80">
            <div class="mb-3">
                <img src="/placeholder.svg" alt="Imagen de ${repo.name}" class="w-full h-40 object-cover rounded-md"/>
            </div>

            <h3 class="text-xl font-semibold mb-2 group-hover:text-blue-600">${repo.name}</h3>
            <p class="text-base text-neutral-600 dark:text-neutral-300">
                ${repo.description}
            </p>

            <div class="mt-auto flex justify-between items-center pt-8">
                <span class="flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    ${new Date(repo.created_at).toLocaleDateString( 'es-ES',
                        {year: 'numeric', month: 'short', day: '2-digit'}
                    )}
                </span>

                <span class="inline-flex items-center gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 6l-6 6 6 6" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l4-14" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 18l6-6-6-6" />
                    </svg>
                    ${repo.language === 'Unknown' || !repo.language ? 'Documentación' : repo.language}
                </span>
            </div>
        </article>
        </a>
    `;
}