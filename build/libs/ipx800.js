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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNyQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7NkJBQ2hCLENBQUMsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDSixDQUFDLENBQUEsQ0FBQztxQkFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQztnQkFDbEQsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxPQUFPLEtBQUksQ0FBQztDQUNaO0FBeERELCtCQXdEQyIsImZpbGUiOiJsaWJzL2lweDgwMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9pa3ViZVBsdWdpbiB9IGZyb20gJy4uL3BsdWdpbnMvcGx1Z2luJztcbmltcG9ydCB7IFRoaW5nIH0gZnJvbSAnLi4vY29yZS9lbnRpdGllcy90aGluZyc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgeyBwYXJzZVN0cmluZ1Byb21pc2UgfSBmcm9tICd4bWwyanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUFg4MDBQbHVnaW4gZXh0ZW5kcyBPaWt1YmVQbHVnaW4ge1xuXHRuYW1lID0gJ2lweDgwMCc7XG5cdHZlbmRvciA9ICdpcHg4MDAnO1xuXHRhdXRvc3RhcnQgPSB0cnVlO1xuXHRkZWZhdWx0Q29uZmlnID0ge307XG5cdG9uQXV0b2Rpc2NvdmVyKCkge1xuXHRcdC8vIHNlYXJjaCBkZXZpY2VzIG9uIGxvY2FsIG5ldHdvcmtcblx0fVxuXHRhY3Rpdml0eSgpIHtcblx0XHR0aGlzLnBsdWdpbkNvbmZpZy5kZXZpY2VzICYmXG5cdFx0XHR0aGlzLnBsdWdpbkNvbmZpZy5kZXZpY2VzLmZvckVhY2goZGV2aWNlID0+IHtcblx0XHRcdFx0Ly8gcmVhZCBkZXZpY2Ugc3RhdHVzIGZpbGVcblx0XHRcdFx0Y29uc3QgYWRkcmVzcyA9IGAke2RldmljZS5wcm90b2NvbCB8fCAnaHR0cCd9Oi8vJHtkZXZpY2UuaG9zdH06JHtkZXZpY2UucG9ydCB8fCA4MH1gO1xuXHRcdFx0XHRmZXRjaChgJHthZGRyZXNzfS9zdGF0dXMueG1sYClcblx0XHRcdFx0XHQudGhlbihyZXMgPT4gcmVzLnRleHQoKSlcblx0XHRcdFx0XHQudGhlbihib2R5ID0+IHBhcnNlU3RyaW5nUHJvbWlzZShib2R5KSlcblx0XHRcdFx0XHQudGhlbihhc3luYyBjb250ZW50ID0+IHtcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdJUFg4MDAnLCBjb250ZW50LnJlc3BvbnNlKTtcblx0XHRcdFx0XHRcdC8vIGFkZCB0aGluZyAnaXNHYXRld2F5JyBmb3IgdGhlIGRldmljZVxuXHRcdFx0XHRcdFx0Y29uc3QgYm9hcmQgPSBhd2FpdCBUaGluZy51cHNlcnQoe1xuXHRcdFx0XHRcdFx0XHRhZGRyZXNzLFxuXHRcdFx0XHRcdFx0XHR2ZW5kb3I6IHRoaXMudmVuZG9yLFxuXHRcdFx0XHRcdFx0XHRuYW1lOiBkZXZpY2UubmFtZSB8fCBgJHt0aGlzLm5hbWV9IGJvYXJkYCxcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb246IGAke3RoaXMudmVuZG9yfSBib2FyZCBAICR7YWRkcmVzc31gLFxuXHRcdFx0XHRcdFx0XHRpc0dhdGV3YXk6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRWYWx1ZTogY29udGVudC5yZXNwb25zZS52ZXJzaW9uWzBdLFxuXHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdC8vIGZvcmVhY2ggdGhpbmcgY3JlYXRlIGEgcmVjb3JkXG5cdFx0XHRcdFx0XHRPYmplY3Qua2V5cyhjb250ZW50LnJlc3BvbnNlKS5mb3JFYWNoKGVsID0+IHtcblx0XHRcdFx0XHRcdFx0ZWwuc3RhcnRzV2l0aCgnbGVkJykgJiZcblx0XHRcdFx0XHRcdFx0XHRUaGluZy51cHNlcnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWRkcmVzczogYCR7YWRkcmVzc30vJHtlbH1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmVuZG9yOiB0aGlzLnZlbmRvcixcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IChkZXZpY2UubmFtZSB8fCB0aGlzLm5hbWUpICsgYCAke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7dGhpcy52ZW5kb3J9IGJvYXJkIHZhcmlhYmxlIEAgJHthZGRyZXNzfS8ke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWU6IGNvbnRlbnQucmVzcG9uc2VbZWxdWzBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyZW50OiBib2FyZC5pZCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0ZWwuc3RhcnRzV2l0aCgnYnRuJykgJiZcblx0XHRcdFx0XHRcdFx0XHRUaGluZy51cHNlcnQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0YWRkcmVzczogYCR7YWRkcmVzc30vJHtlbH1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmVuZG9yOiB0aGlzLnZlbmRvcixcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IChkZXZpY2UubmFtZSB8fCB0aGlzLm5hbWUpICsgYCAke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbjogYCR7dGhpcy52ZW5kb3J9IGJvYXJkIHZhcmlhYmxlIEAgJHthZGRyZXNzfS8ke2VsfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50VmFsdWU6IGNvbnRlbnQucmVzcG9uc2VbZWxdWzBdLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGFyZW50OiBib2FyZC5pZCxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnRVJST1IgSU4gSVBYODAwIEFVVE9ESVNDT1ZFUicpLCBlcnI7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0fVxuXHRvblN0YXJ0KCkge31cbn1cbiJdfQ==
