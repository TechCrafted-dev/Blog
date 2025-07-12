// src/data/reposStore.ts
let repos: any[] = [];

export const reposStore = {
  setRepos: (data: any[]) => {
    repos = data;
  },
  getRepos: () => repos
};