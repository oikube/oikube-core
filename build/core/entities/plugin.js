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
let Plugin = class Plugin extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.autoStart = true;
        this.hasFailed = false;
        this.listenOnChannels = '';
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Plugin.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Plugin.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Plugin.prototype, "vendor", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Plugin.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Plugin.prototype, "autoStart", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Plugin.prototype, "hasFailed", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Plugin.prototype, "listenOnChannels", void 0);
Plugin = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Plugin);
exports.Plugin = Plugin;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL3BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLCtDQUFpRDtBQUNqRCxxQ0FBNkU7QUFJN0UsSUFBYSxNQUFNLEdBQW5CLFlBQW9CLFNBQVEsb0JBQVU7SUFGdEM7O1FBb0JDLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFJMUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUkzQixxQkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFDL0IsQ0FBQztDQUFBLENBQUE7QUF6QkE7SUFEQyxnQ0FBc0IsRUFBRTs7a0NBQ0w7QUFJcEI7SUFGQyxvQkFBSyxFQUFFO0lBQ1AsZ0JBQU0sRUFBRTs7b0NBQ0k7QUFJYjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOztzQ0FDTTtBQUlmO0lBRkMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzsyQ0FDTjtBQUlyQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOzt5Q0FDaUI7QUFJMUI7SUFGQyxvQkFBSyxFQUFFO0lBQ1AsZ0JBQU0sRUFBRTs7eUNBQ2tCO0FBSTNCO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7O2dEQUNxQjtBQTFCbEIsTUFBTTtJQUZsQixnQkFBTSxFQUFFO0lBQ1IseUJBQVUsRUFBRTtHQUNBLE1BQU0sQ0EyQmxCO0FBM0JZLHdCQUFNIiwiZmlsZSI6ImNvcmUvZW50aXRpZXMvcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmllbGQsIE9iamVjdFR5cGUgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgQmFzZUVudGl0eSwgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgUGx1Z2luIGV4dGVuZHMgQmFzZUVudGl0eSB7XG5cdEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcblx0cmVhZG9ubHkgaWQ6IG51bWJlcjtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0bmFtZTogc3RyaW5nO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHR2ZW5kb3I6IHN0cmluZztcblxuXHRARmllbGQoeyBudWxsYWJsZTogdHJ1ZSB9KVxuXHRAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcblx0ZGVzY3JpcHRpb24/OiBzdHJpbmc7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdGF1dG9TdGFydDogYm9vbGVhbiA9IHRydWU7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdGhhc0ZhaWxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHRsaXN0ZW5PbkNoYW5uZWxzOiBzdHJpbmcgPSAnJztcbn1cbiJdfQ==
