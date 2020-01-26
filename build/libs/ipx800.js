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
const plugin_1 = require("../plugins/plugin");
const thing_1 = require("../core/entities/thing");
const node_fetch_1 = require("node-fetch");
const xml2js_1 = require("xml2js");
class IPX800Plugin extends plugin_1.OikubePlugin {
    constructor() {
        super(...arguments);
        this.name = 'ipx800';
        this.vendor = 'ipx800';
        this.autostart = true;
        this.defaultConfig = {};
    }
    onAutodiscover() {
    }
    activity() {
        this.pluginConfig.devices &&
            this.pluginConfig.devices.forEach(device => {
                const address = `${device.protocol || 'http'}://${device.host}:${device.port || 80}`;
                node_fetch_1.default(`${address}/status.xml`)
                    .then(res => res.text())
                    .then(body => xml2js_1.parseStringPromise(body))
                    .then((content) => __awaiter(this, void 0, void 0, function* () {
                    console.log('IPX800', content.response);
                    const board = yield thing_1.Thing.upsert({
                        address,
                        vendor: this.vendor,
                        name: device.name || `${this.name} board`,
                        description: `${this.vendor} board @ ${address}`,
                        isGateway: true,
                        currentValue: content.response.version[0],
                    });
                    Object.keys(content.response).forEach(el => {
                        el.startsWith('led') &&
                            thing_1.Thing.upsert({
                                address: `${address}/${el}`,
                                vendor: this.vendor,
                                name: (device.name || this.name) + ` ${el}`,
                                description: `${this.vendor} board variable @ ${address}/${el}`,
                                currentValue: content.response[el][0],
                                parent: board.id,
                            });
                        el.startsWith('btn') &&
                            thing_1.Thing.upsert({
                                address: `${address}/${el}`,
                                vendor: this.vendor,
                                name: (device.name || this.name) + ` ${el}`,
                                description: `${this.vendor} board variable @ ${address}/${el}`,
                                currentValue: content.response[el][0],
                                parent: board.id,
                            });
                    });
                }))
                    .catch(err => {
                    console.log('ERROR IN IPX800 AUTODISCOVER'), err;
                });
            });
    }
    onStart() { }
}
exports.default = IPX800Plugin;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LHFCQUFxQixPQUFPLElBQUksRUFBRSxFQUFFO2dDQUMvRCxZQUFZLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ3JDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTs2QkFDaEIsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNKLENBQUMsQ0FBQSxDQUFDO3FCQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLEVBQUUsR0FBRyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE9BQU8sS0FBSSxDQUFDO0NBQ1o7QUF4REQsK0JBd0RDIiwiZmlsZSI6ImxpYnMvaXB4ODAwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2lrdWJlUGx1Z2luIH0gZnJvbSAnLi4vcGx1Z2lucy9wbHVnaW4nO1xuaW1wb3J0IHsgVGhpbmcgfSBmcm9tICcuLi9jb3JlL2VudGl0aWVzL3RoaW5nJztcbmltcG9ydCBmZXRjaCBmcm9tICdub2RlLWZldGNoJztcbmltcG9ydCB7IHBhcnNlU3RyaW5nUHJvbWlzZSB9IGZyb20gJ3htbDJqcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQWDgwMFBsdWdpbiBleHRlbmRzIE9pa3ViZVBsdWdpbiB7XG5cdG5hbWUgPSAnaXB4ODAwJztcblx0dmVuZG9yID0gJ2lweDgwMCc7XG5cdGF1dG9zdGFydCA9IHRydWU7XG5cdGRlZmF1bHRDb25maWcgPSB7fTtcblx0b25BdXRvZGlzY292ZXIoKSB7XG5cdFx0Ly8gc2VhcmNoIGRldmljZXMgb24gbG9jYWwgbmV0d29ya1xuXHR9XG5cdGFjdGl2aXR5KCkge1xuXHRcdHRoaXMucGx1Z2luQ29uZmlnLmRldmljZXMgJiZcblx0XHRcdHRoaXMucGx1Z2luQ29uZmlnLmRldmljZXMuZm9yRWFjaChkZXZpY2UgPT4ge1xuXHRcdFx0XHQvLyByZWFkIGRldmljZSBzdGF0dXMgZmlsZVxuXHRcdFx0XHRjb25zdCBhZGRyZXNzID0gYCR7ZGV2aWNlLnByb3RvY29sIHx8ICdodHRwJ306Ly8ke2RldmljZS5ob3N0fToke2RldmljZS5wb3J0IHx8IDgwfWA7XG5cdFx0XHRcdGZldGNoKGAke2FkZHJlc3N9L3N0YXR1cy54bWxgKVxuXHRcdFx0XHRcdC50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuXHRcdFx0XHRcdC50aGVuKGJvZHkgPT4gcGFyc2VTdHJpbmdQcm9taXNlKGJvZHkpKVxuXHRcdFx0XHRcdC50aGVuKGFzeW5jIGNvbnRlbnQgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0lQWDgwMCcsIGNvbnRlbnQucmVzcG9uc2UpO1xuXHRcdFx0XHRcdFx0Ly8gYWRkIHRoaW5nICdpc0dhdGV3YXknIGZvciB0aGUgZGV2aWNlXG5cdFx0XHRcdFx0XHRjb25zdCBib2FyZCA9IGF3YWl0IFRoaW5nLnVwc2VydCh7XG5cdFx0XHRcdFx0XHRcdGFkZHJlc3MsXG5cdFx0XHRcdFx0XHRcdHZlbmRvcjogdGhpcy52ZW5kb3IsXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGRldmljZS5uYW1lIHx8IGAke3RoaXMubmFtZX0gYm9hcmRgLFxuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7dGhpcy52ZW5kb3J9IGJvYXJkIEAgJHthZGRyZXNzfWAsXG5cdFx0XHRcdFx0XHRcdGlzR2F0ZXdheTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFZhbHVlOiBjb250ZW50LnJlc3BvbnNlLnZlcnNpb25bMF0sXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0Ly8gZm9yZWFjaCB0aGluZyBjcmVhdGUgYSByZWNvcmRcblx0XHRcdFx0XHRcdE9iamVjdC5rZXlzKGNvbnRlbnQucmVzcG9uc2UpLmZvckVhY2goZWwgPT4ge1xuXHRcdFx0XHRcdFx0XHRlbC5zdGFydHNXaXRoKCdsZWQnKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFRoaW5nLnVwc2VydCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhZGRyZXNzOiBgJHthZGRyZXNzfS8ke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHR2ZW5kb3I6IHRoaXMudmVuZG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogKGRldmljZS5uYW1lIHx8IHRoaXMubmFtZSkgKyBgICR7ZWx9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBgJHt0aGlzLnZlbmRvcn0gYm9hcmQgdmFyaWFibGUgQCAke2FkZHJlc3N9LyR7ZWx9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZTogY29udGVudC5yZXNwb25zZVtlbF1bMF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJlbnQ6IGJvYXJkLmlkLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRlbC5zdGFydHNXaXRoKCdidG4nKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFRoaW5nLnVwc2VydCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRhZGRyZXNzOiBgJHthZGRyZXNzfS8ke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHR2ZW5kb3I6IHRoaXMudmVuZG9yLFxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogKGRldmljZS5uYW1lIHx8IHRoaXMubmFtZSkgKyBgICR7ZWx9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uOiBgJHt0aGlzLnZlbmRvcn0gYm9hcmQgdmFyaWFibGUgQCAke2FkZHJlc3N9LyR7ZWx9YCxcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZTogY29udGVudC5yZXNwb25zZVtlbF1bMF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRwYXJlbnQ6IGJvYXJkLmlkLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdFUlJPUiBJTiBJUFg4MDAgQVVUT0RJU0NPVkVSJyksIGVycjtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHR9XG5cdG9uU3RhcnQoKSB7fVxufVxuIl19
