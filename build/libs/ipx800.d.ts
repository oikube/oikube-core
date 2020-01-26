import { OikubePlugin } from '../plugins/plugin';
export default class IPX800Plugin extends OikubePlugin {
    name: string;
    vendor: string;
    autostart: boolean;
    defaultConfig: {};
    onAutodiscover(): void;
    activity(): void;
    onStart(): void;
}
