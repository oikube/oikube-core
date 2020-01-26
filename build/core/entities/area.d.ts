import { BaseEntity } from 'typeorm';
import { Lazy } from '../helpers';
export declare class Area extends BaseEntity {
    readonly id: number;
    name: string;
    description?: string;
    parent: Lazy<Area>;
    geometry: string;
}
