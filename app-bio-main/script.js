// Função para salvar o perfil do usuário no localStorage
function saveProfile(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    // Salva as informações do perfil no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);

    // Feedback ao usuário
    alert('Perfil salvo com sucesso!');
}

// Função para carregar o perfil do usuário, se houver
function loadProfile() {
    const savedName = localStorage.getItem('nome');
    const savedEmail = localStorage.getItem('email');

    if (savedName) {
        document.getElementById('nome').value = savedName;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
}

// Carrega as informações ao iniciar a página
window.onload = function() {
    loadProfile();
};
// Função para salvar o perfil do usuário no localStorage
function saveProfile(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const regiao = document.getElementById('regiao').value;

    // Salva as informações do perfil no localStorage
    localStorage.setItem('nome', nome);
    localStorage.setItem('email', email);
    localStorage.setItem('regiao', regiao);

    // Feedback ao usuário
    alert('Perfil salvo com sucesso!');
}

// Função para carregar o perfil do usuário, se houver
function loadProfile() {
    const savedName = localStorage.getItem('nome');
    const savedEmail = localStorage.getItem('email');
    const savedRegiao = localStorage.getItem('regiao');

    if (savedName) {
        document.getElementById('nome').value = savedName;
    }
    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }
    if (savedRegiao) {
        document.getElementById('regiao').value = savedRegiao;
    }
}

// Carrega as informações ao iniciar a página
window.onload = function() {
    loadProfile();
};

