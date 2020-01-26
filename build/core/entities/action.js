"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const template_1 = require("./template");
let Action = class Action extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Action.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Action.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Action.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => template_1.Template),
    typeorm_1.ManyToOne(type => template_1.Template, { lazy: true }),
    __metadata("design:type", Object)
], Action.prototype, "template", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Action.prototype, "params", void 0);
Action = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Action);
exports.Action = Action;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFpRDtBQUNqRCxxQ0FBd0Y7QUFFeEYseUNBQXNDO0FBS3RDLElBQWEsTUFBTSxHQUFuQixZQUFvQixTQUFRLG9CQUFVO0NBbUJyQyxDQUFBO0FBakJBO0lBREMsZ0NBQXNCLEVBQUU7O2tDQUNMO0FBSXBCO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7O29DQUNJO0FBSWI7SUFGQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNOO0FBSXJCO0lBRkMsb0JBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFRLENBQUM7SUFDdkIsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG1CQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dDQUNuQjtBQUl6QjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOztzQ0FDTTtBQWxCSCxNQUFNO0lBRmxCLGdCQUFNLEVBQUU7SUFDUix5QkFBVSxFQUFFO0dBQ0EsTUFBTSxDQW1CbEI7QUFuQlksd0JBQU0iLCJmaWxlIjoiY29yZS9lbnRpdGllcy9hY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBCYXNlRW50aXR5IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnLi90ZW1wbGF0ZSc7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBFbnRpdHkoKVxuQE9iamVjdFR5cGUoKVxuZXhwb3J0IGNsYXNzIEFjdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdG5hbWU6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0QEZpZWxkKHR5cGUgPT4gVGVtcGxhdGUpXG5cdEBNYW55VG9PbmUodHlwZSA9PiBUZW1wbGF0ZSwgeyBsYXp5OiB0cnVlIH0pXG5cdHRlbXBsYXRlOiBMYXp5PFRlbXBsYXRlPjtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0cGFyYW1zOiBzdHJpbmc7XG59XG4iXX0=
