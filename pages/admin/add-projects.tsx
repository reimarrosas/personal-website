import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  FormEvent,
  KeyboardEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { BiFirstPage } from "react-icons/bi";

import ToolsTag from "../../components/Admin/ToolsTag";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Navigate from "../../components/Navigate";
import { LoginContext } from "../../context/LoginProvider";
import styles from "../../styles/Admin/AddProjects.module.css";
import { supabase } from "../../utils/supabase";

const AddProject: NextPage = () => {
  const { state: isLoggedIn } = useContext(LoginContext);
  const router = useRouter();

  const [isSuccess, setIsSuccess] = useState<boolean | undefined>(undefined);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tools, setTools] = useState<string[]>([]);
  const [githubLink, setGithubLink] = useState("");
  const [siteLink, setSiteLink] = useState("");
  const [image, setImage] = useState("");
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/admin/login");
    }
    if (router.query.id) {
      const project = router.query;
      setTitle((project.project_title as string) ?? "");
      setDesc((project.project_desc as string) ?? "");
      setTools((project.project_tools as string[]) ?? []);
      setGithubLink((project.github_link as string) ?? "");
      setSiteLink((project.site_link as string) ?? "");
      setImage((project.project_image as string) ?? "");
      setIsHighlighted(project.is_highlighted === "true");
    }
  }, []);

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const res = await supabase.from("projects").upsert(
      [
        {
          project_title: title,
          project_desc: desc,
          github_link: githubLink,
          site_link: siteLink,
          project_tools: tools,
          project_image: image,
          is_highlighted: isHighlighted,
        },
      ],
      { onConflict: "project_title" }
    );

    if (!res.error) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <div className={styles.back}>
        {router.query.id && (
          <Navigate
            href="/projects"
            content="Back to Projects"
            icon={() => <BiFirstPage />}
          />
        )}
      </div>
      <main className={styles.main}>
        <form
          className={styles.form}
          onKeyDown={handleKeyDown}
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>
            {router.query.id ? "Edit" : "Add"} Project
          </h1>
          {isSuccess !== undefined && (
            <div className={styles.validation}>
              <span className={isSuccess ? styles.valid : styles.invalid}>
                {isSuccess
                  ? "Project added."
                  : "One or more values are invalid."}
              </span>
            </div>
          )}
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
              placeholder="Title"
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
              placeholder="Description"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <ToolsTag tools={tools} setTools={setTools} />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="githubLink">
              Github Link
            </label>
            <input
              type="text"
              name="githubLink"
              id="githubLink"
              className={styles.input}
              value={githubLink}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setGithubLink(evt.currentTarget.value)
              }
              placeholder="https://github.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="siteLink">
              Website Link
            </label>
            <input
              type="text"
              name="siteLink"
              id="siteLink"
              className={styles.input}
              value={siteLink}
              onChange={(evt: FormEvent<HTMLInputElement>) =>
                setSiteLink(evt.currentTarget.value)
              }
              placeholder="www.website.com"
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
              placeholder="https://imgur.com"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="isHighlighted">
              Highlighted?
              <input
                type="checkbox"
                name="isHighlighted"
                id="isHighlighted"
                className={styles.checkbox}
                checked={isHighlighted}
                onChange={() => setIsHighlighted(!isHighlighted)}
              />
            </label>
          </div>
          <div className={styles.formGroup}>
            <input
              type="submit"
              value={`${router.query.id ? "Edit" : "Add"} Project`}
              className={styles.submit}
            />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default AddProject;
