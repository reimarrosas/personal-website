import Link from "next/link";
import { BiFirstPage, BiLastPage } from "react-icons/bi";
import { UrlObject } from "url";

import styles from "../styles/Navigate.module.css";

type NavigateProps = {
  outerClass?: string;
  href: UrlObject | string;
  forward?: boolean;
  content: string;
  icon?: () => JSX.Element;
};

const Navigate: React.FC<NavigateProps> = ({
  outerClass,
  href,
  forward,
  content,
  icon,
}) => {
  return (
    <div className={`${outerClass ? `${outerClass} ` : ""}`}>
      <Link href={href}>
        <a className={styles.anchor}>
          {forward ? (
            <>
              <span>{content}</span>
              {icon && icon()}
            </>
          ) : (
            <>
              {icon && icon()}
              <span>{content}</span>
            </>
          )}
        </a>
      </Link>
    </div>
  );
};

export default Navigate;
