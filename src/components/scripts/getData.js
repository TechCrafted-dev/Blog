const API_BASE = import.meta.env.API_BASE ?? 'http://localhost:3000';

export async function getData(value) {

  const res = await fetch(`${API_BASE}/${value}?order_by=updated_at&direction=asc`);
  if (!res.ok) throw new Error(`API respondió ${res.status}`);
  return res.json();
}
