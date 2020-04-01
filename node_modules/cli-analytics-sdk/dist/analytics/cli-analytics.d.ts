import { AxiosResponse } from 'axios';
declare class CliAnalyticsClient {
    appId: string;
    url: string;
    constructor(options: any);
    recordEvent(eventType: string, metadata?: Array<any>): Promise<void>;
    getEvents(eventType: string): Promise<AxiosResponse>;
}
export default CliAnalyticsClient;
