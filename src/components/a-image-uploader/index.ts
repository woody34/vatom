import { AImageUploader } from "./AImageUploader";
export * from './AImageUploader'
import { registerComponent } from "../../utils/plugins";
import { App } from "vue";

const Plugin = {
  install(vue: App) {
    registerComponent(vue, AImageUploader);
  }
};

export default Plugin;

export { AImageUploader };