const contagem_continua = document.getElementById('contagem-continua')
const btnContando = document.getElementById('btnContando')
const tempoEntreAplicacoes = document.getElementById('tempo')
const quantidadeDeAplicacoes = document.getElementById('quantidade')
const etapa = document.getElementById('etapa')
const totalEtapas = document.getElementById('totaletapas')
const riboflavina = document.getElementById('audio-riboflavina')
const riboflavinaConcluido = document.getElementById(
  'audio-riboflavinaconcluido'
)
const app = document.getElementById('app')

let contando = false
let time
let etapaAtual = 0

let data = new Date()
data.setSeconds(0)
data.setMinutes(0)

btnContando.addEventListener('click', () => {
  if (!contando) {
    contando = true
    totalEtapas.innerHTML = quantidadeDeAplicacoes.value
    etapa.innerHTML = ++etapaAtual
    riboflavina.play()
  } else {
    alert('Cronometro já iniciado')
  }
})

time = setInterval(incrementar, 1000)

function incrementar() {
  if (contando) {
    data.setSeconds(data.getSeconds() + 1)
    if (data.getSeconds() > 59) {
      data.setSeconds(0)
      data.setMinutes(data.getMinutes() + 1)
    }
    contagem_continua.innerHTML = `${data.getMinutes()}:${data.getSeconds()}`
    if (
      data.getMinutes() ==
      tempoEntreAplicacoes.value * quantidadeDeAplicacoes.value
    ) {
      clearInterval(time)
      app.style.backgroundColor = 'red'
      riboflavinaConcluido.play()
    } else if (data.getMinutes() % 2 == 0 && data.getSeconds() == 0) {
      etapa.innerHTML = ++etapaAtual
      riboflavina.play()
    } else if (data.getMinutes() % 2 == 0 && data.getSeconds() <= 5) {
      app.style.backgroundColor = '#fdbd18'
    } else {
      app.style.backgroundColor = '#00858f'
    }
  }
}
