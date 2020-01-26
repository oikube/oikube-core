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
const thing_1 = require("./thing");
let Widget = class Widget {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Widget.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Widget.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Widget.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], Widget.prototype, "type", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Widget.prototype, "settings", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Widget.prototype, "position", void 0);
__decorate([
    type_graphql_1.Field(type => thing_1.Thing),
    typeorm_1.ManyToOne(type => thing_1.Thing, { lazy: true }),
    __metadata("design:type", Object)
], Widget.prototype, "thing", void 0);
Widget = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Widget);
exports.Widget = Widget;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL3dpZGdldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFpRDtBQUNqRCxxQ0FBNEU7QUFFNUUsbUNBQWdDO0FBS2hDLElBQWEsTUFBTSxHQUFuQjtDQTBCQyxDQUFBO0FBeEJBO0lBREMsZ0NBQXNCLEVBQUU7O2tDQUNMO0FBSXBCO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7O29DQUNJO0FBSWI7SUFGQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNOO0FBR3JCO0lBREMsb0JBQUssRUFBRTs7b0NBQ0s7QUFJYjtJQUZDLG9CQUFLLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDekIsZ0JBQU0sQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQzs7d0NBQ1Y7QUFJakI7SUFGQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O3dDQUNWO0FBSWpCO0lBRkMsb0JBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQztJQUNwQixtQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztxQ0FDdEI7QUF6QlAsTUFBTTtJQUZsQixnQkFBTSxFQUFFO0lBQ1IseUJBQVUsRUFBRTtHQUNBLE1BQU0sQ0EwQmxCO0FBMUJZLHdCQUFNIiwiZmlsZSI6ImNvcmUvZW50aXRpZXMvd2lkZ2V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JqZWN0VHlwZSwgRmllbGQgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIE1hbnlUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBUaGluZyB9IGZyb20gJy4vdGhpbmcnO1xuaW1wb3J0IHsgTGF6eSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG5ARW50aXR5KClcbkBPYmplY3RUeXBlKClcbmV4cG9ydCBjbGFzcyBXaWRnZXQge1xuXHRAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG5cdHJlYWRvbmx5IGlkOiBudW1iZXI7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdG5hbWU6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0QEZpZWxkKClcblx0dHlwZTogc3RyaW5nO1xuXG5cdEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG5cdEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRzZXR0aW5nczogc3RyaW5nO1xuXG5cdEBGaWVsZCh7IG51bGxhYmxlOiB0cnVlIH0pXG5cdEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRwb3NpdGlvbjogc3RyaW5nO1xuXG5cdEBGaWVsZCh0eXBlID0+IFRoaW5nKVxuXHRATWFueVRvT25lKHR5cGUgPT4gVGhpbmcsIHsgbGF6eTogdHJ1ZSB9KVxuXHR0aGluZzogTGF6eTxUaGluZz47XG59XG4iXX0=
