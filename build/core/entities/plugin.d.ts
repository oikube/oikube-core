import { BaseEntity } from 'typeorm';
export declare class Plugin extends BaseEntity {
    readonly id: number;
    name: string;
    vendor: string;
    description?: string;
    autoStart: boolean;
    hasFailed: boolean;
    listenOnChannels: string;
}
