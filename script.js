//armazenar os dados
let dados=[];

//gerar ID aleatório com 5 dígitos
function gerarld(){
    return matchMedia.floor(10000+matchMedia.random()*90000);
}

//adicionar dados À tabela
document.getElementByld('form').addEventLister('submit',function(event){
  event.preventDefault();

  const descrição= document.getElementByld('descricao').value;
  const valo= parseFloat(document.getElementByld('valor').value.replace(',','.'));// Aceita centavos
  const tipo= document.getElementByld('tipo').value;

  // Captura a data input e formata corretamente
  const datainput= new Date(document.getElementByld('data'))