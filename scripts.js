let botao = document.querySelector(".botao-gerar")
let endereco = "https://api.groq.com/openai/v1/chat/completions"
  

async function gerarcodigo() {
    let textoUsuario = document.querySelector(".caixa-texto").value
    let blococodigo = document.querySelector(".bloco-codigo")
    let resultadocodigo = document.querySelector(".resultado-codigo")

    let resposta = await fetch(endereco, {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer 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" 
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile", 
            messages: [
                {
                role: "system",
                content: "Você é um gerador de código HTML e CSS. Responda SOMENTE com código puro. NUNCA use crases, markdown ou explicações. Formato: primeiro <style> com o CSS, depois o HTML. Siga EXATAMENTE o que o usuário pedir. Se pedir algo quicando, use translateY no @keyframes. Se pedir algo girando, use rotate"
            },
            {
                role: "user",
                content: textoUsuario
            }   
            ]
        })
    })

    let dados = await resposta.json()
    let resultado = dados.choices[0].message.content

    blococodigo.textContent = resultado
    resultadocodigo.srcdoc = resultado

    
}

botao.addEventListener("click", gerarcodigo)

