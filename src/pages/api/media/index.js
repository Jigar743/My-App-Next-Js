import { S3 } from "aws-sdk";
import handler from "@/utils/Handle";
import { randomUUID } from "crypto";

const s3 = new S3({
  apiVersion: "2006-03-01",
  accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
  region: process.env.NEXT_PUBLIC_REGION,
  signatureVersion: "v4",
});

handler.get(async (req, res) => {
  const { type } = req.query;
  const extention = type?.split("/")[1];

  const getFileType = (type) => {
    if (type.includes("video")) {
      // video/mp4
      return "video";
    } else if (type.includes("sheet")) {
      // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      return "excel";
    } else if (type.includes("pdf")) {
      // application/pdf
      return "pdf";
    } else if (type.includes("document")) {
      // application/vnd.openxmlformats-officedocument.wordprocessingml.document
      return "docx";
    } else {
      return "img";
    }
  };

  const Key = `${getFileType(type)}_${randomUUID()}.${extention}`;

  const s3Params = {
    Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
    Key,
    Expires: 60,
    ContentType: type,
  };

  s3.getSignedUrl("putObject", s3Params, (err, uploadUrl) => {
    if (err) {
      res.status(500).json({
        error: true,
        message: "not able to create pre-signed url",
      });
    } else {
      res.status(200).json({
        presignedUrl: uploadUrl,
        key: Key,
      });
    }
  });
});

export default handler;
