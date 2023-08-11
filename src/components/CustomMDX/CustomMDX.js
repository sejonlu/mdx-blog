import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

import CodeSnippet from "@/components/CodeSnippet";

const components = {
  pre: (props) => <CodeSnippet {...props} />,
};

function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

export default CustomMDX;
