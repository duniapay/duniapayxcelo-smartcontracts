import axios, { Method, AxiosResponse }  from 'axios';
import * as config from './config.json';

class CliAnalyticsClient {

    appId: string
    url: string

    constructor (options) {
        this.appId = options.appId
        this.url = options.url
    }

    async recordEvent(eventType: string, metadata?: Array<any>) { 
        await axios({
            headers: {[config.app_id_key]: this.appId},
            method: 'POST',
            url: this.url,
            data: {
                type: eventType,
                metadata: metadata
            }
        });
    }

    async getEvents(eventType:string): Promise<AxiosResponse> {
        let resource = await axios({
            headers: {[config.app_id_key]: this.appId},
            method: 'GET',
            url: `${this.url}/${eventType}`
        });

        return resource.data
    }
}

export default CliAnalyticsClient
