const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3-v2');

aws.config.update({
    accessKeyId: 'AKIATDHV5OSVCQP3DK4C',
    secretAccessKey: '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',
    region: 'us-east-1',
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
    if (
        file.mimetype.startsWith('audio/') ||
        file.mimetype.startsWith('video/') ||
        file.mimetype.startsWith('image/') ||
        file.mimetype.startsWith('application/')
    ) {
        cb(null, true);
    } else {
        cb(
            new Error('Invalid file type, only image, video and audio is allowed!'),
            false
        );
    }
};

const upload = multer({
    fileFilter,
    limits: { fileSize: 25 * 1024 * 1024 },
    storage: multerS3({
        acl: 'public-read-write',
        s3: s3,
        bucket: 'health-care-matz',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: 'TESTING_METADATA' });
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '_' + file.originalname);
        },
        contentType: multerS3.AUTO_CONTENT_TYPE, // Use the correct content type
    }),
});

module.exports = upload;