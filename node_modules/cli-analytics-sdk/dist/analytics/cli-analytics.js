"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config = require("./config.json");
class CliAnalyticsClient {
    constructor(options) {
        this.appId = options.appId;
        this.url = options.url;
    }
    recordEvent(eventType, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default({
                headers: { [config.app_id_key]: this.appId },
                method: 'POST',
                url: this.url,
                data: {
                    type: eventType,
                    metadata: metadata
                }
            });
        });
    }
    getEvents(eventType) {
        return __awaiter(this, void 0, void 0, function* () {
            let resource = yield axios_1.default({
                headers: { [config.app_id_key]: this.appId },
                method: 'GET',
                url: `${this.url}/${eventType}`
            });
            return resource.data;
        });
    }
}
exports.default = CliAnalyticsClient;
//# sourceMappingURL=cli-analytics.js.map