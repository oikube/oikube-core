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
const user_1 = require("./entities/user");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const defaultUser = user_1.User.create({
            email: 'test@github.com',
            name: '19majkel94',
            password: 's3cr3tp4ssw0rd',
        });
        yield user_1.User.save(defaultUser);
        return {
            defaultUser,
        };
    });
}
exports.seedDatabase = seedDatabase;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2hlbHBlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUdBLDBDQUF1QztBQUV2Qzs7UUFDQyxNQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDO1lBQy9CLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsSUFBSSxFQUFFLFlBQVk7WUFDbEIsUUFBUSxFQUFFLGdCQUFnQjtTQUMxQixDQUFDLENBQUM7UUFDSCxNQUFNLFdBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFN0IsT0FBTztZQUNOLFdBQVc7U0FDWCxDQUFDO0lBQ0gsQ0FBQztDQUFBO0FBWEQsb0NBV0MiLCJmaWxlIjoiY29yZS9oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuXG5pbXBvcnQgeyBUaGluZyB9IGZyb20gJy4vZW50aXRpZXMvdGhpbmcnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vZW50aXRpZXMvdXNlcic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWVkRGF0YWJhc2UoKSB7XG5cdGNvbnN0IGRlZmF1bHRVc2VyID0gVXNlci5jcmVhdGUoe1xuXHRcdGVtYWlsOiAndGVzdEBnaXRodWIuY29tJyxcblx0XHRuYW1lOiAnMTltYWprZWw5NCcsXG5cdFx0cGFzc3dvcmQ6ICdzM2NyM3RwNHNzdzByZCcsXG5cdH0pO1xuXHRhd2FpdCBVc2VyLnNhdmUoZGVmYXVsdFVzZXIpO1xuXG5cdHJldHVybiB7XG5cdFx0ZGVmYXVsdFVzZXIsXG5cdH07XG59XG5cbmV4cG9ydCB0eXBlIExhenk8VCBleHRlbmRzIG9iamVjdD4gPSBQcm9taXNlPFQ+IHwgVDtcbiJdfQ==
