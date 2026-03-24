//Essa é a solução que encontramos para a aplicação,
//não tem problema se a sua solução for difrerente,
//o importante é alcançar o objetivo
programa
{

	funcao inicio()
	{
		//Declaraçào das variáveis
		real valor
		real porcentagem
		real valorPorcentagem
		real valorDesconto
		real valorJuros

		//Aqui informamos o valor que queremos calcular
		escreva("Informe o valor: ")
		leia(valor)

		//Aqui informamos a porcentagem que queremos descontar e aplicar juros
		escreva("\nInforme a porcentagem: ")
		leia(porcentagem)

		//O valor da porcentagem é calculado aqui
		valorPorcentagem = (porcentagem * valor) / 100

		//Definimos o valor com desconto, subtraindo valorPorcentagem do valor
		valorDesconto = valor - valorPorcentagem

		//Definimios o valor com juros, somando o valorPorcentagem com o valor
		valorJuros = valor + valorPorcentagem

		//Escrevemos os resultados na tela
		escreva("\n"+valor+" com "+porcentagem+"% de desconto é "+valorDesconto+"\n")
		escreva(valor+" com "+porcentagem+"% de juros é "+valorJuros+"\n")
	}
}
/* $$$ Portugol Studio $$$
 *
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 *
 * @POSICAO-CURSOR = 210;
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {valor, 10, 7, 5}-{porcentagem, 11, 7, 11}-{valorPorcentagem, 12, 7, 16};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1508; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */