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
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(type => type_graphql_1.ID),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
User = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], User);
exports.User = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBcUQ7QUFDckQscUNBQXdGO0FBT3hGLElBQWEsSUFBSSxHQUFqQixVQUFrQixTQUFRLG9CQUFVO0NBZW5DLENBQUE7QUFaQTtJQUZDLG9CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBRSxDQUFDO0lBQ2pCLGdDQUFzQixFQUFFOztnQ0FDTDtBQUlwQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOzttQ0FDSztBQUlkO0lBRkMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztrQ0FDYjtBQUdkO0lBREMsZ0JBQU0sRUFBRTs7c0NBQ1E7QUFkTCxJQUFJO0lBRmhCLHlCQUFVLEVBQUU7SUFDWixnQkFBTSxFQUFFO0dBQ0ksSUFBSSxDQWVoQjtBQWZZLG9CQUFJIiwiZmlsZSI6ImNvcmUvZW50aXRpZXMvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBJRCwgT2JqZWN0VHlwZSB9IGZyb20gJ3R5cGUtZ3JhcGhxbCc7XG5pbXBvcnQgeyBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIEVudGl0eSwgT25lVG9NYW55LCBCYXNlRW50aXR5IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IFRoaW5nIH0gZnJvbSAnLi90aGluZyc7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbkBPYmplY3RUeXBlKClcbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlRW50aXR5IHtcblx0QEZpZWxkKHR5cGUgPT4gSUQpXG5cdEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcblx0cmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0ZW1haWw6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0bmFtZT86IHN0cmluZztcblxuXHRAQ29sdW1uKClcblx0cGFzc3dvcmQ6IHN0cmluZztcbn1cbiJdfQ==
