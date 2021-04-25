import * as components from './components/index'
import { App } from 'vue'

const install = (instance: App) => {
    for (let componentKey in components) {
        instance.use((components as any)[componentKey])
    }
}

export default install

export * from './components'