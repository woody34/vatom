// import { AImageUploader } from './components'
import * as components from './components'

import './index.css'
import { App } from 'vue'


// const install = (instance: App) => {
//     for (let componentKey in components) {
//         instance.component((components as any)[componentKey])
//         // instance.use((components as any)[componentKey])
//     }
// }

function install(Vue: App) {
    for (const component in components) {
        // @ts-expect-error
        Vue.component(components[component].name, components[component])
    }
}


export default { install }

export * from './components'