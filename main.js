// Lista de proyectos (puedes agregar más aquí)
const projetos = [
  {
    titulo: "Sistema de Automação com FastAPI",
    desc: "API para automação de tarefas repetitivas e integração com bancos de dados.",
    link: "#"
  },
  {
    titulo: "Python",
    desc: "Projetos de Python e boas práticas de programação.",
    link: "#"
  },
  {
    titulo: "Javascript",
    desc: "Página moderna e otimizada para conversão, construída com HTML, Tailwind e JS.",
    link: "#"
  }
];

// Renderizar projetos automáticamente
const container = document.getElementById("projetos-lista");
if (container) {
  container.innerHTML = projetos.map(p =>
    `<article class="bg-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-xl transition">
      <h3 class="text-xl font-bold text-center mb-2">${p.titulo}</h3>
      <p class="text-gray-400 text-center mb-4">${p.desc}</p>
      <div class="flex justify-center">
        <a href="${p.link}" class="text-blue-400 hover:underline">Ver projeto →</a>
      </div>
    </article>`
  ).join('');
}