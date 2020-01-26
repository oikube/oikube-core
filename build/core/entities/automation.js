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
const action_1 = require("./action");
let Automation = class Automation extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Automation.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Automation.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Automation.prototype, "listenTo", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Automation.prototype, "trigger", void 0);
__decorate([
    typeorm_1.ManyToMany(type => action_1.Action),
    typeorm_1.JoinTable(),
    type_graphql_1.Field(type => [action_1.Action]),
    __metadata("design:type", Object)
], Automation.prototype, "actions", void 0);
Automation = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Automation);
exports.Automation = Automation;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL2F1dG9tYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBaUQ7QUFDakQscUNBQW9HO0FBRXBHLHFDQUFrQztBQUtsQyxJQUFhLFVBQVUsR0FBdkIsZ0JBQXdCLFNBQVEsb0JBQVU7Q0FvQnpDLENBQUE7QUFsQkE7SUFEQyxnQ0FBc0IsRUFBRTs7c0NBQ0w7QUFJcEI7SUFGQyxvQkFBSyxFQUFFO0lBQ1AsZ0JBQU0sRUFBRTs7d0NBQ0k7QUFJYjtJQUZDLG9CQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekIsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7NENBQ1Y7QUFJakI7SUFGQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNYO0FBS2hCO0lBSEMsb0JBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQU0sQ0FBQztJQUMxQixtQkFBUyxFQUFFO0lBQ1gsb0JBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZUFBTSxDQUFDLENBQUM7OzJDQUNGO0FBbkJWLFVBQVU7SUFGdEIsZ0JBQU0sRUFBRTtJQUNSLHlCQUFVLEVBQUU7R0FDQSxVQUFVLENBb0J0QjtBQXBCWSxnQ0FBVSIsImZpbGUiOiJjb3JlL2VudGl0aWVzL2F1dG9tYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgTWFueVRvTWFueSwgSm9pblRhYmxlLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBCYXNlRW50aXR5IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcbmltcG9ydCB7IExhenkgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgQXV0b21hdGlvbiBleHRlbmRzIEJhc2VFbnRpdHkge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdG5hbWU6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0bGlzdGVuVG86IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0dHJpZ2dlcjogc3RyaW5nO1xuXG5cdEBNYW55VG9NYW55KHR5cGUgPT4gQWN0aW9uKVxuXHRASm9pblRhYmxlKClcblx0QEZpZWxkKHR5cGUgPT4gW0FjdGlvbl0pXG5cdGFjdGlvbnM6IExhenk8QWN0aW9uPjtcbn1cbiJdfQ==
