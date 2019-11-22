import './assets/styles/index.css'

import { h, render } from 'preact'

import { AppComponent } from './components'

// edit in ./assets/styles/index.css too
const nodeId = 'root'
let mountNode = document.getElementById(nodeId)

if (!mountNode) {
  mountNode = document.createElement('div')
  mountNode.id = nodeId

  document.body.append(mountNode)
}

render(<AppComponent />, mountNode)
