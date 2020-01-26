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
const config_1 = require("../defs/config");
class OikubePlugin {
    constructor() {
        this.listenOnChannels = '';
        this.interval = 10000;
        this.pluginConfig = { devices: [] };
    }
    _register() {
        this.pluginConfig = config_1.config[this.name] || this.defaultConfig;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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OiJwbHVnaW5zL3BsdWdpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsdWdpbiB9IGZyb20gJy4uL2NvcmUvZW50aXRpZXMvcGx1Z2luJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2RlZnMvY29uZmlnJztcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBPaWt1YmVQbHVnaW4ge1xuXHRyZWFkb25seSBsaXN0ZW5PbkNoYW5uZWxzOiBzdHJpbmcgPSAnJztcblx0cmVhZG9ubHkgbmFtZTogc3RyaW5nO1xuXHRyZWFkb25seSB2ZW5kb3I6IHN0cmluZztcblx0cmVhZG9ubHkgYXV0b1N0YXJ0OiBib29sZWFuO1xuXHRyZWFkb25seSBkZWZhdWx0Q29uZmlnOiBvYmplY3Q7XG5cdGlzQWN0aXZlOiBib29sZWFuO1xuXHRhY3Rpdml0eUxvb3A6IE5vZGVKUy5UaW1lcjtcblx0aW50ZXJ2YWw6IG51bWJlciA9IDEwMDAwO1xuXHRwcml2YXRlIHBsdWdpbk1vZGVsOiBQbHVnaW47XG5cdHByb3RlY3RlZCBwbHVnaW5Db25maWcgPSB7IGRldmljZXM6IFtdIH07XG5cdF9yZWdpc3RlcigpIHtcblx0XHQvLyBmaW5kIGNvbmZpZyBvciB1c2UgZGVmYXVsdFxuXHRcdHRoaXMucGx1Z2luQ29uZmlnID0gY29uZmlnW3RoaXMubmFtZV0gfHwgdGhpcy5kZWZhdWx0Q29uZmlnO1xuXG5cdFx0Ly8gY2hlY2sgd2V0aGVyIHRoZSBwbHVnaW4gaXMgb24gZGIgYW5kIGFkZCBpdCBpZiBuZWNlc3Nhcnlcblx0XHRQbHVnaW4uZmluZE9uZSh7IG5hbWU6IHRoaXMubmFtZSB9KS50aGVuKGFzeW5jIGZvdW5kID0+IHtcblx0XHRcdHRoaXMucGx1Z2luTW9kZWwgPSBmb3VuZFxuXHRcdFx0XHQ/IGZvdW5kXG5cdFx0XHRcdDogYXdhaXQgUGx1Z2luLmNyZWF0ZSh7XG5cdFx0XHRcdFx0XHRuYW1lOiB0aGlzLm5hbWUsXG5cdFx0XHRcdFx0XHR2ZW5kb3I6IHRoaXMudmVuZG9yLFxuXHRcdFx0XHRcdFx0YXV0b1N0YXJ0OiB0aGlzLmF1dG9TdGFydCxcblx0XHRcdFx0XHRcdGxpc3Rlbk9uQ2hhbm5lbHM6IHRoaXMubGlzdGVuT25DaGFubmVscyxcblx0XHRcdFx0ICB9KS5zYXZlKCk7XG5cdFx0XHRpZiAodGhpcy5wbHVnaW5Nb2RlbC5hdXRvU3RhcnQpIHRoaXMuX3N0YXJ0KCk7XG5cdFx0fSk7XG5cdH1cblx0X2RlUmVnaXN0ZXIoKSB7XG5cdFx0Ly8gcmVtb3ZlIGEgcGx1Z2luXG5cdFx0dGhpcy5fc3RvcCgpO1xuXHRcdFBsdWdpbi5kZWxldGUodGhpcy5wbHVnaW5Nb2RlbC5pZCk7XG5cdH1cblx0cHJpdmF0ZSBfc3RhcnQoKSB7XG5cdFx0dGhpcy5pc0FjdGl2ZSA9IHRydWU7XG5cdFx0dGhpcy5wbHVnaW5Nb2RlbC5zYXZlKCk7XG5cdFx0Y29uc29sZS5sb2coJ1NUQVJUSU5HIFBMVUdJTicsIHRoaXMubmFtZSk7XG5cdFx0dGhpcy5wbHVnaW5Nb2RlbC5saXN0ZW5PbkNoYW5uZWxzLnNwbGl0KCcsJykuZm9yRWFjaChjID0+IHtcblx0XHRcdC8vIGxpc3RlbiB0byBjaGFubmVsXG5cdFx0XHRjb25zb2xlLmxvZygnY2hhbm5lbCcsIGMpO1xuXHRcdH0pO1xuXHRcdHRoaXMub25TdGFydCAmJiB0aGlzLm9uU3RhcnQoKTtcblx0XHR0aGlzLm9uQXV0b2Rpc2NvdmVyICYmIHRoaXMub25BdXRvZGlzY292ZXIoKTtcblx0XHR0aGlzLmFjdGl2aXR5TG9vcCA9IHNldEludGVydmFsKHRoaXMuYWN0aXZpdHkuYmluZCh0aGlzKSwgdGhpcy5pbnRlcnZhbCk7XG5cdFx0dGhpcy5pc0FjdGl2ZSA9IHRydWU7XG5cdH1cblx0b25TdGFydCgpOiB2b2lkIHt9XG5cdG9uQXV0b2Rpc2NvdmVyKCk6IHZvaWQge31cblx0YWN0aXZpdHkoKSB7fVxuXHRfc3RvcCgpIHtcblx0XHR0aGlzLmlzQWN0aXZlID0gZmFsc2U7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmFjdGl2aXR5TG9vcCk7XG5cdFx0dGhpcy5wbHVnaW5Nb2RlbC5saXN0ZW5PbkNoYW5uZWxzLnNwbGl0KCcsJykuZm9yRWFjaChjID0+IHtcblx0XHRcdC8vIGxpc3RlbiB0byBjaGFubmVsXG5cdFx0XHRjb25zb2xlLmxvZygnY2hhbm5lbCcsIGMpO1xuXHRcdH0pO1xuXHR9XG59XG4iXX0=
