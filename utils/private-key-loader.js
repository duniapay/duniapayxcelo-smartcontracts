const AWS = require('aws-sdk');


AWS.config.getCredentials(function (err) {
    if (err) console.log(err.stack);
    // credentials not loaded
    else {
        console.log("Access key:", AWS.config.credentials.accessKeyId);
        console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
    }
});
const kms = new AWS.KMS();
const s3 = new AWS.S3();

class PrivateKeyLoader {
    constructor(s3_bucket, s3_key) {
        this.s3_bucket = s3_bucket;
        this.s3_key = s3_key;
    }

    async fetch() {
        const object = await s3.getObject({ Bucket: this.s3_bucket, Key: this.s3_key }).promise();
        const data = await kms.decrypt({ CiphertextBlob: object.Body }).promise();
        const pkey = data.Plaintext.toString('utf8');

        return pkey;
    }
}

module.exports = PrivateKeyLoader;
