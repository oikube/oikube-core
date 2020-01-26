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
const jsonwebtoken_1 = require("jsonwebtoken");
const bcryptjs_1 = require("bcryptjs");
const user_1 = require("../entities/user");
const isAuth_1 = require("../api/isAuth");
const config_1 = require("../../defs/config");
let LoginResponse = class LoginResponse {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
LoginResponse = __decorate([
    type_graphql_1.ObjectType()
], LoginResponse);
let UserResolver = class UserResolver {
    hello() {
        return __awaiter(this, void 0, void 0, function* () {
            return 'Hello World';
        });
    }
    Me({ payload }) {
        return __awaiter(this, void 0, void 0, function* () {
            return `Your user id : ${payload.userId}`;
        });
    }
    Register(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcryptjs_1.hash(password, 13);
            try {
                yield user_1.User.insert({
                    name,
                    email,
                    password: hashedPassword,
                });
            }
            catch (err) {
                console.log(err);
                return false;
            }
            return true;
        });
    }
    Login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.User.findOne({ where: { email } });
            if (!user) {
                throw new Error('Could not find user');
            }
            const verify = yield bcryptjs_1.compare(password, user.password);
            if (!verify) {
                throw new Error('Bad password');
            }
            return {
                accessToken: jsonwebtoken_1.sign({ userId: user.id }, config_1.default.JWT_SECRET, {
                    expiresIn: '15m',
                }),
            };
        });
    }
};
__decorate([
    type_graphql_1.Query(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "hello", null);
__decorate([
    type_graphql_1.Query(() => String),
    type_graphql_1.UseMiddleware(isAuth_1.isAuth),
    __param(0, type_graphql_1.Ctx()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Me", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg('name')), __param(1, type_graphql_1.Arg('email')), __param(2, type_graphql_1.Arg('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Register", null);
__decorate([
    type_graphql_1.Mutation(() => LoginResponse),
    __param(0, type_graphql_1.Arg('email')), __param(1, type_graphql_1.Arg('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "Login", null);
UserResolver = __decorate([
    type_graphql_1.Resolver()
], UserResolver);
exports.UserResolver = UserResolver;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL3Jlc29sdmVycy91c2VyLXJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBcUc7QUFDckcsK0NBQW9DO0FBQ3BDLHVDQUF5QztBQUN6QywyQ0FBd0M7QUFDeEMsMENBQXVDO0FBRXZDLDhDQUF1QztBQUd2QyxJQUFNLGFBQWEsR0FBbkI7Q0FHQyxDQUFBO0FBREE7SUFEQyxvQkFBSyxFQUFFOztrREFDWTtBQUZmLGFBQWE7SUFEbEIseUJBQVUsRUFBRTtHQUNQLGFBQWEsQ0FHbEI7QUFHRCxJQUFhLFlBQVksR0FBekI7SUFFTyxLQUFLOztZQUNWLE9BQU8sYUFBYSxDQUFDO1FBQ3RCLENBQUM7S0FBQTtJQUlLLEVBQUUsQ0FBUSxFQUFFLE9BQU8sRUFBYTs7WUFDckMsT0FBTyxrQkFBa0IsT0FBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUdLLFFBQVEsQ0FBYyxJQUFZLEVBQWdCLEtBQWEsRUFBbUIsUUFBZ0I7O1lBQ3ZHLE1BQU0sY0FBYyxHQUFHLE1BQU0sZUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUVoRCxJQUFJO2dCQUNILE1BQU0sV0FBSSxDQUFDLE1BQU0sQ0FBQztvQkFDakIsSUFBSTtvQkFDSixLQUFLO29CQUNMLFFBQVEsRUFBRSxjQUFjO2lCQUN4QixDQUFDLENBQUM7YUFDSDtZQUFDLE9BQU8sR0FBRyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pCLE9BQU8sS0FBSyxDQUFDO2FBQ2I7WUFFRCxPQUFPLElBQUksQ0FBQztRQUNiLENBQUM7S0FBQTtJQUdLLEtBQUssQ0FBZSxLQUFhLEVBQW1CLFFBQWdCOztZQUN6RSxNQUFNLElBQUksR0FBRyxNQUFNLFdBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFdEQsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDdkM7WUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLGtCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUV0RCxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDaEM7WUFFRCxPQUFPO2dCQUNOLFdBQVcsRUFBRSxtQkFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxnQkFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDekQsU0FBUyxFQUFFLEtBQUs7aUJBQ2hCLENBQUM7YUFDRixDQUFDO1FBQ0gsQ0FBQztLQUFBO0NBQ0QsQ0FBQTtBQWhEQTtJQURDLG9CQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDOzs7O3lDQUduQjtBQUlEO0lBRkMsb0JBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUM7SUFDbkIsNEJBQWEsQ0FBQyxlQUFNLENBQUM7SUFDWixXQUFBLGtCQUFHLEVBQUUsQ0FBQTs7OztzQ0FFZDtBQUdEO0lBREMsdUJBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUM7SUFDUixXQUFBLGtCQUFHLENBQUMsTUFBTSxDQUFDLENBQUEsRUFBZ0IsV0FBQSxrQkFBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBLEVBQWlCLFdBQUEsa0JBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTs7Ozs0Q0FldEY7QUFHRDtJQURDLHVCQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0lBQ2pCLFdBQUEsa0JBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQSxFQUFpQixXQUFBLGtCQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7Ozs7eUNBa0J4RDtBQWpEVyxZQUFZO0lBRHhCLHVCQUFRLEVBQUU7R0FDRSxZQUFZLENBa0R4QjtBQWxEWSxvQ0FBWSIsImZpbGUiOiJjb3JlL3Jlc29sdmVycy91c2VyLXJlc29sdmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb2x2ZXIsIFF1ZXJ5LCBNdXRhdGlvbiwgQXJnLCBPYmplY3RUeXBlLCBGaWVsZCwgVXNlTWlkZGxld2FyZSwgQ3R4IH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IHNpZ24gfSBmcm9tICdqc29ud2VidG9rZW4nO1xuaW1wb3J0IHsgaGFzaCwgY29tcGFyZSB9IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9lbnRpdGllcy91c2VyJztcbmltcG9ydCB7IGlzQXV0aCB9IGZyb20gJy4uL2FwaS9pc0F1dGgnO1xuaW1wb3J0IHsgTXlDb250ZXh0IH0gZnJvbSAnLi4vYXBpL015Q29udGV4dCc7XG5pbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL2RlZnMvY29uZmlnJztcblxuQE9iamVjdFR5cGUoKVxuY2xhc3MgTG9naW5SZXNwb25zZSB7XG5cdEBGaWVsZCgpXG5cdGFjY2Vzc1Rva2VuOiBzdHJpbmc7XG59XG5cbkBSZXNvbHZlcigpXG5leHBvcnQgY2xhc3MgVXNlclJlc29sdmVyIHtcblx0QFF1ZXJ5KCgpID0+IFN0cmluZylcblx0YXN5bmMgaGVsbG8oKSB7XG5cdFx0cmV0dXJuICdIZWxsbyBXb3JsZCc7XG5cdH1cblxuXHRAUXVlcnkoKCkgPT4gU3RyaW5nKVxuXHRAVXNlTWlkZGxld2FyZShpc0F1dGgpXG5cdGFzeW5jIE1lKEBDdHgoKSB7IHBheWxvYWQgfTogTXlDb250ZXh0KSB7XG5cdFx0cmV0dXJuIGBZb3VyIHVzZXIgaWQgOiAke3BheWxvYWQhLnVzZXJJZH1gO1xuXHR9XG5cblx0QE11dGF0aW9uKCgpID0+IEJvb2xlYW4pXG5cdGFzeW5jIFJlZ2lzdGVyKEBBcmcoJ25hbWUnKSBuYW1lOiBzdHJpbmcsIEBBcmcoJ2VtYWlsJykgZW1haWw6IHN0cmluZywgQEFyZygncGFzc3dvcmQnKSBwYXNzd29yZDogc3RyaW5nKSB7XG5cdFx0Y29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBoYXNoKHBhc3N3b3JkLCAxMyk7XG5cdFx0Ly8gbGV0IHVzZXIgPSBudWxsO1xuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCBVc2VyLmluc2VydCh7XG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGVtYWlsLFxuXHRcdFx0XHRwYXNzd29yZDogaGFzaGVkUGFzc3dvcmQsXG5cdFx0XHR9KTtcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRATXV0YXRpb24oKCkgPT4gTG9naW5SZXNwb25zZSlcblx0YXN5bmMgTG9naW4oQEFyZygnZW1haWwnKSBlbWFpbDogc3RyaW5nLCBAQXJnKCdwYXNzd29yZCcpIHBhc3N3b3JkOiBzdHJpbmcpIHtcblx0XHRjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgd2hlcmU6IHsgZW1haWwgfSB9KTtcblxuXHRcdGlmICghdXNlcikge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCB1c2VyJyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgdmVyaWZ5ID0gYXdhaXQgY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cblx0XHRpZiAoIXZlcmlmeSkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCYWQgcGFzc3dvcmQnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0YWNjZXNzVG9rZW46IHNpZ24oeyB1c2VySWQ6IHVzZXIuaWQgfSwgY29uZmlnLkpXVF9TRUNSRVQsIHtcblx0XHRcdFx0ZXhwaXJlc0luOiAnMTVtJyxcblx0XHRcdH0pLFxuXHRcdH07XG5cdH1cbn1cbiJdfQ==
