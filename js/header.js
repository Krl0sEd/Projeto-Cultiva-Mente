// -------------------- BUSCA NO GOOGLE --------------------
function buscarGoogle(event) {
  event.preventDefault();
  const termo = document.getElementById("campoBusca").value.trim();
  if (termo !== "") {
    const query = encodeURIComponent(termo + " site:.gov.br OR site:.edu.br");
    window.open("https://www.google.com/search?q=" + query, "_blank");
  }
}

// -------------------- LISTA DE SUGESTÕES FIXAS --------------------

const faculdades = [
  // Públicas Federais
  "Universidade de São Paulo (USP)",
  "Universidade Estadual de Campinas (UNICAMP)",
  "Universidade Federal do Rio de Janeiro (UFRJ)",
  "Universidade Federal de Minas Gerais (UFMG)",
  "Universidade Federal de Pernambuco (UFPE)",
  "Universidade Estadual Paulista (UNESP)",
  "Universidade de Brasília (UnB)",
  "Universidade Federal do Paraná (UFPR)",
  "Universidade Federal de Santa Catarina (UFSC)",
  "Universidade Federal do Rio Grande do Sul (UFRGS)",
  "Universidade Federal da Bahia (UFBA)",
  "Universidade Federal de Goiás (UFG)",
  "Universidade Federal do Ceará (UFC)",
  "Universidade Federal do Pará (UFPA)",
  "Universidade Federal do Amazonas (UFAM)",
  "Universidade Federal de Mato Grosso (UFMT)",
  "Universidade Federal de Sergipe (UFS)",
  "Universidade Federal de Alagoas (UFAL)",
  "Universidade Federal de São João del-Rei (UFSJ)",
  "Universidade Federal de Ouro Preto (UFOP)",

  // Institutos Federais
  "Instituto Federal de São Paulo (IFSP)",
  "Instituto Federal do Rio de Janeiro (IFRJ)",
  "Instituto Federal do Rio Grande do Sul (IFRS)",
  "Instituto Federal de Pernambuco (IFPE)",
  "Instituto Federal do Ceará (IFCE)",

  // Públicas Estaduais
  "Universidade Estadual do Rio de Janeiro (UERJ)",
  "Universidade Estadual de Londrina (UEL)",
  "Universidade Estadual de Maringá (UEM)",
  "Universidade Estadual da Paraíba (UEPB)",
  "Universidade Estadual do Sudoeste da Bahia (UESB)",
  "Universidade Estadual do Ceará (UECE)",
  "Universidade Estadual do Mato Grosso do Sul (UEMS)",
  "Universidade Estadual do Oeste do Paraná (UNIOESTE)",

  // Particulares renomadas
  "Pontifícia Universidade Católica de São Paulo (PUC-SP)",
  "Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)",
  "Pontifícia Universidade Católica do Paraná (PUC-PR)",
  "Pontifícia Universidade Católica de Minas Gerais (PUC-Minas)",
  "Universidade Presbiteriana Mackenzie",
  "Universidade Metodista de São Paulo",
  "Universidade Paulista (UNIP)",
  "Universidade Anhembi Morumbi",
  "Faculdade Armando Alvares Penteado (FAAP)",
  "Fundação Getúlio Vargas (FGV)",
  "Universidade Cruzeiro do Sul",
  "Universidade Estácio de Sá",
  "Centro Universitário Belas Artes de São Paulo",
  "Universidade do Vale do Rio dos Sinos (UNISINOS)",
  "Centro Universitário Senac",
  "Universidade La Salle",
  "Centro Universitário FMU",
  "Universidade do Sul de Santa Catarina (UNISUL)",
  "Universidade Positivo",
  "Universidade Salvador (UNIFACS)",
  "Universidade Tiradentes (UNIT)"

];

