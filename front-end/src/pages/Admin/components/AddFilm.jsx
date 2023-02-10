// import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  // Upload,
} from "antd";
import useFilm from "../../../hooks/useFilm";
import "./AddFilm.scss";

const { TextArea } = Input;
const AddFilm = () => {
  const { addFilm } = useFilm();
  const onFinish = (values) => {
    const convertDay = values?.premiereDate?._d.toLocaleDateString().split("/");
    const newDay =
      convertDay[0]?.length === 1 ? "0" + convertDay[0] : convertDay[0];
    const newMonth =
      convertDay[1]?.length === 1 ? "0" + convertDay[1] : convertDay[1];
    const newDate = [newDay, newMonth, convertDay[2]];
    addFilm({
      name: values.name,
      nameFilm: values.nameFilm,
      duration: values.duration,
      category: values.category,
      img: values.img,
      link: values.link,
      age: values.age,
      type: values.type,
      nameCinema: values.nameCinema,
      director: values.director,
      actor: values.actor,
      language: values.language,
      premiereDate: newDate.join("/"),
      description: values.description,
    });
  };

  const dateFormat = "DD/MM/YYYY";

  return (
    <div className="wrapper-add-film">
      <div className="header-add-film">Thêm phim</div>
      <Form
        onFinish={onFinish}
        className="form-add-film"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 902,
        }}
      >
        <Form.Item
          label="Tên phim"
          name="name"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên phim!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên viết tắt"
          name="nameFilm"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên viết tắt",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Thời lượng (phút)" name="duration">
          <Input />
        </Form.Item>
        <Form.Item label="Thể loại" name="category">
          <Input />
        </Form.Item>
        <Form.Item label="Ảnh poster" name="img">
          <Input />
        </Form.Item>
        <Form.Item label="Link phim" name="link">
          <Input />
        </Form.Item>
        <Form.Item label="Giới hạn độ tuổi" name="age">
          <InputNumber />
        </Form.Item>
        <Form.Item
          label="Tình trạng phim"
          name="type"
          rules={[
            {
              required: true,
              message: "Vui lòng chọn tình trạng phim!",
            },
          ]}
        >
          <Radio.Group>
            <Radio value="psc"> Phim sắp chiếu </Radio>
            <Radio value="pdc"> Phim đang chiếu </Radio>
            <Radio value="scdb"> Suất chiếu đặc biệt </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Chọn rạp" name="nameCinema">
          <Select>
            <Select.Option value="bttx">Beta Thanh Xuân</Select.Option>
            <Select.Option value="btmd">Beta Mỹ Đình</Select.Option>
            <Select.Option value="btqt">Beta Quang Trung</Select.Option>
            <Select.Option value="btbg">Beta Bắc Giang</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Đạo diễn" name="director">
          <Input />
        </Form.Item>
        <Form.Item label="Diễn viên" name="actor">
          <Input />
        </Form.Item>
        <Form.Item label="Ngôn ngữ" name="language">
          <Select>
            <Select.Option value="Tiếng Việt">Tiếng Việt</Select.Option>
            <Select.Option value="Tiếng Anh">Tiếng Anh</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Ngày khởi chiếu"
          name="premiereDate"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập ngày khởi chiếu!",
            },
          ]}
        >
          <DatePicker format={dateFormat} />
        </Form.Item>
        <Form.Item label="Mô tả" name="description">
          <TextArea rows={4} />
        </Form.Item>

        {/* <Form.Item label="Upload" valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Upload
                            </div>
                        </div>
                    </Upload>
                </Form.Item> */}
        <Form.Item
          className="group-btn"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="btn-confirm">
            Xác nhận
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default AddFilm;
