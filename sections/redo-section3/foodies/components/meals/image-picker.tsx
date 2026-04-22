'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

import classes from '@/styles/components/image-picker.module.css';

type ImagePickerProps = {
  label: string;
  name: string;
};

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  function handlePickClick() {
    imageInputRef.current?.click();
  }

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image chosen.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
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
