"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Consul = require("consul");
const config_1 = require("../defs/config");
const consulClient = Consul({
    host: config_1.default.CONSUL,
    promisify: true,
});
exports.default = consulClient;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0b3JzL2NvbnN1bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFrQztBQUNsQywyQ0FBa0M7QUFFbEMsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzNCLElBQUksRUFBRSxnQkFBSSxDQUFDLE1BQU07SUFDakIsU0FBUyxFQUFFLElBQUk7Q0FDZixDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFZLENBQUMiLCJmaWxlIjoiY29ubmVjdG9ycy9jb25zdWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3VsID0gcmVxdWlyZSgnY29uc3VsJyk7XG5pbXBvcnQgY29uZiBmcm9tICcuLi9kZWZzL2NvbmZpZyc7XG5cbmNvbnN0IGNvbnN1bENsaWVudCA9IENvbnN1bCh7XG5cdGhvc3Q6IGNvbmYuQ09OU1VMLFxuXHRwcm9taXNpZnk6IHRydWUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29uc3VsQ2xpZW50O1xuIl19