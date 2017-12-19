import { BaseEntity } from './../../shared';

export class Entry implements BaseEntity {
    constructor(
        public id?: number,
        public title?: string,
        public content?: string,
        public date?: any,
        public blog?: BaseEntity,
        public tags?: BaseEntity[],
    ) {
    }
}
