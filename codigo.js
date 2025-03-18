async function searchUser() {
    const userId = document.getElementById("userId").value;
    const userInfo = document.getElementById("user-info");
    const errorMessage = document.getElementById("error-message");

    // Limpar as mensagens anteriores
    userInfo.classList.add("hidden");
    errorMessage.classList.add("hidden");

    if (!userId) {
        return; // Se o ID não for preenchido, não faz nada
    }

    try {
        // Usando o fetch() para obter dados da API
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }

        const data = await response.json();

        // Exibir as informações do usuário
        document.getElementById("name").textContent = data.name;
        document.getElementById("email").textContent = data.email;
        document.getElementById("address").textContent = `${data.address.street}, ${data.address.city}`;

        // Mostrar as informações na tela
        userInfo.classList.remove("hidden");
    } catch (error) {
        // Caso haja um erro (usuário não encontrado, por exemplo)
        errorMessage.classList.remove("hidden");
    }
}
