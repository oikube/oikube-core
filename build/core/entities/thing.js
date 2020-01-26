"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Thing_1;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const widget_1 = require("./widget");
let Thing = Thing_1 = class Thing extends typeorm_1.BaseEntity {
    constructor() {
        super(...arguments);
        this.isGateway = false;
        this.parent = 0;
        this.isVirtual = false;
        this.lastUpdated = new Date();
    }
    static upsert(data) {
        return Thing_1.findOne({ address: data.address }).then(found => {
            if (found) {
                found.lastUpdated = new Date();
                if (data.currentValue && data.currentValue != found.currentValue) {
                    found.currentValue = data.currentValue;
                }
                return found.save();
            }
            else {
                return Thing_1.create(data).save();
            }
        });
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Thing.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Thing.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Thing.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    typeorm_1.Index(),
    __metadata("design:type", String)
], Thing.prototype, "vendor", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    typeorm_1.Index({ unique: true }),
    __metadata("design:type", String)
], Thing.prototype, "address", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Thing.prototype, "isGateway", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Thing.prototype, "parent", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Thing.prototype, "isVirtual", void 0);
__decorate([
    type_graphql_1.Field({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Thing.prototype, "currentValue", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    typeorm_1.Index(),
    __metadata("design:type", Date)
], Thing.prototype, "lastUpdated", void 0);
__decorate([
    typeorm_1.OneToMany(type => widget_1.Widget, widget => widget.thing, { lazy: true }),
    type_graphql_1.Field(type => [widget_1.Widget]),
    __metadata("design:type", Object)
], Thing.prototype, "widgets", void 0);
Thing = Thing_1 = __decorate([
    typeorm_1.Entity(),
    type_graphql_1.ObjectType()
], Thing);
exports.Thing = Thing;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JlL2VudGl0aWVzL3RoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFpRDtBQUNqRCxxQ0FBK0Y7QUFHL0YscUNBQWtDO0FBSWxDLElBQWEsS0FBSyxhQUFsQixXQUFtQixTQUFRLG9CQUFVO0lBRnJDOztRQTBCQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBSTNCLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFJbkIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQVMzQixnQkFBVyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUF1QmhDLENBQUM7SUFiQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVM7UUFDdEIsT0FBTyxPQUFLLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUM1RCxJQUFJLEtBQUssRUFBRTtnQkFDVixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQ2pFLEtBQUssQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztpQkFDdkM7Z0JBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7aUJBQU07Z0JBQ04sT0FBTyxPQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2pDO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQTlEQTtJQURDLGdDQUFzQixFQUFFOztpQ0FDTDtBQUlwQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOzttQ0FDSTtBQUliO0lBRkMsb0JBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN6QixnQkFBTSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOzswQ0FDTjtBQUtyQjtJQUhDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFO0lBQ1IsZUFBSyxFQUFFOztxQ0FDTztBQUtmO0lBSEMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7SUFDUixlQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7O3NDQUNSO0FBSWhCO0lBRkMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7O3dDQUNrQjtBQUkzQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOztxQ0FDVTtBQUluQjtJQUZDLG9CQUFLLEVBQUU7SUFDUCxnQkFBTSxFQUFFOzt3Q0FDa0I7QUFJM0I7SUFGQyxvQkFBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ3pCLGdCQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzJDQUNMO0FBS3RCO0lBSEMsb0JBQUssRUFBRTtJQUNQLGdCQUFNLEVBQUU7SUFDUixlQUFLLEVBQUU7OEJBQ0ssSUFBSTswQ0FBYztBQVEvQjtJQU5DLG1CQUFTLENBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFNLEVBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUN0QixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FDZDtJQUNBLG9CQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxDQUFDOztzQ0FDQTtBQWpEWixLQUFLO0lBRmpCLGdCQUFNLEVBQUU7SUFDUix5QkFBVSxFQUFFO0dBQ0EsS0FBSyxDQWdFakI7QUFoRVksc0JBQUsiLCJmaWxlIjoiY29yZS9lbnRpdGllcy90aGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpZWxkLCBPYmplY3RUeXBlIH0gZnJvbSAndHlwZS1ncmFwaHFsJztcbmltcG9ydCB7IEJhc2VFbnRpdHksIENvbHVtbiwgRW50aXR5LCBPbmVUb01hbnksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIEluZGV4IH0gZnJvbSAndHlwZW9ybSc7XG5cbmltcG9ydCB7IExhenkgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4vd2lkZ2V0JztcblxuQEVudGl0eSgpXG5AT2JqZWN0VHlwZSgpXG5leHBvcnQgY2xhc3MgVGhpbmcgZXh0ZW5kcyBCYXNlRW50aXR5IHtcblx0QFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuXHRyZWFkb25seSBpZDogbnVtYmVyO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHRuYW1lOiBzdHJpbmc7XG5cblx0QEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcblx0QENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG5cdGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG5cdEBGaWVsZCgpXG5cdEBDb2x1bW4oKVxuXHRASW5kZXgoKVxuXHR2ZW5kb3I6IHN0cmluZztcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0QEluZGV4KHsgdW5pcXVlOiB0cnVlIH0pXG5cdGFkZHJlc3M6IHN0cmluZztcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0aXNHYXRld2F5OiBib29sZWFuID0gZmFsc2U7XG5cblx0QEZpZWxkKClcblx0QENvbHVtbigpXG5cdHBhcmVudDogbnVtYmVyID0gMDtcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0aXNWaXJ0dWFsOiBib29sZWFuID0gZmFsc2U7XG5cblx0QEZpZWxkKHsgbnVsbGFibGU6IHRydWUgfSlcblx0QENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG5cdGN1cnJlbnRWYWx1ZT86IHN0cmluZztcblxuXHRARmllbGQoKVxuXHRAQ29sdW1uKClcblx0QEluZGV4KClcblx0bGFzdFVwZGF0ZWQ6IERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdEBPbmVUb01hbnkoXG5cdFx0dHlwZSA9PiBXaWRnZXQsXG5cdFx0d2lkZ2V0ID0+IHdpZGdldC50aGluZyxcblx0XHR7IGxhenk6IHRydWUgfSxcblx0KVxuXHRARmllbGQodHlwZSA9PiBbV2lkZ2V0XSlcblx0d2lkZ2V0czogTGF6eTxXaWRnZXRbXT47XG5cblx0c3RhdGljIHVwc2VydChkYXRhOiBhbnkpOiBQcm9taXNlPFRoaW5nPiB7XG5cdFx0cmV0dXJuIFRoaW5nLmZpbmRPbmUoeyBhZGRyZXNzOiBkYXRhLmFkZHJlc3MgfSkudGhlbihmb3VuZCA9PiB7XG5cdFx0XHRpZiAoZm91bmQpIHtcblx0XHRcdFx0Zm91bmQubGFzdFVwZGF0ZWQgPSBuZXcgRGF0ZSgpO1xuXHRcdFx0XHRpZiAoZGF0YS5jdXJyZW50VmFsdWUgJiYgZGF0YS5jdXJyZW50VmFsdWUgIT0gZm91bmQuY3VycmVudFZhbHVlKSB7XG5cdFx0XHRcdFx0Zm91bmQuY3VycmVudFZhbHVlID0gZGF0YS5jdXJyZW50VmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZvdW5kLnNhdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBUaGluZy5jcmVhdGUoZGF0YSkuc2F2ZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG4iXX0=
