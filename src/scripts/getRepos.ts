let cache: Promise<any[]> | null = null;

export async function getRepos() {
  if (cache) return cache;

  const API_BASE =
    import.meta.env.PUBLIC_API_BASE ?? 'http://localhost:3000';
  cache = fetch(`${API_BASE}/repos`).then(async (r) => {
    if (!r.ok) throw new Error(`La API respondió ${r.status}`);
    return r.json();
  });
  return cache;
}
