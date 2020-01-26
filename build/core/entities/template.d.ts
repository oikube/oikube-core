import { BaseEntity } from 'typeorm';
export declare class Template extends BaseEntity {
    readonly id: number;
    name: string;
    description?: string;
    vendor: string;
    settings: string;
}
