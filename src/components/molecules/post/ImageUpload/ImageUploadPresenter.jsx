import React from 'react';
import ImageUploader from 'react-images-upload';

const ImageUploadPresenter = ({ onDrop }) => {
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
