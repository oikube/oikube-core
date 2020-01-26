"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugin_1 = require("../plugins/plugin");
const thing_1 = require("../core/entities/thing");
class HelloWorldPlugin extends plugin_1.OikubePlugin {
    constructor() {
        super(...arguments);
        this.name = 'helloworld';
        this.vendor = 'oikube';
        this.autostart = true;
    }
    onStart() {
        thing_1.Thing.findOne({ address: 'helloworld://demo' }).then(found => {
            console.log('FOUND', found);
            found ||
                thing_1.Thing.create({
                    address: 'helloworld://demo',
                    vendor: 'helloworld',
                    name: 'Helloworld demo',
                    description: 'A base helloword thing added by a plugin',
                }).save();
        });
    }
}
exports.default = HelloWorldPlugin;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9saWJzL2hlbGxvd29ybGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBaUQ7QUFDakQsa0RBQStDO0FBRS9DLHNCQUFzQyxTQUFRLHFCQUFZO0lBQTFEOztRQUNDLFNBQUksR0FBRyxZQUFZLENBQUM7UUFDcEIsV0FBTSxHQUFHLFFBQVEsQ0FBQztRQUNsQixjQUFTLEdBQUcsSUFBSSxDQUFDO0lBYWxCLENBQUM7SUFaQSxPQUFPO1FBQ04sYUFBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzVCLEtBQUs7Z0JBQ0osYUFBSyxDQUFDLE1BQU0sQ0FBQztvQkFDWixPQUFPLEVBQUUsbUJBQW1CO29CQUM1QixNQUFNLEVBQUUsWUFBWTtvQkFDcEIsSUFBSSxFQUFFLGlCQUFpQjtvQkFDdkIsV0FBVyxFQUFFLDBDQUEwQztpQkFDdkQsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUFoQkQsbUNBZ0JDIiwiZmlsZSI6ImxpYnMvaGVsbG93b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9pa3ViZVBsdWdpbiB9IGZyb20gJy4uL3BsdWdpbnMvcGx1Z2luJztcbmltcG9ydCB7IFRoaW5nIH0gZnJvbSAnLi4vY29yZS9lbnRpdGllcy90aGluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvV29ybGRQbHVnaW4gZXh0ZW5kcyBPaWt1YmVQbHVnaW4ge1xuXHRuYW1lID0gJ2hlbGxvd29ybGQnO1xuXHR2ZW5kb3IgPSAnb2lrdWJlJztcblx0YXV0b3N0YXJ0ID0gdHJ1ZTtcblx0b25TdGFydCgpIHtcblx0XHRUaGluZy5maW5kT25lKHsgYWRkcmVzczogJ2hlbGxvd29ybGQ6Ly9kZW1vJyB9KS50aGVuKGZvdW5kID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdGT1VORCcsIGZvdW5kKTtcblx0XHRcdGZvdW5kIHx8XG5cdFx0XHRcdFRoaW5nLmNyZWF0ZSh7XG5cdFx0XHRcdFx0YWRkcmVzczogJ2hlbGxvd29ybGQ6Ly9kZW1vJyxcblx0XHRcdFx0XHR2ZW5kb3I6ICdoZWxsb3dvcmxkJyxcblx0XHRcdFx0XHRuYW1lOiAnSGVsbG93b3JsZCBkZW1vJyxcblx0XHRcdFx0XHRkZXNjcmlwdGlvbjogJ0EgYmFzZSBoZWxsb3dvcmQgdGhpbmcgYWRkZWQgYnkgYSBwbHVnaW4nLFxuXHRcdFx0XHR9KS5zYXZlKCk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
