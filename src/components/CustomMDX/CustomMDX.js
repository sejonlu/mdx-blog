import React from "react";

import { MDXRemote } from "next-mdx-remote/rsc";

import dynamic from "next/dynamic";

import CodeSnippet from "@/components/CodeSnippet";

const DivisionGroupsDemo = dynamic(() =>
  import("@/components/DivisionGroupsDemo")
);

const components = {
  pre: (props) => <CodeSnippet {...props} />,
  DivisionGroupsDemo: DivisionGroupsDemo,
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
