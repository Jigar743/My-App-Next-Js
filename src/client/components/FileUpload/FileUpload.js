import { EyeOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Card,
  Empty,
  List,
  Modal,
  Progress,
  Typography,
  Upload,
  message,
} from "antd";
import axios from "axios";
import React, { useMemo, useState } from "react";
import { API_ROUTES } from "../../../utils/ApiManage";
import Image from "next/image";
import DocumentFile from "../../Assets/Images/Document.png";
import { FileUploadStyled } from "./FileUpload.styled";
import pdfImg from "../../Assets/Images/pdf-document.png";
import excelImg from "../../Assets/Images/excel-document.png";
import mp4Img from "../../Assets/Images/mp4-document.png";

const { Text } = Typography;

const fileTypeImages = {
  pdf: pdfImg,
  excel: excelImg,
  video: mp4Img,
  docs: DocumentFile,
};

export default function FileUpload() {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState({
    open: false,
    file: null,
  });
  const [progress, setProgress] = useState(0);

  const customRequest = async ({ file, onSuccess, onError }) => {
    try {
      console.log({ file });
      setLoading(true);
      const { data } = await axios.get(API_ROUTES.fileUpload, {
        params: {
          fileName: file.name,
          type: file.type,
          "Content-type": file.type,
        },
      });

      const { presignedUrl } = data;

      console.log({ data });
      await axios.put(presignedUrl, file, {
        onUploadProgress: (ProgressEvent) => {
          setProgress((ProgressEvent.loaded / ProgressEvent.total) * 100);
        },
      });

      setProgress(0);
      onSuccess();
    } catch (error) {
      onError();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onFileRemove = (file) => {
    const tempArr = multipleFiles.filter((item) => item.uid !== file.uid);
    setMultipleFiles(tempArr);
  };

  const getFileImage = (file) => {
    if (file.type.includes("video")) {
      // video/mp4
      return fileTypeImages.video;
    } else if (file.type.includes("sheet")) {
      // application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
      return fileTypeImages.excel;
    } else if (file.type.includes("pdf")) {
      // application/pdf
      return fileTypeImages.pdf;
    } else if (file.type.includes("document")) {
      // application/vnd.openxmlformats-officedocument.wordprocessingml.document
      return fileTypeImages.docs;
    } else {
      return URL.createObjectURL(file);
    }
  };

  return (
    <FileUploadStyled>
      <div>
        <Upload
          fileList={multipleFiles}
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          customRequest={customRequest}
          disabled={loading}
          onChange={({ file, fileList }) => {
            setMultipleFiles(fileList);

            if (file.status === "error") {
              message.error("not able to create pre-signed url");
            }

            if (file.status === "done") {
              message.success("Successfully uploaded!");
            }
          }}
        >
          <div className="upload__btn">
            <PlusOutlined />
            <div>Upload</div>
          </div>
        </Upload>
        <div style={{ marginTop: "25px" }}>
          {loading && <Progress percent={parseFloat(progress)} />}
        </div>
      </div>
      <div>
        {useMemo(() => {
          return (
            <List
              locale={{
                emptyText: <Empty description="Upload file." />,
              }}
              dataSource={multipleFiles}
              renderItem={(file) => {
                return (
                  <List.Item key={file.uid}>
                    <Card className="uploaded__file__card">
                      <div>
                        <Image
                          width={100}
                          height={100}
                          style={{
                            objectFit: "cover",
                          }}
                          src={
                            file.status !== "done"
                              ? DocumentFile
                              : getFileImage(file.originFileObj)
                          }
                          alt="image-url"
                        />
                      </div>
                      <div>
                        <Text type="secondary">{file.name}</Text>
                      </div>
                      <div className="action__btns">
                        {file.type.includes("image") && (
                          <span style={{ marginRight: "15px" }}>
                            <EyeOutlined
                              disabled={file.status !== "done"}
                              onClick={() =>
                                setModalOpen({
                                  open: true,
                                  file: file.originFileObj,
                                })
                              }
                            />
                          </span>
                        )}
                        <span>
                          <DeleteOutlined onClick={() => onFileRemove(file)} />
                        </span>
                      </div>
                    </Card>
                  </List.Item>
                );
              }}
            />
          );
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [multipleFiles])}
      </div>
      {modalOpen.open && (
        <Modal
          title="Show Image"
          open={modalOpen.open}
          destroyOnClose
          onCancel={() => setModalOpen(() => ({ file: null, open: false }))}
          width={500}
        >
          <div>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }} // optional
              alt="image_file"
              src={URL.createObjectURL(modalOpen.file)}
            />
          </div>
        </Modal>
      )}
    </FileUploadStyled>
  );
}
