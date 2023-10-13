var items = [];   // primeiro cria-se um array, afinal, isso é uma lista de compras
                    //array serve para listas
document.querySelector('input[type=submit]').   // quando clicar em cadastrar (algo vai acontecer)
addEventListener('click', ()=>{     //n esquecer virgula apos 'click' // AQUI CRIO UMA FUNÇÃO PRA ESSE ALGO ACONTECER
    var nome_produto = document.querySelector('input[name=nome_produto]'); // AQUI É O RESGATE DO NOME DO PRODUTO
    var valor_produto = document.querySelector('input[name=valor_produto]'); //RESGATE DO VALOR (CRIAMOS UM VAR PRA CADA UM)

    items.push({       //isso aqui é um objeto que cadastra o nome e o valor
                     //do produto que acabei de criar ali em cima lá no array items, e deve-se utilizar
        nome: nome_produto.value,   //items.push ABRE PARENTESE E CHAVE ({})
        valor: valor_produto.value // items pq o nome do array é ITEMS
                                //.push é para empurrar esse resultado pra lá.
  
    });     //aqui vc fecha o objeto, mas n fecha a função var nome_produto/valor
            //ela só será fechada no final

    let listaProdutos=document.querySelector('.lista-produtos');
    let soma=0;
    listaProdutos.innerHTML ="";
    items.map(function(val){         //esse código soma+ que é =0 serve pra somar os valores q eu coloco lá
        soma+=parseFloat(val.valor);        //esse código serve pra somar numeros com virgula, porem, ele precisa do toFixed(2) pra que tenha NO MAXIMO 2 casas
        listaProdutos.innerHTML+= `
                    <div class="lista-produtos-single">
                    <h3>`+val.nome+`</h3>     
                    <h3 class="price"><span>R$`+val.valor+`</span></h3>
                </div>
        `; //'+val.nome+' deve estar entre apostrofos e concatenado

        

    })
        soma=soma.toFixed(2);  // no maximo duas casas decimais
        nome_produto.value="";      // esses dois servem pra quando clicar
        valor_produto.value="";   //as caixas de texto retornem pra ""(nada)
                                    //ao inves de ficar lá o que vc escreveu  



         let elementoSoma=document.querySelector('.soma-produto h3')  
         elementoSoma.innerHTML= 'R$'+soma;                                 //FAZER A SOMA DOS PRODUTOS APARECEREM NA TELA?
   
        });

        document.querySelector('button[name=limpar]')
        .addEventListener('click',()=>{
            items = [];
            
                    document.querySelector('.lista-produtos').innerHTML="";
                    document.querySelector('.soma-produto h3').innerHTML="R$0";
        })
      



    





