import { BaseEntity } from 'typeorm';
import { Lazy } from '../helpers';
import { Widget } from './widget';
export declare class Thing extends BaseEntity {
    readonly id: number;
    name: string;
    description?: string;
    vendor: string;
    address: string;
    isGateway: boolean;
    parent: number;
    isVirtual: boolean;
    currentValue?: string;
    lastUpdated: Date;
    widgets: Lazy<Widget[]>;
    static upsert(data: any): Promise<Thing>;
}
