import './styles.css'

import { Component, h } from 'preact'

export class MainView extends Component {
  public render() {
    return (
      <div class="wrapper">
        <div class="name">Nekonyx</div>
        {/* <div class="role">someone who lives somewhere</div> */}
        <div class="links">
          <a href="tg://resolve?domain=nekonyx">@nekonyx</a>
          <a href="mailto:inbox@nekonyx.me">inbox@nekonyx.me</a>
        </div>
      </div>
    )
  }
}