const escolas = [
  // Escolas Públicas Estaduais e Municipais
  "Escola Estadual Paulo Freire",
  "Escola Municipal Monteiro Lobato",
  "Escola Estadual Rui Barbosa",
  "Escola Municipal Machado de Assis",
  "Escola Estadual Castro Alves",
  "Escola Estadual Joaquim Nabuco",
  "Escola Municipal Cecília Meireles",
  "Escola Estadual Santos Dumont",
  "Escola Municipal Vinícius de Moraes",
  "Escola Estadual Manuel Bandeira",
  "Escola Municipal Heitor Villa-Lobos",
  "Escola Estadual Guimarães Rosa",
  "Escola Municipal Ariano Suassuna",

  // Colégios Técnicos, Federais e de Aplicação
  "Colégio Pedro II - RJ",
  "Escola Técnica Estadual (ETEC)",
  "Colégio Técnico da Unicamp (COTUCA)",
  "Colégio Técnico Industrial (CTI) - Bauru",
  "Colégio de Aplicação da UFPE",
  "Colégio de Aplicação da UFRGS",
  "Colégio de Aplicação da UFSC",
  "Colégio de Aplicação da UFMG",
  "Colégio Técnico da UFMG (COLTEC)",
  "Colégio Técnico da UFRN (CTRN)",
  "Colégio Técnico da UFV (CTUFV)",

  // Instituições Federais de Ensino Médio e Técnico
  "Instituto Federal de Educação - IFSP",
  "Instituto Federal do Rio de Janeiro (IFRJ)",
  "Instituto Federal do Ceará (IFCE)",
  "Instituto Federal de Minas Gerais (IFMG)",
  "Instituto Federal de Brasília (IFB)",
  "Instituto Federal do Rio Grande do Sul (IFRS)",
  "Instituto Federal de Pernambuco (IFPE)",
  "Instituto Federal da Paraíba (IFPB)",

  // Escolas Militares
  "Colégio Militar de Brasília",
  "Colégio Militar de Belo Horizonte",
  "Colégio Militar de Porto Alegre",
  "Colégio Militar de Salvador",
  "Colégio Militar de Fortaleza",
  "Colégio Militar de Curitiba",
  "Colégio Militar de Manaus",
  "Colégio Militar de Recife",
  "Colégio Tiradentes da PM - MG",
  "Colégio da Polícia Militar de Goiás",

  // Outras Escolas de Excelência
  "Centro Educacional SESI",
  "Escola SESC de Ensino Médio - RJ",
  "Colégio Embraer Casimiro Montenegro Filho",
  "Colégio Militar do Corpo de Bombeiros - CE",
  "Centro Educacional Leonardo da Vinci - ES",
  "Escola do Futuro - GO",
  "Escola Técnica Redentorista - PE",
  "Centro Paula Souza - SP",
  "Escola Técnica Federal de Santa Catarina",
  "Colégio Estadual Professor José Accioly - PR"
];

const concursos = [
  // Concursos Federais
  "Concurso INSS",
  "Concurso Banco do Brasil",
  "Concurso Caixa Econômica Federal",
  "Concurso Receita Federal",
  "Concurso Ministério da Educação (MEC)",
  "Concurso Ministério da Saúde",
  "Concurso Ministério da Fazenda",
  "Concurso IBGE",
  "Concurso Correios",
  "Concurso Polícia Federal (PF)",
  "Concurso Polícia Rodoviária Federal (PRF)",
  "Concurso Agência Nacional de Vigilância Sanitária (ANVISA)",
  "Concurso Agência Nacional de Energia Elétrica (ANEEL)",
  "Concurso Agência Nacional de Telecomunicações (ANATEL)",
  "Concurso Controladoria-Geral da União (CGU)",
  "Concurso Tribunal de Contas da União (TCU)",
  "Concurso Advocacia-Geral da União (AGU)",

  // Concursos de Tribunais
  "Concurso Tribunal de Justiça (TJ)",
  "Concurso Tribunal Regional Federal (TRF)",
  "Concurso Tribunal Regional do Trabalho (TRT)",
  "Concurso Tribunal Regional Eleitoral (TRE)",
  "Concurso Superior Tribunal de Justiça (STJ)",
  "Concurso Supremo Tribunal Federal (STF)",
  "Concurso Ministério Público da União (MPU)",
  "Concurso Defensoria Pública da União (DPU)",

  // Concursos Estaduais e Municipais
  "Concurso Polícia Civil",
  "Concurso Polícia Militar",
  "Concurso Corpo de Bombeiros",
  "Concurso Secretaria da Educação",
  "Concurso Secretaria da Saúde",
  "Concurso Câmara Municipal",
  "Concurso Prefeitura Municipal",
  "Concurso Assembleia Legislativa (ALESP, ALERJ, ALMG etc.)",

  // Concursos da Área da Saúde
  "Concurso SUS",
  "Concurso Hospitais Universitários (Ebserh)",
  "Concurso Fundação Oswaldo Cruz (Fiocruz)",
  "Concurso Instituto Nacional de Câncer (INCA)",
  "Concurso ANS - Agência Nacional de Saúde Suplementar",

  // Concursos Militares
  "Concurso Exército (EsPCEx, ESA, IME)",
  "Concurso Marinha (Colégio Naval, Escola Naval)",
  "Concurso Aeronáutica (EEAR, AFA)",
  "Concurso Escola de Sargentos das Armas (ESA)",
  "Concurso Instituto Militar de Engenharia (IME)",

  // Concursos de Ensino e Pesquisa
  "Concurso Instituto Federal (IFs)",
  "Concurso Universidades Federais (UFs)",
  "Concurso CNPq",
  "Concurso CAPES",
  "Concurso EMBRAPA"
];

