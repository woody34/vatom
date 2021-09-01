import { AImage } from "./AImage";
export * from './AImage'
import { registerComponent } from "../../utils/plugins";
import { App } from "vue";

const Plugin = {
  install(vue: App) {
    registerComponent(vue, AImage);
  }
};

export default Plugin;

export { AImage };
