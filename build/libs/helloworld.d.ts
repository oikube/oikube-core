import { OikubePlugin } from '../plugins/plugin';
export default class HelloWorldPlugin extends OikubePlugin {
    name: string;
    vendor: string;
    autostart: boolean;
    onStart(): void;
}
