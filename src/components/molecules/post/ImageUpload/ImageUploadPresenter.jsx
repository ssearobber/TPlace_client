import React from 'react';
import ImageUploader from 'react-images-upload';

const ImageUploadPresenter = ({ onDrop }) => {
  // const [formImages, setFormImages] = useState([]);
  // const formData = new FormData();

  // const onDrop = async (image) => {
  // console.log(e.target.files[0]);
  // setImages([...images, image]);
  // formData.append('file', image[0]);
  // console.log(formData.get('file'));
  //   console.log(image);

  //   try {
  //     const {
  //       data: { location },
  //     } = await axios.post('http://localhost:4000/api/upload', formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' },
  //     });
  //     console.log(location);
  //   } catch (e) {
  //     alert(e);
  //   }
  // };
  return (
    <div>
      <ImageUploader
        withIcon={false}
        withPreview={true}
        singleImage={true}
        label=""
        buttonText="Upload Images"
        onChange={onDrop}
        imgExtension={['.jpg', '.gif', '.png', '.gif', '.svg', 'jpeg']}
        maxFileSize={2621440}
        fileSizeError=" file size is too big"
      />
    </div>
  );
};

export default ImageUploadPresenter;
