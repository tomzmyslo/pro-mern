// var contentNode = document.getElementById('contents')
// var component = <h1>Hello Space!</h1>
// ReactDOM.render(component, contentNode)

const contentNode = document.getElementById('contents')

const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe']
const message = continents.map(c => `Hello ${c}!`).join(' ')

const component = <p>{message}</p>
ReactDOM.render(component, contentNode)
