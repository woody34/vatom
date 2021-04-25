import { App, Component } from "vue"
import { Events } from 'vue'
export const registerComponent = (instance: App, component: Component) => {
    instance.component(component?.name ?? '', component)
}

export const registerComponentProgrammatic = (instance: App, property: string, component: Component) => {
    if (!instance.config.globalProperties.$test) instance.config.globalProperties.$test = {}
    instance.config.globalProperties.$test[property] = component
}

export const typedEvent = <T extends Event>(event: Event) => event as T;

export const getEventTarget = <T extends HTMLElement>(event: Event) => event?.target as T | undefined

export type HTMLEvent<T extends HTMLElement> = Event & {
    source: T
    target: T
    bubbles: boolean
    cancelBubble: boolean
    cancelable: boolean
    composed: boolean
    currentTarget?: HTMLElement
    defaultPrevented: boolean
    eventPhase: number
    isTrusted: boolean
    path: HTMLElement[]
    returnValue: boolean
    srcElement: T;
    timeStamp: 87349.17000000132
    type: string;
}