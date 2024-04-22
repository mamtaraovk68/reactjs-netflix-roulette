import React, { useEffect, useState } from "react";
import styles from "./MovieForm.module.css";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function MovieForm({ initialMovie, onSubmit, typeOfAction }) {
  const [movie, setMovie] = useState(initialMovie || {});

  useEffect(() => {
    setMovie(initialMovie || {});
  }, [initialMovie]);

  // immutable state update
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const handleFormSubmit = (formData) => {
    if(typeOfAction=='edit'){
      const editedFormData = {
        ...formData, runtime: parseFloat(formData.runtime), action: 'edit'
      };
      onSubmit(editedFormData);
    } else {
      console.log("else part");
    const updatedFormData = { ...formData, runtime: parseFloat(formData.runtime) };
    //Check if 'genres' is an empty array, and exclude it from the newData if empty
    if (Array.isArray(formData.genres) && formData.genres.length === 0) {
      const { genres, ...formDataWithoutGenres } = updatedFormData;
      onSubmit(formDataWithoutGenres);
    } else {
      onSubmit(updatedFormData);
   }
  }
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValue,
  } = useForm({ defaultValues: initialMovie });

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(handleFormSubmit)}>
        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Title:</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              placeholder="Title of the movie"
              onChange={(e) => {
                setValue("title", e.target.value);
              }}
            />
            {errors.title && (
              <p className={styles.error}>{errors.title?.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Release Year:</label>
            <input
              type="text"
              {...register("release_date", {
                required: "Release Year is required",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message:
                    "Please enter a valid release date in YYYY-MM-DD format",
                },
              })}
            />
            {errors.release_date && (
              <p className={styles.error}>{errors.release_date?.message}</p>
            )}
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>TagLine:</label>
            <input
              type="text"
              {...register("tagline", {
                required: "Tagline is required",
              })}
            />
            {errors.tagline && (
              <p className={styles.error}>{errors.tagline?.message}</p>
            )}
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Duration (minutes):</label>
            <input
              type="text"
              {...register("runtime", {
                required: "Duration is required",
                pattern: {
                  value: /^(\d+\.?\d*|\.\d+)$/,
                  message: "Please enter a valid duration",
                },
              })}
            />
            {errors.runtime && (
              <p className={styles.error}>{errors.runtime?.message}</p>
            )}
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>MovieURL:</label>
            <input type="text" {...register("poster_path")} />
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Genres:</label>
            <select multiple {...register("genres")}>
              <option value="Documentary">Documentary</option>
              <option value="Crime">Crime</option>
              <option value="Action">Action</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
            </select>
            {errors.genres && (
              <p className={styles.error}>{errors.genres?.message}</p>
            )}
          </div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Description:</label>
            <textarea
              {...register("overview", { required: "Description is required" })}
            />
            {errors.overview && (
              <p className={styles.error}>{errors.overview?.message}</p>
            )}
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.button} type="submit">
            Save
          </button>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default MovieForm;
