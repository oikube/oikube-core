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
let ThingInput = class ThingInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], ThingInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    __metadata("design:type", String)
], ThingInput.prototype, "description", void 0);
ThingInput = __decorate([
    type_graphql_1.InputType()
], ThingInput);
exports.ThingInput = ThingInput;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL3Jlc29sdmVycy90eXBlcy90aGluZy1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFnRDtBQUtoRCxJQUFhLFVBQVUsR0FBdkI7Q0FNQyxDQUFBO0FBSkE7SUFEQyxvQkFBSyxFQUFFOzt3Q0FDSztBQUdiO0lBREMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7K0NBQ047QUFMUixVQUFVO0lBRHRCLHdCQUFTLEVBQUU7R0FDQyxVQUFVLENBTXRCO0FBTlksZ0NBQVUiLCJmaWxlIjoiY29yZS9yZXNvbHZlcnMvdHlwZXMvdGhpbmctaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dFR5cGUsIEZpZWxkIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcblxuaW1wb3J0IHsgVGhpbmcgfSBmcm9tICcuLi8uLi9lbnRpdGllcy90aGluZyc7XG5cbkBJbnB1dFR5cGUoKVxuZXhwb3J0IGNsYXNzIFRoaW5nSW5wdXQgaW1wbGVtZW50cyBQYXJ0aWFsPFRoaW5nPiB7XG5cdEBGaWVsZCgpXG5cdG5hbWU6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuIl19
