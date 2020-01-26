import { BaseEntity } from 'typeorm';
import { Template } from './template';
import { Lazy } from '../helpers';
export declare class Action extends BaseEntity {
    readonly id: number;
    name: string;
    description?: string;
    template: Lazy<Template>;
    params: string;
}
