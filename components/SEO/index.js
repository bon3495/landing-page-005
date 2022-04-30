import Head from 'next/head';
import React from 'react';

const SEO = ({
  description = 'startup product landing page',
  author = 'Bon Tran',
  meta,
  title = 'Startup Landing Title',
}) => {
  const metaData = [
    {
      name: 'description',
      content: description,
    },
    {
      name: `creator`,
      content: author,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
};

export default SEO;

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
