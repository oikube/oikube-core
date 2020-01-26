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
var Area_1;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let Area = Area_1 = class Area extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Area.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Area.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Area.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(type => Area_1),
    typeorm_1.ManyToOne(type => Area_1, { lazy: true }),
    __metadata("design:type", Object)
], Area.prototype, "parent", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Area.prototype, "geometry", void 0);
Area = Area_1 = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Area);
exports.Area = Area;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL2FyZWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQWlEO0FBQ2pELHFDQUF3RjtBQU94RixJQUFhLElBQUksWUFBakIsVUFBa0IsU0FBUSxvQkFBVTtDQW1CbkMsQ0FBQTtBQWpCQTtJQURDLGdDQUFzQixFQUFFOztnQ0FDTDtBQUlwQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOztrQ0FDSTtBQUliO0lBRkMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzt5Q0FDTjtBQUlyQjtJQUZDLG9CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFJLENBQUM7SUFDbkIsbUJBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0NBQ3JCO0FBSW5CO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7O3NDQUNRO0FBbEJMLElBQUk7SUFGaEIsZ0JBQU0sRUFBRTtJQUNSLHlCQUFVLEVBQUU7R0FDQSxJQUFJLENBbUJoQjtBQW5CWSxvQkFBSSIsImZpbGUiOiJjb3JlL2VudGl0aWVzL2FyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYmplY3RUeXBlLCBGaWVsZCB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBCYXNlRW50aXR5IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHsgTGF6eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBBcmVhIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cdEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcblx0cmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG5cdEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRkZXNjcmlwdGlvbj86IHN0cmluZztcblxuXHRARmllbGQodHlwZSA9PiBBcmVhKVxuXHRATWFueVRvT25lKHR5cGUgPT4gQXJlYSwgeyBsYXp5OiB0cnVlIH0pXG5cdHBhcmVudDogTGF6eTxBcmVhPjtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0Z2VvbWV0cnk6IHN0cmluZztcbn1cbiJdfQ==