const sites = [
  // Sites de busca e portais educacionais/ Gratuitos (plataformas públicas e abertas)
  "Khan Academy (gratuito, todas as matérias)",
  "Página Oficial do ENEM (provas anteriores, simulados)",
  "Descomplica ENEM (conteúdo gratuito e pago)",
  "Curso Enem Gratuito (por matéria)",
  "PRISMA (preparação para vestibulares com inteligência artificial)",
  "Toda Matéria (resumos e explicações simples)",
  "Secretaria de Educação de SP (conteúdos e links)",
  "Khan Academy em português",
  "Brasil Escola (matérias e atualidades)",
  "Plataforma Acessível do MEC",

  // Sites com planos pagos (alguns com parte gratuita)
  "QConcursos (simulados e questões)",
  "Estratégia Concursos (material profissional)",
  "Gran Cursos Online",
  "Aprova Concursos",
  "Stoodi (ENEM e vestibulares)",
  "Sala VIP (conteúdo por professores)",
  "Nova Escola (para professores e reforço escolar)",
  "Alura (cursos online pagos)",
  "Udemy (cursos técnicos e profissionalizantes)",
  "Rock Content (marketing e tecnologia)",

  // Outros úteis
  "Vestibulares e calendários",
  "Guia de vestibulares",
  "Plataforma de estudo ENEM (parcialmente gratuito)",
  "Revisão para Passar (ENEM e concursos)"
];

const sitesEmprego = [
  "LinkedIn",
  "Indeed",
  "InfoJobs",
  "Catholic Jobs Online",
  "Glassdoor",
  "Empregos.com.br",
  "Vagas.com.br",
  "Gupy",
  "Kenoby",
  "Trabalha Brasil (antigo SINE)",
  "CIEE (Centro de Integração Empresa-Escola)",
  "Nube (Núcleo Brasileiro de Estágios)",
  "Catho",
  "Jooble",
  "99Jobs",
  "Comunidade Empodera",
  "VAGAS Afirmativas",
  "Remotar",
  "Workana (freelancer)",
  "Freelancer.com",
  "GetNinjas",
  "Rock Content (freelancer de conteúdo)",
  "Fiverr",
  "Upwork",
  "Turing (remoto para programadores)",
  "Taqe (para jovens talentos)",
  "Talent.com",
  "Revelo (tech e inovação)",
  "Programathor (empregos para devs)",
  "Empregare",
  "Hirely",
  "Meu Emprego Novo"
];

const sitesJovemAprendiz = [
  "Jovem Aprendiz Brasil",
  "Programa Jovem Aprendiz do Senai",
  "Programa Jovem Aprendiz do Sesi",
  "Programa Jovem Aprendiz do Senac",
  "Programa Jovem Aprendiz da Coca-Cola",
  "Programa Jovem Aprendiz do Banco do Brasil",
  "Programa Jovem Aprendiz da Caixa Econômica Federal",
  "Programa Jovem Aprendiz da Petrobras",
  "Programa Jovem Aprendiz da Ambev",
  "Programa Jovem Aprendiz da Nestlé",
  "Programa Jovem Aprendiz da Unilever",
  "Programa Jovem Aprendiz da Lojas Americanas",
  "Programa Jovem Aprendiz da Magazine Luiza",
  "Programa Jovem Aprendiz da Carrefour",
  "Programa Jovem Aprendiz da Pão de Açúcar",
  "Trabalha Brasil",
  "Espro (Ensino Social Profissionalizante)",
  "IEL (Instituto Euvaldo Lodi)",
  "Fundação Mudes",
  "SENAI (Programa Aprendiz)",
  "Aprendiz Legal (Fundação Roberto Marinho)",
  "Associação Cidade Escola Aprendiz",
  "Via de Acesso",
  "ABRH Brasil Jovem Aprendiz",
  "Rede Cidadã",
  "IDESCO (Instituto de Desenvolvimento Social)",
  "Jovem Aprendiz Caixa",
  "Jovem Aprendiz Correios",
  "Jovem Aprendiz Bradesco",
  "Jovem Aprendiz Banco do Brasil",
  "Jovem Aprendiz Ambev"
];

