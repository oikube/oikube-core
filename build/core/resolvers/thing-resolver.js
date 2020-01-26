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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const thing_1 = require("../entities/thing");
const thing_input_1 = require("./types/thing-input");
let ThingResolver = class ThingResolver {
    thing(thingId) {
        return thing_1.Thing.findOne(thingId);
    }
    things() {
        return thing_1.Thing.find();
    }
    addThing(thingInput, { user }) {
        const thing = thing_1.Thing.create(Object.assign({}, thingInput));
        return thing.save();
    }
    getThingByAddress(address) {
        return thing_1.Thing.findOne({ address });
    }
};
__decorate([
    type_graphql_1.Query(returns => thing_1.Thing, { nullable: true }),
    __param(0, type_graphql_1.Arg('thingId', type => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ThingResolver.prototype, "thing", null);
__decorate([
    type_graphql_1.Query(returns => [thing_1.Thing]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ThingResolver.prototype, "things", null);
__decorate([
    type_graphql_1.Mutation(returns => thing_1.Thing),
    __param(0, type_graphql_1.Arg('thing')), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [thing_input_1.ThingInput, Object]),
    __metadata("design:returntype", Promise)
], ThingResolver.prototype, "addThing", null);
ThingResolver = __decorate([
    type_graphql_1.Resolver(thing_1.Thing)
], ThingResolver);
exports.ThingResolver = ThingResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL3Jlc29sdmVycy90aGluZy1yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF3RTtBQUV4RSw2Q0FBMEM7QUFFMUMscURBQWlEO0FBR2pELElBQWEsYUFBYSxHQUExQjtJQUVDLEtBQUssQ0FBOEIsT0FBZTtRQUNqRCxPQUFPLGFBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUdELE1BQU07UUFDTCxPQUFPLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsUUFBUSxDQUFlLFVBQXNCLEVBQVMsRUFBRSxJQUFJLEVBQVc7UUFDdEUsTUFBTSxLQUFLLEdBQUcsYUFBSyxDQUFDLE1BQU0sbUJBQ3RCLFVBQVUsRUFDWixDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELGlCQUFpQixDQUFDLE9BQWU7UUFDaEMsT0FBTyxhQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0QsQ0FBQTtBQW5CQTtJQURDLG9CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxhQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckMsV0FBQSxrQkFBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFHLENBQUMsQ0FBQTs7OzswQ0FFakM7QUFHRDtJQURDLG9CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGFBQUssQ0FBQyxDQUFDOzs7OzJDQUd6QjtBQUdEO0lBREMsdUJBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGFBQUssQ0FBQztJQUNqQixXQUFBLGtCQUFHLENBQUMsT0FBTyxDQUFDLENBQUEsRUFBMEIsV0FBQSxrQkFBRyxFQUFFLENBQUE7O3FDQUFsQix3QkFBVTs7NkNBSzVDO0FBakJXLGFBQWE7SUFEekIsdUJBQVEsQ0FBQyxhQUFLLENBQUM7R0FDSCxhQUFhLENBcUJ6QjtBQXJCWSxzQ0FBYSIsImZpbGUiOiJjb3JlL3Jlc29sdmVycy90aGluZy1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZywgQ3R4LCBJbnQsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgeyBUaGluZyB9IGZyb20gJy4uL2VudGl0aWVzL3RoaW5nJztcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tICcuL3R5cGVzL2NvbnRleHQnO1xuaW1wb3J0IHsgVGhpbmdJbnB1dCB9IGZyb20gJy4vdHlwZXMvdGhpbmctaW5wdXQnO1xuXG5AUmVzb2x2ZXIoVGhpbmcpXG5leHBvcnQgY2xhc3MgVGhpbmdSZXNvbHZlciB7XG5cdEBRdWVyeShyZXR1cm5zID0+IFRoaW5nLCB7IG51bGxhYmxlOiB0cnVlIH0pXG5cdHRoaW5nKEBBcmcoJ3RoaW5nSWQnLCB0eXBlID0+IEludCkgdGhpbmdJZDogbnVtYmVyKSB7XG5cdFx0cmV0dXJuIFRoaW5nLmZpbmRPbmUodGhpbmdJZCk7XG5cdH1cblxuXHRAUXVlcnkocmV0dXJucyA9PiBbVGhpbmddKVxuXHR0aGluZ3MoKTogUHJvbWlzZTxUaGluZ1tdPiB7XG5cdFx0cmV0dXJuIFRoaW5nLmZpbmQoKTtcblx0fVxuXG5cdEBNdXRhdGlvbihyZXR1cm5zID0+IFRoaW5nKVxuXHRhZGRUaGluZyhAQXJnKCd0aGluZycpIHRoaW5nSW5wdXQ6IFRoaW5nSW5wdXQsIEBDdHgoKSB7IHVzZXIgfTogQ29udGV4dCk6IFByb21pc2U8VGhpbmc+IHtcblx0XHRjb25zdCB0aGluZyA9IFRoaW5nLmNyZWF0ZSh7XG5cdFx0XHQuLi50aGluZ0lucHV0LFxuXHRcdH0pO1xuXHRcdHJldHVybiB0aGluZy5zYXZlKCk7XG5cdH1cblx0Z2V0VGhpbmdCeUFkZHJlc3MoYWRkcmVzczogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIFRoaW5nLmZpbmRPbmUoeyBhZGRyZXNzIH0pO1xuXHR9XG59XG4iXX0=
