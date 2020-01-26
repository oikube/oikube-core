"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const TypeGraphQL = require("type-graphql");
const typedi_1 = require("typedi");
const TypeORM = require("typeorm");
const plugin_resolver_1 = require("./resolvers/plugin-resolver");
const thing_resolver_1 = require("./resolvers/thing-resolver");
const action_1 = require("./entities/action");
const area_1 = require("./entities/area");
const automation_1 = require("./entities/automation");
const plugin_1 = require("./entities/plugin");
const template_1 = require("./entities/template");
const thing_1 = require("./entities/thing");
const user_1 = require("./entities/user");
const widget_1 = require("./entities/widget");
const helpers_1 = require("./helpers");
const config_1 = require("../defs/config");
TypeORM.useContainer(typedi_1.Container);
function OikubeCoreService({ createHook }) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield TypeORM.createConnection({
                type: 'sqlite',
                database: ':memory:',
                entities: [thing_1.Thing, user_1.User, widget_1.Widget, area_1.Area, action_1.Action, template_1.Template, automation_1.Automation, plugin_1.Plugin],
                synchronize: true,
                logger: 'advanced-console',
                logging: 'all',
                dropSchema: true,
                cache: true,
            });
            const { defaultUser } = yield helpers_1.seedDatabase();
            const schema = yield TypeGraphQL.buildSchema({
                resolvers: [thing_resolver_1.ThingResolver, plugin_resolver_1.PluginResolver],
                container: typedi_1.Container,
            });
            const context = { user: defaultUser };
            const server = new apollo_server_1.ApolloServer({ schema, context });
            createHook(OikubeCoreService.API_INIT);
            const { url } = yield server.listen(config_1.default.PORT);
            console.log(`Oikube is running, GraphQL Playground available at ${url}`);
        }
        catch (err) {
            console.error(err);
        }
    });
}
exports.OikubeCoreService = OikubeCoreService;
OikubeCoreService.API_INIT = `api/init`;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpREFBNkM7QUFDN0MsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFFbkMsaUVBQTZEO0FBQzdELCtEQUEyRDtBQUUzRCw4Q0FBMkM7QUFDM0MsMENBQXVDO0FBQ3ZDLHNEQUFtRDtBQUNuRCw4Q0FBMkM7QUFDM0Msa0RBQStDO0FBQy9DLDRDQUF5QztBQUN6QywwQ0FBdUM7QUFDdkMsOENBQTJDO0FBQzNDLHVDQUF5QztBQUl6QywyQ0FBb0M7QUFHcEMsT0FBTyxDQUFDLFlBQVksQ0FBQyxrQkFBUyxDQUFDLENBQUM7QUFFaEMsMkJBQXdDLEVBQUUsVUFBVSxFQUFFOztRQUNyRCxJQUFJO1lBRUgsTUFBTSxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlCLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsQ0FBQyxhQUFLLEVBQUUsV0FBSSxFQUFFLGVBQU0sRUFBRSxXQUFJLEVBQUUsZUFBTSxFQUFFLG1CQUFRLEVBQUUsdUJBQVUsRUFBRSxlQUFNLENBQUM7Z0JBQzNFLFdBQVcsRUFBRSxJQUFJO2dCQUNqQixNQUFNLEVBQUUsa0JBQWtCO2dCQUMxQixPQUFPLEVBQUUsS0FBSztnQkFDZCxVQUFVLEVBQUUsSUFBSTtnQkFDaEIsS0FBSyxFQUFFLElBQUk7YUFDWCxDQUFDLENBQUM7WUFHSCxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsTUFBTSxzQkFBWSxFQUFFLENBQUM7WUFHN0MsTUFBTSxNQUFNLEdBQUcsTUFBTSxXQUFXLENBQUMsV0FBVyxDQUFDO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxFQUFFLGdDQUFjLENBQUM7Z0JBQzFDLFNBQVMsRUFBRSxrQkFBUzthQUNwQixDQUFDLENBQUM7WUFHSCxNQUFNLE9BQU8sR0FBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQztZQUcvQyxNQUFNLE1BQU0sR0FBRyxJQUFJLDRCQUFZLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNyRCxVQUFVLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFHdkMsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLENBQUMsc0RBQXNELEdBQUcsRUFBRSxDQUFDLENBQUM7U0FDekU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7SUFDRixDQUFDO0NBQUE7QUFwQ0QsOENBb0NDO0FBRUQsaUJBQWlCLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyIsImZpbGUiOiJjb3JlL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvU2VydmVyIH0gZnJvbSAnYXBvbGxvLXNlcnZlcic7XG5pbXBvcnQgKiBhcyBUeXBlR3JhcGhRTCBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAndHlwZWRpJztcbmltcG9ydCAqIGFzIFR5cGVPUk0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IFBsdWdpblJlc29sdmVyIH0gZnJvbSAnLi9yZXNvbHZlcnMvcGx1Z2luLXJlc29sdmVyJztcbmltcG9ydCB7IFRoaW5nUmVzb2x2ZXIgfSBmcm9tICcuL3Jlc29sdmVycy90aGluZy1yZXNvbHZlcic7XG5cbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vZW50aXRpZXMvYWN0aW9uJztcbmltcG9ydCB7IEFyZWEgfSBmcm9tICcuL2VudGl0aWVzL2FyZWEnO1xuaW1wb3J0IHsgQXV0b21hdGlvbiB9IGZyb20gJy4vZW50aXRpZXMvYXV0b21hdGlvbic7XG5pbXBvcnQgeyBQbHVnaW4gfSBmcm9tICcuL2VudGl0aWVzL3BsdWdpbic7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJy4vZW50aXRpZXMvdGVtcGxhdGUnO1xuaW1wb3J0IHsgVGhpbmcgfSBmcm9tICcuL2VudGl0aWVzL3RoaW5nJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL2VudGl0aWVzL3VzZXInO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi9lbnRpdGllcy93aWRnZXQnO1xuaW1wb3J0IHsgc2VlZERhdGFiYXNlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vcmVzb2x2ZXJzL3R5cGVzL2NvbnRleHQnO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2RlZnMvY29uZmlnJztcblxuLy8gcmVnaXN0ZXIgM3JkIHBhcnR5IElPQyBjb250YWluZXJcblR5cGVPUk0udXNlQ29udGFpbmVyKENvbnRhaW5lcik7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBPaWt1YmVDb3JlU2VydmljZSh7IGNyZWF0ZUhvb2sgfSkge1xuXHR0cnkge1xuXHRcdC8vIGNyZWF0ZSBUeXBlT1JNIGNvbm5lY3Rpb25cblx0XHRhd2FpdCBUeXBlT1JNLmNyZWF0ZUNvbm5lY3Rpb24oe1xuXHRcdFx0dHlwZTogJ3NxbGl0ZScsXG5cdFx0XHRkYXRhYmFzZTogJzptZW1vcnk6JywgLy8gJy4vZGF0YS9kYi5zcWxpdGUnLFxuXHRcdFx0ZW50aXRpZXM6IFtUaGluZywgVXNlciwgV2lkZ2V0LCBBcmVhLCBBY3Rpb24sIFRlbXBsYXRlLCBBdXRvbWF0aW9uLCBQbHVnaW5dLFxuXHRcdFx0c3luY2hyb25pemU6IHRydWUsXG5cdFx0XHRsb2dnZXI6ICdhZHZhbmNlZC1jb25zb2xlJyxcblx0XHRcdGxvZ2dpbmc6ICdhbGwnLFxuXHRcdFx0ZHJvcFNjaGVtYTogdHJ1ZSxcblx0XHRcdGNhY2hlOiB0cnVlLFxuXHRcdH0pO1xuXG5cdFx0Ly8gc2VlZCBkYXRhYmFzZSB3aXRoIHNvbWUgZGF0YVxuXHRcdGNvbnN0IHsgZGVmYXVsdFVzZXIgfSA9IGF3YWl0IHNlZWREYXRhYmFzZSgpO1xuXG5cdFx0Ly8gYnVpbGQgVHlwZUdyYXBoUUwgZXhlY3V0YWJsZSBzY2hlbWFcblx0XHRjb25zdCBzY2hlbWEgPSBhd2FpdCBUeXBlR3JhcGhRTC5idWlsZFNjaGVtYSh7XG5cdFx0XHRyZXNvbHZlcnM6IFtUaGluZ1Jlc29sdmVyLCBQbHVnaW5SZXNvbHZlcl0sXG5cdFx0XHRjb250YWluZXI6IENvbnRhaW5lcixcblx0XHR9KTtcblxuXHRcdC8vIGNyZWF0ZSBtb2NrZWQgY29udGV4dFxuXHRcdGNvbnN0IGNvbnRleHQ6IENvbnRleHQgPSB7IHVzZXI6IGRlZmF1bHRVc2VyIH07XG5cblx0XHQvLyBDcmVhdGUgR3JhcGhRTCBzZXJ2ZXJcblx0XHRjb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHsgc2NoZW1hLCBjb250ZXh0IH0pO1xuXHRcdGNyZWF0ZUhvb2soT2lrdWJlQ29yZVNlcnZpY2UuQVBJX0lOSVQpO1xuXG5cdFx0Ly8gU3RhcnQgdGhlIHNlcnZlclxuXHRcdGNvbnN0IHsgdXJsIH0gPSBhd2FpdCBzZXJ2ZXIubGlzdGVuKGNvbmZpZy5QT1JUKTtcblx0XHRjb25zb2xlLmxvZyhgT2lrdWJlIGlzIHJ1bm5pbmcsIEdyYXBoUUwgUGxheWdyb3VuZCBhdmFpbGFibGUgYXQgJHt1cmx9YCk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0fVxufVxuXG5PaWt1YmVDb3JlU2VydmljZS5BUElfSU5JVCA9IGBhcGkvaW5pdGA7XG4iXX0=