const sitesEstagios = [
  "Estagiários.com.br",
  "Super Estágios",
  "Emprega Estágio",
  "Abre (Agência Brasileira de Estágios)",
  "Universia",
  "Estágio Online",
  "Estágio Conab",
  "Programa de Estágio Nestlé",
  "Programa de Estágio Petrobras",
  "Programa de Estágio Vale",
  "Programa de Estágio Ambev",
  "Programa de Estágio Itaú",
  "Programa de Estágio Banco do Brasil"
];

// -------------------- AUTOCOMPLETE --------------------
// Junta e remove duplicados
const sugestoesFixas = [...new Set([...faculdades, ...escolas, ...concursos, ...sites, ...sitesEmprego, ...sitesJovemAprendiz, ...sitesEstagios])];

// Debounce para evitar chamadas excessivas
let debounceTimeout;
document.getElementById("campoBusca").addEventListener("input", function () {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    buscarSugestoes(this.value.trim());
  }, 300);
});

// Gera sugestões baseadas no termo digitado
function buscarSugestoes(termo) {
  const container = document.getElementById("sugestoes");
  container.innerHTML = "";
  if (termo.length < 3) return;

  const sugestoesFiltradas = sugestoesFixas.filter(nome =>
    nome.toLowerCase().includes(termo.toLowerCase())
  );

  sugestoesFiltradas.slice(0, 8).forEach(nome => {
    const item = document.createElement("button");
    item.className = "list-group-item list-group-item-action";
    item.textContent = nome;
    item.type = "button";
    item.onclick = () => {
      document.getElementById("campoBusca").value = nome;
      container.innerHTML = "";
    };
    container.appendChild(item);
  });
}

// Fecha sugestões ao clicar fora da barra
document.addEventListener("click", function (e) {
  const container = document.getElementById("sugestoes");
  if (!document.querySelector(".search-bar").contains(e.target)) {
    container.innerHTML = "";
  }
});

// -------------------- MENU DE ACESSIBILIDADE --------------------
// Seleciona o botão e o menu de acessibilidade
  const toggleBtn = document.getElementById("accessibilityToggle");
  const menu = document.getElementById("accessibilityMenu");

  // Alternar menu ao clicar no botão
  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation(); // evita que feche imediatamente
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  // Fechar o menu se clicar fora
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && e.target !== toggleBtn) {
      menu.style.display = "none";
    }
  });

  // -------------------- ACESSIBILIDADE --------------------
  // Leitura da página (text-to-speech)
  let leituraAtiva = false;
  let utteranceAtual = null;

 function speakPage() {
  const synth = window.speechSynthesis;
  if (!synth) {
    alert("Leitor de texto não suportado neste navegador.");
    return;
  }

  if (leituraAtiva) {
    synth.cancel();
    leituraAtiva = false;
    document.getElementById("leituraStatus").style.display = "none";
    return;
  }

  const content = document.querySelector("main")?.innerText || document.body.innerText;
  if (!content.trim()) {
    alert("Não há conteúdo para ler.");
    return;
  }

  utteranceAtual = new SpeechSynthesisUtterance(content);
  utteranceAtual.lang = "pt-BR";

  leituraAtiva = true;

  const statusBox = document.getElementById("leituraStatus");
  const textoBox = document.getElementById("leituraTexto");
  textoBox.innerText = "";
  statusBox.style.display = "block";

  // Atualizar texto conforme vai lendo
  utteranceAtual.onboundary = (event) => {
    const spoken = content.substring(0, event.charIndex + event.charLength || 0);
    textoBox.innerText = spoken.slice(-300); // Mostra os últimos 300 caracteres
  };

  utteranceAtual.onend = () => {
    leituraAtiva = false;
    statusBox.style.display = "none";
  };

  synth.speak(utteranceAtual);
}

function pararLeitura() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  leituraAtiva = false;
  document.getElementById("leituraStatus").style.display = "none";
}

  // Ativar/desativar fonte disléxica
  function toggleDyslexicFont() {
    document.body.classList.toggle("dyslexic-font");
  }

  // Ativar/desativar modo distração reduzida
  function toggleReducedMotion() {
    document.body.classList.toggle("reduced-motion");
  }

// -------------------- SLIDER DE TAMANHO DA FONTE --------------------
const sliderContainer = document.getElementById("fontSizeSliderContainer");
const fontSizeSlider = document.getElementById("fontSizeSlider");
const fontSizeLabel = document.getElementById("fontSizeLabel");
const fontSizeToggleBtn = document.getElementById("fontSizeToggleBtn");
const resetFontBtn = document.getElementById("resetFontBtn"); // se estiver usando botão de reset

