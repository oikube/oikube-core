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
let Template = class Template extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Template.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Template.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Template.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Template.prototype, "vendor", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Template.prototype, "settings", void 0);
Template = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Template);
exports.Template = Template;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL3RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsK0NBQWlEO0FBQ2pELHFDQUF3RjtBQU94RixJQUFhLFFBQVEsR0FBckIsY0FBc0IsU0FBUSxvQkFBVTtDQW1CdkMsQ0FBQTtBQWpCQTtJQURDLGdDQUFzQixFQUFFOztvQ0FDTDtBQUlwQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOztzQ0FDSTtBQUliO0lBRkMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzs2Q0FDTjtBQUlyQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOzt3Q0FDTTtBQUlmO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7OzBDQUNRO0FBbEJMLFFBQVE7SUFGcEIsZ0JBQU0sRUFBRTtJQUNSLHlCQUFVLEVBQUU7R0FDQSxRQUFRLENBbUJwQjtBQW5CWSw0QkFBUSIsImZpbGUiOiJjb3JlL2VudGl0aWVzL3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIE1hbnlUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgQmFzZUVudGl0eSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyJztcbmltcG9ydCB7IExhenkgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgVGVtcGxhdGUgZXh0ZW5kcyBCYXNlRW50aXR5IHtcblx0QFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuXHRyZWFkb25seSBpZDogbnVtYmVyO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcblx0QENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHR2ZW5kb3I6IHN0cmluZztcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0c2V0dGluZ3M6IHN0cmluZztcbn1cbiJdfQ==
