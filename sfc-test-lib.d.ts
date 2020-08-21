import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const SfcTestLib: { install: InstallFunction };
export default SfcTestLib;

export const SfcTestLibSample: VueConstructor<Vue>;