// Alternar visibilidade do slider
fontSizeToggleBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // impedir que o clique feche imediatamente
  sliderContainer.style.display =
    sliderContainer.style.display === "none" ? "block" : "none";
});

// Esconde o slider ao clicar fora
document.addEventListener("click", (e) => {
  if (
    !sliderContainer.contains(e.target) &&
    !fontSizeToggleBtn.contains(e.target)
  ) {
    sliderContainer.style.display = "none";
  }
});

// Aplicar valor salvo, se houver
const fontSaved = localStorage.getItem("userFontSize");
if (fontSaved) {
  document.documentElement.style.fontSize = fontSaved + "%";
  fontSizeSlider.value = fontSaved;
  fontSizeLabel.textContent = "Tamanho: " + fontSaved + "%";
}

// Atualizar tamanho da fonte
fontSizeSlider.addEventListener("input", () => {
  const percent = fontSizeSlider.value;
  document.documentElement.style.fontSize = percent + "%";
  fontSizeLabel.textContent = "Tamanho: " + percent + "%";
  localStorage.setItem("userFontSize", percent);
});

// (Opcional) Botão de reset
if (resetFontBtn) {
  resetFontBtn.addEventListener("click", () => {
    document.documentElement.style.fontSize = "100%";
    fontSizeSlider.value = 100;
    fontSizeLabel.textContent = "Tamanho: 100%";
    localStorage.removeItem("userFontSize");
  });
}

// ------------------ FONTE DISLÉXICA (com LocalStorage + botão visual) ------------------

function applyDyslexicFont(enabled) {
  const btn = document.getElementById("dyslexicBtn");

  if (enabled) {
    document.body.classList.add("dyslexic-font");
    localStorage.setItem("useDyslexicFont", "true");
    if (btn) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-success");
      btn.textContent = "✅ Fonte Disléxica Ativada";
    }
  } else {
    document.body.classList.remove("dyslexic-font");
    localStorage.setItem("useDyslexicFont", "false");
    if (btn) {
      btn.classList.remove("btn-success");
      btn.classList.add("btn-outline-dark");
      btn.textContent = "👁️‍🗨️ Fonte Disléxica";
    }
  }
}

function toggleDyslexicFont() {
  const isActive = document.body.classList.contains("dyslexic-font");
  applyDyslexicFont(!isActive);
}

// Aplica a configuração salva ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("useDyslexicFont");
  if (saved === "true") {
    applyDyslexicFont(true);
  }
});

// ------------------ DISTRAÇÃO REDUZIDA (manter LocalStorage + botão visual) ------------------

function applyReducedMotion(enabled) {
  const btn = document.getElementById("reducedMotionBtn");

  if (enabled) {
    document.body.classList.add("reduced-motion");
    localStorage.setItem("useReducedMotion", "true");

    if (btn) {
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-success");
      btn.innerHTML = "✅ Distração Reduzida Ativada";
    }
  } else {
    document.body.classList.remove("reduced-motion");
    localStorage.setItem("useReducedMotion", "false");

    if (btn) {
      btn.classList.remove("btn-success");
      btn.classList.add("btn-outline-dark");
      btn.innerHTML = "🚫🌀 Distração Reduzida";
    }
  }
}

function toggleReducedMotion() {
  const isActive = document.body.classList.contains("reduced-motion");
  applyReducedMotion(!isActive);
}

// Aplica ao carregar a página, se estiver ativado
if (localStorage.getItem("useReducedMotion") === "true") {
  applyReducedMotion(true);
}

// ------------------ MODO ESCURO ------------------
function applyDarkMode(enabled) {
  const icon = document.getElementById("darkModeIcon");
  const btn = document.getElementById("darkModeToggle");

  if (enabled) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "true");

    if (icon) icon.className = "bi bi-sun-fill";
    if (btn) {
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-warning");
    }
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "false");

    if (icon) icon.className = "bi bi-moon-fill";
    if (btn) {
      btn.classList.remove("btn-outline-warning");
      btn.classList.add("btn-outline-light");
    }
  }
}

function toggleDarkMode() {
  const isDark = document.body.classList.contains("dark-mode");
  applyDarkMode(!isDark);
}

// Aplica ao carregar a página
if (localStorage.getItem("darkMode") === "true") {
  applyDarkMode(true);
}

// Ativa o botão
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);

// Finalizado o script