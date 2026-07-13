import { mount } from 'svelte'
import App from './App.svelte'

const app = mount(App, {
  target: document.querySelector('.vjs-erd-demo'),
})

export default app
