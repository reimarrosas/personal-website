import Head from "next/head";

const CustomHead: React.FC = () => {
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Personal Website of Reimar Rosas. Contains project lists, blog link, and contact information"
      />
      <meta name="keywords" content="Personal, Projects, Resume, Contact" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <title>Reimar Rosas | Personal Website</title>
    </Head>
  );
};

export default CustomHead;
