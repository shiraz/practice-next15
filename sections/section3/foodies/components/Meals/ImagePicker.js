'use client';

import { useRef, useState } from 'react';

import classes from './ImagePicker.module.css';
import Image from 'next/image';

function ImagePicker(props) {
  const [pickedImg, setPickedImg] = useState(null);
  const imageInputRef = useRef();
  const { label, name } = props;

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <div className={classes.preview}>
        {!pickedImg && <p>No image picked yet.</p>}
        {pickedImg && (
          <Image
            src={pickedImg}
            alt="The image selected by the user"
            fill
          ></Image>
        )}
      </div>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
