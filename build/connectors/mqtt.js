"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mqtt_1 = require("mqtt");
const config_1 = require("../defs/config");
class Broker {
    connect() {
        this.client = mqtt_1.connect(config_1.default.MQTT);
        this.client.on('message', function (topic, message) {
            console.log(topic, message.toString());
        });
    }
}
exports.default = Broker;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0b3JzL21xdHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBMkM7QUFDM0MsMkNBQWtDO0FBRWxDO0lBRUMsT0FBTztRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBTyxDQUFDLGdCQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFVBQVMsS0FBSyxFQUFFLE9BQU87WUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUFURCx5QkFTQyIsImZpbGUiOiJjb25uZWN0b3JzL21xdHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNcXR0Q2xpZW50LCBjb25uZWN0IH0gZnJvbSAnbXF0dCc7XG5pbXBvcnQgY29uZiBmcm9tICcuLi9kZWZzL2NvbmZpZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb2tlciB7XG5cdGNsaWVudDogTXF0dENsaWVudDtcblx0Y29ubmVjdCgpIHtcblx0XHR0aGlzLmNsaWVudCA9IGNvbm5lY3QoY29uZi5NUVRUKTtcblx0XHR0aGlzLmNsaWVudC5vbignbWVzc2FnZScsIGZ1bmN0aW9uKHRvcGljLCBtZXNzYWdlKSB7XG5cdFx0XHQvLyBtZXNzYWdlIGlzIEJ1ZmZlclxuXHRcdFx0Y29uc29sZS5sb2codG9waWMsIG1lc3NhZ2UudG9TdHJpbmcoKSk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
