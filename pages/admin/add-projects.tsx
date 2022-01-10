import { NextPage } from "next";
import { FormEvent, KeyboardEvent, useState } from "react";

import ToolsTag from "../../components/Admin/ToolsTag";
import Header from "../../components/Header/Header";
import styles from "../../styles/Admin/AddProjects.module.css";

const AddProject: NextPage = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <form
          className={styles.form}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>Include Project</h1>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="title">
              Project Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className={styles.input}
              value={title}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setTitle(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="desc">
              Description
            </label>
            <input
              type="text"
              name="desc"
              id="desc"
              className={styles.input}
              value={desc}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setDesc(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <ToolsTag tools={tools} setTools={setTools} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="link">
              Project Link
            </label>
            <input
              type="text"
              name="link"
              id="link"
              className={styles.input}
              value={link}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setLink(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="image">
              Project Image Link
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className={styles.input}
              value={image}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setImage(evt.currentTarget.value)
              }
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="submit"
              value="Add Project"
              className={styles.submit}
            />
          </div>
        </form>
      </main>
    </>
  );
};

export default AddProject;
