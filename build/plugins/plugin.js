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
const plugin_1 = require("../core/entities/plugin");
const config = require('../../data/config.json');
class OikubePlugin {
    constructor() {
        this.listenOnChannels = '';
        this.interval = 10000;
        this.pluginConfig = { devices: [] };
    }
    _register() {
        this.pluginConfig = config[this.name] || this.defaultConfig;
        plugin_1.Plugin.findOne({ name: this.name }).then((found) => __awaiter(this, void 0, void 0, function* () {
            this.pluginModel = found
                ? found
                : yield plugin_1.Plugin.create({
                    name: this.name,
                    vendor: this.vendor,
                    autoStart: this.autoStart,
                    listenOnChannels: this.listenOnChannels,
                }).save();
            if (this.pluginModel.autoStart)
                this._start();
        }));
    }
    _deRegister() {
        this._stop();
        plugin_1.Plugin.delete(this.pluginModel.id);
    }
    _start() {
        this.isActive = true;
        this.pluginModel.save();
        console.log('STARTING PLUGIN', this.name);
        this.pluginModel.listenOnChannels.split(',').forEach(c => {
            console.log('channel', c);
        });
        this.onStart && this.onStart();
        this.onAutodiscover && this.onAutodiscover();
        this.activityLoop = setInterval(this.activity.bind(this), this.interval);
        this.isActive = true;
    }
    onStart() { }
    onAutodiscover() { }
    activity() { }
    _stop() {
        this.isActive = false;
        clearInterval(this.activityLoop);
        this.pluginModel.listenOnChannels.split(',').forEach(c => {
            console.log('channel', c);
        });
    }
}
exports.OikubePlugin = OikubePlugin;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wbHVnaW5zL3BsdWdpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsb0RBQWlEO0FBQ2pELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ2pEO0lBQUE7UUFDVSxxQkFBZ0IsR0FBVyxFQUFFLENBQUM7UUFPdkMsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUVmLGlCQUFZLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7SUErQzFDLENBQUM7SUE5Q0EsU0FBUztRQUVSLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRzVELGVBQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQU0sS0FBSyxFQUFDLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLO2dCQUN2QixDQUFDLENBQUMsS0FBSztnQkFDUCxDQUFDLENBQUMsTUFBTSxlQUFNLENBQUMsTUFBTSxDQUFDO29CQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO29CQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ3pCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7aUJBQ3RDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNiLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTO2dCQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMvQyxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELFdBQVc7UUFFVixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNPLE1BQU07UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBQ0QsT0FBTyxLQUFVLENBQUM7SUFDbEIsY0FBYyxLQUFVLENBQUM7SUFDekIsUUFBUSxLQUFJLENBQUM7SUFDYixLQUFLO1FBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0Q7QUF6REQsb0NBeURDIiwiZmlsZSI6InBsdWdpbnMvcGx1Z2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGx1Z2luIH0gZnJvbSAnLi4vY29yZS9lbnRpdGllcy9wbHVnaW4nO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vLi4vZGF0YS9jb25maWcuanNvbicpO1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE9pa3ViZVBsdWdpbiB7XG5cdHJlYWRvbmx5IGxpc3Rlbk9uQ2hhbm5lbHM6IHN0cmluZyA9ICcnO1xuXHRyZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHZlbmRvcjogc3RyaW5nO1xuXHRyZWFkb25seSBhdXRvU3RhcnQ6IGJvb2xlYW47XG5cdHJlYWRvbmx5IGRlZmF1bHRDb25maWc6IG9iamVjdDtcblx0aXNBY3RpdmU6IGJvb2xlYW47XG5cdGFjdGl2aXR5TG9vcDogTm9kZUpTLlRpbWVyO1xuXHRpbnRlcnZhbDogbnVtYmVyID0gMTAwMDA7XG5cdHByaXZhdGUgcGx1Z2luTW9kZWw6IFBsdWdpbjtcblx0cHJvdGVjdGVkIHBsdWdpbkNvbmZpZyA9IHsgZGV2aWNlczogW10gfTtcblx0X3JlZ2lzdGVyKCkge1xuXHRcdC8vIGZpbmQgY29uZmlnIG9yIHVzZSBkZWZhdWx0XG5cdFx0dGhpcy5wbHVnaW5Db25maWcgPSBjb25maWdbdGhpcy5uYW1lXSB8fCB0aGlzLmRlZmF1bHRDb25maWc7XG5cblx0XHQvLyBjaGVjayB3ZXRoZXIgdGhlIHBsdWdpbiBpcyBvbiBkYiBhbmQgYWRkIGl0IGlmIG5lY2Vzc2FyeVxuXHRcdFBsdWdpbi5maW5kT25lKHsgbmFtZTogdGhpcy5uYW1lIH0pLnRoZW4oYXN5bmMgZm91bmQgPT4ge1xuXHRcdFx0dGhpcy5wbHVnaW5Nb2RlbCA9IGZvdW5kXG5cdFx0XHRcdD8gZm91bmRcblx0XHRcdFx0OiBhd2FpdCBQbHVnaW4uY3JlYXRlKHtcblx0XHRcdFx0XHRcdG5hbWU6IHRoaXMubmFtZSxcblx0XHRcdFx0XHRcdHZlbmRvcjogdGhpcy52ZW5kb3IsXG5cdFx0XHRcdFx0XHRhdXRvU3RhcnQ6IHRoaXMuYXV0b1N0YXJ0LFxuXHRcdFx0XHRcdFx0bGlzdGVuT25DaGFubmVsczogdGhpcy5saXN0ZW5PbkNoYW5uZWxzLFxuXHRcdFx0XHQgIH0pLnNhdmUoKTtcblx0XHRcdGlmICh0aGlzLnBsdWdpbk1vZGVsLmF1dG9TdGFydCkgdGhpcy5fc3RhcnQoKTtcblx0XHR9KTtcblx0fVxuXHRfZGVSZWdpc3RlcigpIHtcblx0XHQvLyByZW1vdmUgYSBwbHVnaW5cblx0XHR0aGlzLl9zdG9wKCk7XG5cdFx0UGx1Z2luLmRlbGV0ZSh0aGlzLnBsdWdpbk1vZGVsLmlkKTtcblx0fVxuXHRwcml2YXRlIF9zdGFydCgpIHtcblx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcblx0XHR0aGlzLnBsdWdpbk1vZGVsLnNhdmUoKTtcblx0XHRjb25zb2xlLmxvZygnU1RBUlRJTkcgUExVR0lOJywgdGhpcy5uYW1lKTtcblx0XHR0aGlzLnBsdWdpbk1vZGVsLmxpc3Rlbk9uQ2hhbm5lbHMuc3BsaXQoJywnKS5mb3JFYWNoKGMgPT4ge1xuXHRcdFx0Ly8gbGlzdGVuIHRvIGNoYW5uZWxcblx0XHRcdGNvbnNvbGUubG9nKCdjaGFubmVsJywgYyk7XG5cdFx0fSk7XG5cdFx0dGhpcy5vblN0YXJ0ICYmIHRoaXMub25TdGFydCgpO1xuXHRcdHRoaXMub25BdXRvZGlzY292ZXIgJiYgdGhpcy5vbkF1dG9kaXNjb3ZlcigpO1xuXHRcdHRoaXMuYWN0aXZpdHlMb29wID0gc2V0SW50ZXJ2YWwodGhpcy5hY3Rpdml0eS5iaW5kKHRoaXMpLCB0aGlzLmludGVydmFsKTtcblx0XHR0aGlzLmlzQWN0aXZlID0gdHJ1ZTtcblx0fVxuXHRvblN0YXJ0KCk6IHZvaWQge31cblx0b25BdXRvZGlzY292ZXIoKTogdm9pZCB7fVxuXHRhY3Rpdml0eSgpIHt9XG5cdF9zdG9wKCkge1xuXHRcdHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcblx0XHRjbGVhckludGVydmFsKHRoaXMuYWN0aXZpdHlMb29wKTtcblx0XHR0aGlzLnBsdWdpbk1vZGVsLmxpc3Rlbk9uQ2hhbm5lbHMuc3BsaXQoJywnKS5mb3JFYWNoKGMgPT4ge1xuXHRcdFx0Ly8gbGlzdGVuIHRvIGNoYW5uZWxcblx0XHRcdGNvbnNvbGUubG9nKCdjaGFubmVsJywgYyk7XG5cdFx0fSk7XG5cdH1cbn1cbiJdfQ==
