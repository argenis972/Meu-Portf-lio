// ===============================
//  Portfólio dinâmico Argenis *_*
//  Repositórios obtidos via API do GitHub
// ===============================

// Nome de usuário do GitHub
const username = "argenis972";

// Função para carregar os repositórios
async function carregarRepos() {
  const container = document.getElementById("projetos-lista");
  container.innerHTML = `<p class="text-center text-gray-400">🔄 Carregando projetos...</p>`;

  try {
    const resposta = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await resposta.json();

    // Filtra e organiza os repositórios
    const projetos = repos
      .filter(repo => !repo.fork) // ignora forks
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)); // mais recentes primeiro

    // Renderiza os cards
    container.innerHTML = projetos.map(p => `
      <article class="bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
        <h3 class="text-xl font-bold text-center mb-2">${p.name}</h3>
        <p class="text-gray-400 text-center mb-4">${p.description || "Sem descrição disponível"}</p>
        <div class="flex justify-center">
          <a href="${p.html_url}" target="_blank" class="text-blue-400 hover:underline">
            Ver projeto →
          </a>
        </div>
      </article>
    `).join('');

  } catch (erro) {
    console.error("Erro ao carregar os repositórios:", erro);
    container.innerHTML = `<p class="text-center text-red-400">❌ Não foi possível carregar os projetos.</p>`;
  }
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", carregarRepos);
