
import { inicializarMenu } from "./src/menuPrincipal.js";

inicializarMenu();

const catalogo = [   
  {
      id: 1,
      nome: "Monitoramento de Ocorrências",
      nomeArquivo: "monitor.png",
      link : "https://www.appsheet.com/start/7b80d254-49ed-498b-b20a-ee7cd642676a?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Ocorr%C3%AAncias&viewStack[1][identifier][Type]=Control&viewStack[1][identifier][Name]=Settings&viewStack[1][mutableState][isInEditMode]=true&viewStack[1][mutableState][transactionId]=27640191-161e-4120-82b5-62074c6219d3&viewStack[1][parentEntriesHidden]=true&appName=MonitoramentodeAplica%C3%A7%C3%B5es-257460944-23-09-20" 

  },
  {
     id: 2,
     nome: "Monitoramento da Infraestrutura",
     nomeArquivo: "organizacional.png",
     link : "https://www.appsheet.com/start/13ecc25c-efbe-4692-8bd4-9f23f3687e4a"
  },
  {
     id: 3,
     nome: "Chamados Ativação e Suporte",
     nomeArquivo: "roteador.png",
     link : "https://www.appsheet.com/start/d2130c3e-ac3f-40ca-b4bb-20cd1b2b0734"
  },
  {
    id: 4,
    nome: "Chamados da Infraestrutura",
    nomeArquivo: "a-infraestrutura.png",
    link : "https://www.appsheet.com/start/499fccde-98c8-48cc-b3ba-912676fca24c?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=02c0aa4d-5226-4e5d-9e7b-075a2bea7597&appName=chamadosdainfraestrutura-257460944"
 },
 {
    id: 5,
    nome: "Expedição de Bobinas",
    nomeArquivo: "bobina.png",
    link : "https://www.appsheet.com/start/040cd6f8-8a5c-4dd2-a042-ef60bb3340e2?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=c61193c1-fb54-4525-aa8b-978ac0c683f3&appName=ExpediçãodeBobinas-257460944"
},
{
    id: 6,
    nome: "Materiais com Defeito",
    nomeArquivo: "estoque.png",
    link : "https://www.appsheet.com/start/4d23c21a-b054-42f2-9494-f4e980eec7d1?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=88b7ec0b-7f32-4142-8de4-388580dc9b1e&appName=MaterialDevolvidoDefeito-257460944"
},
{
    id: 7,
    nome: "Devoluções da Infraestrutura",
    nomeArquivo: "copper-wire_8019076.png",
    link : "https://www.appsheet.com/start/4ecce858-b67a-473f-9c2e-c068a469fd79?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=5d45e85c-fd61-41ba-81b5-98c49e3d39e9&appName=DevoluçõesdaInfraestrutura-257460944"
},
{
    id: 8,
    nome: "Registro de Materias do Recolhimento",
    nomeArquivo: "production_3516623.png",
    link : "https://www.appsheet.com/start/a3f12f23-9924-4991-98c4-1805811cc344?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=a39b99ca-5ac9-45fb-9b95-911a68547063&appName=Material-Recebido-Recolhimento-257460944"
},
{
    id: 9,
    nome: "Registro de Limpeza",
    nomeArquivo: "limpeza.png",
    link : "https://www.appsheet.com/start/8e9d2b54-a4b4-4ab1-b607-090fa17bec7e?platform=desktop#viewStack[0][identifier][Type]=Control&viewStack[0][identifier][Name]=Settings&viewStack[0][mutableState][isInEditMode]=true&viewStack[0][mutableState][transactionId]=cc7cc320-e1b9-43a0-9bd2-a4e46d64bcd2&appName=RegistrosdeLimpezas-257460944"
},
{
    id: 10,
    nome: "Bi Monitoramento",
    nomeArquivo: "painel.png",
    link : "https://lookerstudio.google.com/reporting/8e52a913-d8a6-42e4-a818-fac62161b495/page/XD4ID"
},
{
    id: 11,
    nome: "Correções de Equipamentos e Produtos",
    nomeArquivo: "eletrocardiograma.png",
    link : "https://docs.google.com/spreadsheets/d/1BCNdUHzaUYNSXkSLe7Vn89UvpENkR0hUAyCdmIMeFxM/edit#gid=0"
},
{
    id: 12,
    nome: "Controle de Recebimento de Compras",
    nomeArquivo: "carrinho-de-compras.png",
    link : "https://docs.google.com/spreadsheets/d/1wF4nr_EFeBSKz7rQZXk-1Phf2kCYmQU4O3iVi6okTBo/edit#gid=1529217367"
},
  
  
  ];
  
  for (const ticketCatalogo of catalogo) {
    const cartaoProduto = `
        <a href="${ticketCatalogo.link}" target="_blank" rel="noopener noreferrer">
            <div class="rounded-lg border-solid border-2 border-sky-300 w-80 m-2 flex flex-col shadow shadow-sky-100 grid justify-items-center overflow-hidden transition duration-300 ease-in-out hover:scale-105 hover:opacity-100 hover:shadow-md hover:shadow-sky-200" id="card-produto-${ticketCatalogo.id}">
                <p class="w-80 bg-sky-200 p-2 text-center font-medium">${ticketCatalogo.nome}</p>
                <img src="./assets/${ticketCatalogo.nomeArquivo}" style="height: 150px" class="p-3"/>
            </div>
        </a>`;

    document.getElementById("container-menu").innerHTML += cartaoProduto;
}

       //rounded-lg w-20 mt-4 mb-1 border border-gray-100 hover:border-gray-100 bg-gray-100 shadow-xl shadow-gray-100


// Adicionando um evento de clique para os botões "Ver ticket"
//const verTicketButtons = document.querySelectorAll('.ver-ticket-btn');
//verTicketButtons.forEach(button => {
  // button.addEventListener('click', () => {
    //   const link = button.getAttribute('data-link');
      // window.open(link, '_blank');
   //});
//});



