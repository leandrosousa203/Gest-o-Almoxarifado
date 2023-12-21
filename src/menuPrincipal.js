function abrirMenu() {
    document.getElementById("menu").classList.remove("left-[-300px]");
    document.getElementById("menu").classList.add("left-[0px]");
}

function fecharMenu() {
    document.getElementById("menu").classList.remove("left-[0px]");
    document.getElementById("menu").classList.add("left-[-300px]");
}

export function inicializarMenu() {
    const botaoAbrirMenu = document.getElementById("menu-abrir")
    const botaoFecharMenu = document.getElementById("menu-fechar");

    botaoAbrirMenu.addEventListener("click", abrirMenu);
    botaoFecharMenu.addEventListener("click", fecharMenu);
    
}