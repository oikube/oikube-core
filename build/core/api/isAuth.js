"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const config_1 = require("../../defs/config");
exports.isAuth = ({ context }, next) => {
    const authorization = context.req.headers['authorization'];
    if (!authorization) {
        throw new Error('Not authenticated');
    }
    try {
        const token = authorization.split(' ')[1];
        const payload = jsonwebtoken_1.verify(token, config_1.default.JWT_SECRET);
        console.log(payload);
        context.payload = payload;
    }
    catch (err) {
        console.log(err);
        throw new Error('Not authenticated');
    }
    return next();
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2FwaS9pc0F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwrQ0FBc0M7QUFFdEMsOENBQXFDO0FBR3hCLFFBQUEsTUFBTSxHQUE0QixDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7SUFDcEUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFM0QsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7S0FDckM7SUFFRCxJQUFJO1FBQ0gsTUFBTSxLQUFLLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLE9BQU8sR0FBRyxxQkFBTSxDQUFDLEtBQUssRUFBRSxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFjLENBQUM7S0FDakM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUNmLENBQUMsQ0FBQyIsImZpbGUiOiJjb3JlL2FwaS9pc0F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNaWRkbGV3YXJlRm4gfSBmcm9tICd0eXBlLWdyYXBocWwnO1xuaW1wb3J0IHsgdmVyaWZ5IH0gZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IE15Q29udGV4dCB9IGZyb20gJy4vTXlDb250ZXh0JztcbmltcG9ydCBjb25mIGZyb20gJy4uLy4uL2RlZnMvY29uZmlnJztcbi8vZm9ybWF0IGxpa2UgYmVhcmVyIDIxMzIxbjJibWJialxuXG5leHBvcnQgY29uc3QgaXNBdXRoOiBNaWRkbGV3YXJlRm48TXlDb250ZXh0PiA9ICh7IGNvbnRleHQgfSwgbmV4dCkgPT4ge1xuXHRjb25zdCBhdXRob3JpemF0aW9uID0gY29udGV4dC5yZXEuaGVhZGVyc1snYXV0aG9yaXphdGlvbiddO1xuXG5cdGlmICghYXV0aG9yaXphdGlvbikge1xuXHRcdHRocm93IG5ldyBFcnJvcignTm90IGF1dGhlbnRpY2F0ZWQnKTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNwbGl0KCcgJylbMV07XG5cdFx0Y29uc3QgcGF5bG9hZCA9IHZlcmlmeSh0b2tlbiwgY29uZi5KV1RfU0VDUkVUKTtcblx0XHRjb25zb2xlLmxvZyhwYXlsb2FkKTtcblx0XHRjb250ZXh0LnBheWxvYWQgPSBwYXlsb2FkIGFzIGFueTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ05vdCBhdXRoZW50aWNhdGVkJyk7XG5cdH1cblx0cmV0dXJuIG5leHQoKTtcbn07XG4iXX0=
