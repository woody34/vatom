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

export default {
	install(app: App) {
        for (const component in components) {
            // @ts-expect-error
            console.log('component key', component, 'component: ', components[component])
        }
		Object.values(components).map(component => app.component(component.name, component));
        console.log(app.config)
	},
};

export * from './components'