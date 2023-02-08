import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Upload,
} from "antd";
import "./AddFilm.scss";

const { TextArea } = Input;
const AddFilm = () => {
    const onFinish = (values) => {
        console.log(values);
    };
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
                <Form.Item label="Tên phim" name="name">
                    <Input />
                </Form.Item>
                <Form.Item label="Tên viết tắt" name="nameFilm">
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
                <Form.Item label="Tình trạng phim" name="type">
                    <Radio.Group>
                        <Radio value="psc"> Phim sắp chiếu </Radio>
                        <Radio value="pdc"> Phim đang chiếu </Radio>
                        <Radio value="scdb"> Suất chiếu đặc biệt </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item label="Chọn rạp" name="nameCinema">
                    <Select>
                        <Select.Option value="bttx">
                            Beta Thanh Xuân
                        </Select.Option>
                        <Select.Option value="btmd">Beta Mỹ Đình</Select.Option>
                        <Select.Option value="btqt">
                            Beta Quang Trung
                        </Select.Option>
                        <Select.Option value="btbg">
                            Beta Bắc Giang
                        </Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Ngày khởi chiếu" name="premiereDate">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Mô tả" name="description">
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item label="Upload" valuePropName="fileList">
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
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
export default AddFilm;
