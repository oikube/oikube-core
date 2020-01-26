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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const plugin_1 = require("../entities/plugin");
let PluginResolver = class PluginResolver {
    plugin(pluginId) {
        return plugin_1.Plugin.findOne(pluginId);
    }
    plugins() {
        return plugin_1.Plugin.find();
    }
    enablePlugin(pluginId, { user }) {
        return __awaiter(this, void 0, void 0, function* () {
            const plugin = yield plugin_1.Plugin.findOne(pluginId);
            if (plugin) {
                plugin.isActive = true;
                return plugin.save();
            }
            else {
                return Promise.reject();
            }
        });
    }
};
__decorate([
    type_graphql_1.Query(returns => plugin_1.Plugin, { nullable: true }),
    __param(0, type_graphql_1.Arg('pluginId', type => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PluginResolver.prototype, "plugin", null);
__decorate([
    type_graphql_1.Query(returns => [plugin_1.Plugin]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PluginResolver.prototype, "plugins", null);
__decorate([
    type_graphql_1.Mutation(returns => plugin_1.Plugin),
    __param(0, type_graphql_1.Arg('pluginId')), __param(1, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PluginResolver.prototype, "enablePlugin", null);
PluginResolver = __decorate([
    type_graphql_1.Resolver(plugin_1.Plugin)
], PluginResolver);
exports.PluginResolver = PluginResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL3Jlc29sdmVycy9wbHVnaW4tcmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF3RTtBQUV4RSwrQ0FBNEM7QUFJNUMsSUFBYSxjQUFjLEdBQTNCO0lBRUMsTUFBTSxDQUErQixRQUFnQjtRQUNwRCxPQUFPLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELE9BQU87UUFDTixPQUFPLGVBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBR0ssWUFBWSxDQUFrQixRQUFnQixFQUFTLEVBQUUsSUFBSSxFQUFXOztZQUM3RSxNQUFNLE1BQU0sR0FBRyxNQUFNLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO2lCQUFNO2dCQUNOLE9BQU8sT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3hCO1FBQ0YsQ0FBQztLQUFBO0NBQ0QsQ0FBQTtBQW5CQTtJQURDLG9CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxlQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckMsV0FBQSxrQkFBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFHLENBQUMsQ0FBQTs7Ozs0Q0FFbkM7QUFHRDtJQURDLG9CQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxDQUFDOzs7OzZDQUcxQjtBQUdEO0lBREMsdUJBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGVBQU0sQ0FBQztJQUNSLFdBQUEsa0JBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQSxFQUFvQixXQUFBLGtCQUFHLEVBQUUsQ0FBQTs7OztrREFRM0Q7QUFwQlcsY0FBYztJQUQxQix1QkFBUSxDQUFDLGVBQU0sQ0FBQztHQUNKLGNBQWMsQ0FxQjFCO0FBckJZLHdDQUFjIiwiZmlsZSI6ImNvcmUvcmVzb2x2ZXJzL3BsdWdpbi1yZXNvbHZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFyZywgQ3R4LCBJbnQsIE11dGF0aW9uLCBRdWVyeSwgUmVzb2x2ZXIgfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuXG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuLi9lbnRpdGllcy9wbHVnaW4nO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vdHlwZXMvY29udGV4dCc7XG5cbkBSZXNvbHZlcihQbHVnaW4pXG5leHBvcnQgY2xhc3MgUGx1Z2luUmVzb2x2ZXIge1xuXHRAUXVlcnkocmV0dXJucyA9PiBQbHVnaW4sIHsgbnVsbGFibGU6IHRydWUgfSlcblx0cGx1Z2luKEBBcmcoJ3BsdWdpbklkJywgdHlwZSA9PiBJbnQpIHBsdWdpbklkOiBudW1iZXIpIHtcblx0XHRyZXR1cm4gUGx1Z2luLmZpbmRPbmUocGx1Z2luSWQpO1xuXHR9XG5cblx0QFF1ZXJ5KHJldHVybnMgPT4gW1BsdWdpbl0pXG5cdHBsdWdpbnMoKTogUHJvbWlzZTxQbHVnaW5bXT4ge1xuXHRcdHJldHVybiBQbHVnaW4uZmluZCgpO1xuXHR9XG5cblx0QE11dGF0aW9uKHJldHVybnMgPT4gUGx1Z2luKVxuXHRhc3luYyBlbmFibGVQbHVnaW4oQEFyZygncGx1Z2luSWQnKSBwbHVnaW5JZDogbnVtYmVyLCBAQ3R4KCkgeyB1c2VyIH06IENvbnRleHQpOiBQcm9taXNlPFBsdWdpbj4ge1xuXHRcdGNvbnN0IHBsdWdpbiA9IGF3YWl0IFBsdWdpbi5maW5kT25lKHBsdWdpbklkKTtcblx0XHRpZiAocGx1Z2luKSB7XG5cdFx0XHRwbHVnaW4uaXNBY3RpdmUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIHBsdWdpbi5zYXZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuXHRcdH1cblx0fVxufVxuIl19
