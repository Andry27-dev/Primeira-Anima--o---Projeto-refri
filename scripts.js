/* para começar preciso mapear os itens do html para saber quem é quem */
/* agora será necessário criar uma lista */
let list = document.querySelectorAll('.item') /* isso é uma variável. O html aqui é conhecido como document. o queryselectorall é uma ferramenta que procura todos os item que forem mencionados */
let next = document.getElementById('next')
let prev = document.getElementById('prev')
/* os itens já estão mapeados */

/* criar uma váriavel para identificar quantos itens tem na lista */
let count = list.length /* o lenght vai contar os item */
let active = 0 /* a cotagem dos itens iniciarpor padrao a partir do numero 0, então o primeiro item ativo é de numero 0 */

/* preciso saber quando o botão next foi clicado */
next.onclick = () => { /* esse é o código que pode dar ordem ao clique no btn next */
    let activeold = document.querySelector('.active') /* codigo dizendo: vai no html e encontre uma classe com o nom active e guarda */
    activeold.classList.remove('active') /* a ordem é a seguinte; ao clicar no botao next será retirada a classe ativa */
   
    active = active >= count -1 ? 0 : active + 1 
    list [active].classList.add('active')
}
prev.onclick = () => { /* esse é o código que pode dar ordem ao clique no btn prev */
    let activeold = document.querySelector('.active') /* codigo dizendo: vai no html e encontre uma classe com o nom active e guarda */
    activeold.classList.remove('active') /* a ordem é a seguinte; ao clicar no botao next será retirada a classe ativa */

    active = active <= 0 ? count -1 : active -1 
    list [active].classList.add('active')
}/* o objetivo disso tudo é tirar uma classe e colocar outra, fazendo uma transição */
