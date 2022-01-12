import {
  KeyboardEvent,
  PropsWithChildren,
  SyntheticEvent,
  useState,
} from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import styles from "../../styles/Admin/ToolsTag.module.css";
import { tagMap } from "../../utils/tags";

type props = {
  tools: string[];
  setTools: (strArr: string[]) => void;
};

const ToolsTag: React.FC<PropsWithChildren<props>> = ({ tools, setTools }) => {
  const [text, setText] = useState("");

  const addTags = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter" && text !== "" && !tools.includes(text)) {
      setTools([...tools, text]);
      setText("");
    }
  };

  const removeTags = (tag: string) => {
    setTools(tools.filter((tool) => tool !== tag));
  };

  return (
    <>
      <label className={styles.label} htmlFor="tools">
        Project Tools
      </label>
      <div className={styles.container}>
        <ul className={styles.tagList}>
          {tools.map((tool) => (
            <li
              className={styles.tagItem}
              key={tool}
              onClick={() => removeTags(tool)}
            >
              <span>{tool}</span>
              <AiFillCloseCircle />
            </li>
          ))}
        </ul>
        <input
          list="project-tools"
          name="tools"
          id="tools"
          className={styles.input}
          value={text}
          onChange={(evt: SyntheticEvent<HTMLInputElement>) =>
            setText(evt.currentTarget.value)
          }
          onKeyDown={(evt: KeyboardEvent<HTMLInputElement>) => addTags(evt)}
          placeholder="Press enter to add tags"
        />
        <datalist id="project-tools">
          {Array.from(tagMap.keys()).map((tagName, ind) => (
            <option key={ind} value={tagName} />
          ))}
        </datalist>
      </div>
    </>
  );
};

export default ToolsTag;
