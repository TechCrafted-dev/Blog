let cache: Promise<any[]> | null = null;

export async function getPosts() {
  if (cache) return cache;

  const API_BASE =
    import.meta.env.LOCAL_API_BASE ?? 'http://10.0.10.10:3000';
  cache = fetch(`${API_BASE}/posts`).then(async (r) => {
    if (!r.ok) throw new Error(`La API respondió ${r.status}`);
    return r.json();
  });
  return cache;
}
