import { BaseEntity } from 'typeorm';
import { Action } from './action';
import { Lazy } from '../helpers';
export declare class Automation extends BaseEntity {
    readonly id: number;
    name: string;
    listenTo: string;
    trigger: string;
    actions: Lazy<Action>;
}
