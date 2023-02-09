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
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import noFilmIcon from "../../../asset/images/no-films-icon.png";
import AvatarFilm from "../../../component/AvatarFilm/AvatarFilm";
import useFilm from "../../../hooks/useFilm";
import { setDetailFilm } from "../../../redux/slices/appSlice";
import "./UpdateFilm.scss";
import removeFilmIcon from "../../../asset/images/remove-icon.svg";
import ModalPopup from "../../../component/ModalPopup/ModalPopup";
import { useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
// import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";

const UpdateFilm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { infoFilmByCinema, getInfoFilmByNameCinema, deleteFilm } = useFilm();
    const currentCinema = location?.pathname.split("/")[1];
    const [idDelete, setIdDelete] = useState();
    const [step, setStep] = useState(0);

    const { refreshRemoveFilm, refreshAddFilm, refreshUpdateFilm } =
        useSelector((state) => state.refreshReducer);
    const { detailFilm } = useSelector((state) => state.appReducer);
    const { updateFilm } = useFilm();

    useEffect(() => {
        if (infoFilmByCinema) {
            getInfoFilmByNameCinema({
                nameCinema: currentCinema,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentCinema, refreshRemoveFilm, refreshAddFilm, refreshUpdateFilm]);

    const handleDeleteFilm = () => {
        deleteFilm({
            id: idDelete,
        });
    };
    const onFinish = (values) => {
        const convertDay = values?.premiereDate?._d
            .toLocaleDateString()
            .split("/");
        const newDay =
            convertDay[0]?.length === 1 ? "0" + convertDay[0] : convertDay[0];
        const newMonth =
            convertDay[1]?.length === 1 ? "0" + convertDay[1] : convertDay[1];
        const newDate = [newDay, newMonth, convertDay[2]];
        updateFilm({
            id: detailFilm.id,
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
    const listFilmContent = (
        <div className="content-update-film">
            {infoFilmByCinema.length !== 0 ? (
                infoFilmByCinema.map((item, index) => {
                    const { id, name, img, category, duration, premiereDate } =
                        item;
                    return (
                        <div className="movie-item" key={index}>
                            <ModalPopup
                                buttonOpenModal={
                                    <img
                                        src={removeFilmIcon}
                                        alt=""
                                        className="remove-icon"
                                        onClick={() => {
                                            setIdDelete(id);
                                        }}
                                    />
                                }
                                title="Delete Film"
                                message={
                                    " Are you sure to remove this film and all of its related data? "
                                }
                                confirmMessage={"This action cannot be undone."}
                                icon={removeFilmIcon}
                                ok={"Ok"}
                                onAccept={() => handleDeleteFilm()}
                            />
                            <div>
                                <AvatarFilm
                                    image={img}
                                    width={227.5}
                                    height={360}
                                    borderRadius={12}
                                />
                            </div>
                            <div className="info-movie">
                                <div className="title-movie">
                                    <div
                                        onClick={() => {
                                            navigate(
                                                `/${currentCinema}/detail-film`
                                            );
                                            dispatch(setDetailFilm(item));
                                        }}
                                    >
                                        {name}
                                    </div>
                                </div>
                                <div className="desc-movie">
                                    <div className="vibe-movie detail">
                                        <div className="options">
                                            Thể loại :
                                        </div>
                                        <div className="info-vive">
                                            {category}
                                        </div>
                                    </div>
                                    <div className="time-movie detail">
                                        <div className="options">
                                            Thời lượng :
                                        </div>
                                        <div className="info-time">
                                            {duration} phút
                                        </div>
                                    </div>
                                    <div className="date-movie detail">
                                        <div className="options">
                                            Ngày khởi chiếu :
                                        </div>
                                        <div className="info-date">
                                            {premiereDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="buy-ticket"
                                onClick={() => {
                                    dispatch(setDetailFilm(item));
                                }}
                            >
                                <Button
                                    type="primary"
                                    className="btn-update btn-primary"
                                    onClick={() => {
                                        setStep(1);
                                    }}
                                >
                                    Cập nhật
                                </Button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="film-not-data">
                    <img src={noFilmIcon} alt="" />
                    <span>No Films</span>
                </div>
            )}
        </div>
    );

    const updateFilmContent = (
        <div className="wrapper-content-update-film">
            <Form
                onFinish={onFinish}
                className="form-update-film"
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
                    initialValue={detailFilm.name}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Tên viết tắt"
                    name="nameFilm"
                    initialValue={detailFilm.nameFilm}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Thời lượng (phút)"
                    name="duration"
                    initialValue={detailFilm.duration}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Thể loại"
                    name="category"
                    initialValue={detailFilm.category}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ảnh poster"
                    name="img"
                    initialValue={detailFilm.img}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Link phim"
                    name="link"
                    initialValue={detailFilm.link}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giới hạn độ tuổi"
                    name="age"
                    initialValue={detailFilm.age}
                >
                    <InputNumber />
                </Form.Item>
                <Form.Item
                    label="Tình trạng phim"
                    name="type"
                    initialValue={detailFilm.type}
                >
                    <Radio.Group>
                        <Radio value="psc"> Phim sắp chiếu </Radio>
                        <Radio value="pdc"> Phim đang chiếu </Radio>
                        <Radio value="scdb"> Suất chiếu đặc biệt </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item
                    label="Chọn rạp"
                    name="nameCinema"
                    initialValue={detailFilm.nameCinema}
                >
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
                <Form.Item
                    label="Đạo diễn"
                    name="director"
                    initialValue={detailFilm.director}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Diễn viên"
                    name="actor"
                    initialValue={detailFilm.actor}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngôn ngữ"
                    name="language"
                    initialValue={detailFilm.language}
                >
                    <Select>
                        <Select.Option value="Tiếng Việt">
                            Tiếng Việt
                        </Select.Option>
                        <Select.Option value="Tiếng Anh">
                            Tiếng Anh
                        </Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Ngày khởi chiếu"
                    name="premiereDate"
                    initialValue={moment(detailFilm.premiereDate, "DD/MM/YYYY")}
                >
                    <DatePicker format={dateFormat} />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                    initialValue={detailFilm.description}
                >
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
                    <div className="test">
                        <Button
                            className="btn-back"
                            onClick={() => {
                                setStep(0);
                            }}
                        >
                            Quay lại
                        </Button>
                        <Button
                            type="primary"
                            className="btn-confirm"
                            htmlType="submit"
                        >
                            Xác nhận
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
    const renderContent = () => {
        switch (step) {
            case 0:
                return listFilmContent;
            case 1:
                return updateFilmContent;

            default:
                break;
        }
    };
    return (
        <div className="wrapper-update-film">
            <div className="header-update-film">
                {step === 0 ? "Danh sách phim" : "Cập nhật phim"}
            </div>
            {renderContent()}
        </div>
    );
};

export default UpdateFilm;
