"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = require("amqplib");
require("reflect-metadata");
const typedi_1 = require("typedi");
const Topics = {
    system: {
        log: {
            warn: '',
            info: '',
            error: '',
            debug: '',
        },
        services: {
            health: 'Some service started or stopped',
        },
        users: {
            presence: 'some user logged in or out',
        },
    },
    thing: {
        $id: {
            value: 'A device changed its value',
        },
    },
    areas: {
        $name: {
            created: 'A area was created',
        },
    },
    conditions: {
        $name: {
            state: 'A condition state changed',
        },
    },
    command: {
        $name: {
            fire: 'Fire a command',
        },
    },
};
let QueueManager = class QueueManager {
    init(server) {
        return this.connect(server).then(() => {
            this.initTopics();
        });
    }
    connect(server) {
        return amqplib_1.connect(server).then(conn => {
            return conn.createChannel().then(ch => (this.channel = ch));
        });
    }
    createQueue(name) {
        return this.channel && this.channel.assertQueue(name);
    }
    enqueue(queue, message) {
        return this.channel && this.channel.sendToQueue(queue, Buffer.from(message));
    }
    onQueueMessage(queue, worker) {
        return this.channel.consume(queue, worker
            ? worker
            : (msg) => {
                console.log(msg.content.toString());
                this.channel.ack(msg);
            });
    }
    createTopic(exchangeName) {
        this.channel.assertExchange(exchangeName, 'topic', {
            durable: false,
        });
    }
    publish(exchangeName, topic, msg) {
        this.channel.publish(exchangeName, topic, Buffer.from(JSON.stringify(msg)));
    }
    subscribe(topic, consumer) {
        this.channel.consume(topic, (msg) => {
            let data = msg.content.toJSON();
            return consumer(data);
        });
    }
    initTopics() {
        Object.keys(Topics).forEach((t) => {
            Object.keys(Topics[t]).forEach((s) => {
                !s.startsWith('$') &&
                    Object.keys(t[s]).forEach((u) => {
                        this.createTopic([t, s, u].join('.'));
                    });
            });
        });
    }
};
QueueManager = __decorate([
    typedi_1.Service()
], QueueManager);
exports.QueueManager = QueueManager;
function OikubeQueueService({ getConfig, createHook }) {
    const queueManager = typedi_1.Container.get(QueueManager);
    queueManager.init(getConfig('RABBITMQ'));
    createHook(OikubeQueueService.AMPQ_INIT);
}
exports.OikubeQueueService = OikubeQueueService;
OikubeQueueService.AMPQ_INIT = `amqp/init`;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb25uZWN0b3JzL2FtcXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBMkQ7QUFDM0QsNEJBQTBCO0FBQzFCLG1DQUE0QztBQUU1QyxNQUFNLE1BQU0sR0FBRztJQUNkLE1BQU0sRUFBRTtRQUNQLEdBQUcsRUFBRTtZQUNKLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLEVBQUU7WUFDUixLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1NBQ1Q7UUFDRCxRQUFRLEVBQUU7WUFDVCxNQUFNLEVBQUUsaUNBQWlDO1NBQ3pDO1FBQ0QsS0FBSyxFQUFFO1lBQ04sUUFBUSxFQUFFLDRCQUE0QjtTQUN0QztLQUNEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sR0FBRyxFQUFFO1lBQ0osS0FBSyxFQUFFLDRCQUE0QjtTQUNuQztLQUNEO0lBQ0QsS0FBSyxFQUFFO1FBQ04sS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFLG9CQUFvQjtTQUM3QjtLQUNEO0lBQ0QsVUFBVSxFQUFFO1FBQ1gsS0FBSyxFQUFFO1lBQ04sS0FBSyxFQUFFLDJCQUEyQjtTQUNsQztLQUNEO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsS0FBSyxFQUFFO1lBQ04sSUFBSSxFQUFFLGdCQUFnQjtTQUN0QjtLQUNEO0NBQ0QsQ0FBQztBQUdGLElBQWEsWUFBWSxHQUF6QjtJQUVDLElBQUksQ0FBQyxNQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNyQixPQUFPLGlCQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLElB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O0lBQ2pELFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDekMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLENBQUM7QUFKRCxnREFJQztBQUNELGtCQUFrQixDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMiLCJmaWxlIjoiY29ubmVjdG9ycy9hbXFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbm5lbCwgY29ubmVjdCwgQ29uc3VtZU1lc3NhZ2UgfSBmcm9tICdhbXFwbGliJztcbmltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBDb250YWluZXIsIFNlcnZpY2UgfSBmcm9tICd0eXBlZGknO1xuXG5jb25zdCBUb3BpY3MgPSB7XG5cdHN5c3RlbToge1xuXHRcdGxvZzoge1xuXHRcdFx0d2FybjogJycsXG5cdFx0XHRpbmZvOiAnJyxcblx0XHRcdGVycm9yOiAnJyxcblx0XHRcdGRlYnVnOiAnJyxcblx0XHR9LFxuXHRcdHNlcnZpY2VzOiB7XG5cdFx0XHRoZWFsdGg6ICdTb21lIHNlcnZpY2Ugc3RhcnRlZCBvciBzdG9wcGVkJyxcblx0XHR9LFxuXHRcdHVzZXJzOiB7XG5cdFx0XHRwcmVzZW5jZTogJ3NvbWUgdXNlciBsb2dnZWQgaW4gb3Igb3V0Jyxcblx0XHR9LFxuXHR9LFxuXHR0aGluZzoge1xuXHRcdCRpZDoge1xuXHRcdFx0dmFsdWU6ICdBIGRldmljZSBjaGFuZ2VkIGl0cyB2YWx1ZScsXG5cdFx0fSxcblx0fSxcblx0YXJlYXM6IHtcblx0XHQkbmFtZToge1xuXHRcdFx0Y3JlYXRlZDogJ0EgYXJlYSB3YXMgY3JlYXRlZCcsXG5cdFx0fSxcblx0fSxcblx0Y29uZGl0aW9uczoge1xuXHRcdCRuYW1lOiB7XG5cdFx0XHRzdGF0ZTogJ0EgY29uZGl0aW9uIHN0YXRlIGNoYW5nZWQnLFxuXHRcdH0sXG5cdH0sXG5cdGNvbW1hbmQ6IHtcblx0XHQkbmFtZToge1xuXHRcdFx0ZmlyZTogJ0ZpcmUgYSBjb21tYW5kJyxcblx0XHR9LFxuXHR9LFxufTtcblxuQFNlcnZpY2UoKVxuZXhwb3J0IGNsYXNzIFF1ZXVlTWFuYWdlciB7XG5cdGNoYW5uZWw6IENoYW5uZWw7XG5cdGluaXQoc2VydmVyOiBzdHJpbmcpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25uZWN0KHNlcnZlcikudGhlbigoKSA9PiB7XG5cdFx0XHR0aGlzLmluaXRUb3BpY3MoKTtcblx0XHR9KTtcblx0fVxuXHRjb25uZWN0KHNlcnZlcjogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIGNvbm5lY3Qoc2VydmVyKS50aGVuKGNvbm4gPT4ge1xuXHRcdFx0cmV0dXJuIGNvbm4uY3JlYXRlQ2hhbm5lbCgpLnRoZW4oY2ggPT4gKHRoaXMuY2hhbm5lbCA9IGNoKSk7XG5cdFx0fSk7XG5cdH1cblx0Y3JlYXRlUXVldWUobmFtZTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hhbm5lbCAmJiB0aGlzLmNoYW5uZWwuYXNzZXJ0UXVldWUobmFtZSk7XG5cdH1cblx0ZW5xdWV1ZShxdWV1ZTogc3RyaW5nLCBtZXNzYWdlOiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGFubmVsICYmIHRoaXMuY2hhbm5lbC5zZW5kVG9RdWV1ZShxdWV1ZSwgQnVmZmVyLmZyb20obWVzc2FnZSkpO1xuXHR9XG5cdG9uUXVldWVNZXNzYWdlKHF1ZXVlOiBzdHJpbmcsIHdvcmtlcj86IChtc2c6IENvbnN1bWVNZXNzYWdlIHwgbnVsbCkgPT4gYW55IHwgbnVsbCkge1xuXHRcdHJldHVybiB0aGlzLmNoYW5uZWwuY29uc3VtZShcblx0XHRcdHF1ZXVlLFxuXHRcdFx0d29ya2VyXG5cdFx0XHRcdD8gd29ya2VyXG5cdFx0XHRcdDogKG1zZzogQ29uc3VtZU1lc3NhZ2UpID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKG1zZy5jb250ZW50LnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0dGhpcy5jaGFubmVsLmFjayhtc2cpO1xuXHRcdFx0XHQgIH0sXG5cdFx0KTtcblx0fVxuXHRjcmVhdGVUb3BpYyhleGNoYW5nZU5hbWU6IHN0cmluZykge1xuXHRcdHRoaXMuY2hhbm5lbC5hc3NlcnRFeGNoYW5nZShleGNoYW5nZU5hbWUsICd0b3BpYycsIHtcblx0XHRcdGR1cmFibGU6IGZhbHNlLFxuXHRcdH0pO1xuXHR9XG5cdHB1Ymxpc2goZXhjaGFuZ2VOYW1lOiBzdHJpbmcsIHRvcGljOiBzdHJpbmcsIG1zZzogYW55KSB7XG5cdFx0dGhpcy5jaGFubmVsLnB1Ymxpc2goZXhjaGFuZ2VOYW1lLCB0b3BpYywgQnVmZmVyLmZyb20oSlNPTi5zdHJpbmdpZnkobXNnKSkpO1xuXHR9XG5cdHN1YnNjcmliZSh0b3BpYzogc3RyaW5nLCBjb25zdW1lcjogKG1zZzogYW55KSA9PiBhbnkpIHtcblx0XHR0aGlzLmNoYW5uZWwuY29uc3VtZSh0b3BpYywgKG1zZzogQ29uc3VtZU1lc3NhZ2UpID0+IHtcblx0XHRcdGxldCBkYXRhID0gbXNnLmNvbnRlbnQudG9KU09OKCk7XG5cdFx0XHRyZXR1cm4gY29uc3VtZXIoZGF0YSk7XG5cdFx0fSk7XG5cdH1cblx0aW5pdFRvcGljcygpIHtcblx0XHRPYmplY3Qua2V5cyhUb3BpY3MpLmZvckVhY2goKHQ6IHN0cmluZykgPT4ge1xuXHRcdFx0T2JqZWN0LmtleXMoVG9waWNzW3RdKS5mb3JFYWNoKChzOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0IXMuc3RhcnRzV2l0aCgnJCcpICYmXG5cdFx0XHRcdFx0T2JqZWN0LmtleXModFtzXSkuZm9yRWFjaCgodTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmNyZWF0ZVRvcGljKFt0LCBzLCB1XS5qb2luKCcuJykpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9pa3ViZVF1ZXVlU2VydmljZSh7IGdldENvbmZpZywgY3JlYXRlSG9vayB9KSB7XG5cdGNvbnN0IHF1ZXVlTWFuYWdlciA9IENvbnRhaW5lci5nZXQoUXVldWVNYW5hZ2VyKTtcblx0cXVldWVNYW5hZ2VyLmluaXQoZ2V0Q29uZmlnKCdSQUJCSVRNUScpKTtcblx0Y3JlYXRlSG9vayhPaWt1YmVRdWV1ZVNlcnZpY2UuQU1QUV9JTklUKTtcbn1cbk9pa3ViZVF1ZXVlU2VydmljZS5BTVBRX0lOSVQgPSBgYW1xcC9pbml0YDtcbiJdfQ==
