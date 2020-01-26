export declare abstract class OikubePlugin {
    readonly listenOnChannels: string;
    readonly name: string;
    readonly vendor: string;
    readonly autoStart: boolean;
    readonly defaultConfig: object;
    isActive: boolean;
    activityLoop: NodeJS.Timer;
    interval: number;
    private pluginModel;
    protected pluginConfig: {
        devices: never[];
    };
    _register(): void;
    _deRegister(): void;
    private _start;
    onStart(): void;
    onAutodiscover(): void;
    activity(): void;
    _stop(): void;
}
