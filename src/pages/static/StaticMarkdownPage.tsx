import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import { EuiPanel, EuiText } from "@elastic/eui";

export default function StaticMarkdownPage(props: {
  file: string;
  title: string;
}) {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    import(`../../markdown/${props.file}.en.md`)
      .then((markdownFile) => fetch(markdownFile.default))
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text));
  }, [props.file]);

  return (
    <EuiPanel>
      <EuiText>
        <ReactMarkdown key={props.title}>{markdownContent}</ReactMarkdown>
      </EuiText>
    </EuiPanel>
  );
}
