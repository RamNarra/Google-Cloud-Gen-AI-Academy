import parse, {
  domToReact,
  Element,
  HTMLReactParserOptions,
} from "html-react-parser";
import { ReactNode } from "react";

import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import DataTable from "@/components/DataTable";
import SectionHeader from "@/components/SectionHeader";
import StepItem from "@/components/StepItem";

const hasClass = (node: Element, className: string) => {
  const classAttr = node.attribs?.class ?? "";
  return classAttr.split(/\s+/).includes(className);
};

const text = (node: Element | undefined): string => {
  if (!node) return "";
  return node.children
    .map((child: any) => {
      if (child.type === "text") return child.data;
      if (child.type === "tag") return text(child as Element);
      return "";
    })
    .join("")
    .replace(/\s+/g, " ")
    .trim();
};

const extractBodyHtml = (html: string) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
};

export function renderHtmlNotes(html: string): ReactNode {
  const body = extractBodyHtml(html);

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return undefined;

      if (domNode.name === "h2") {
        const numNode = domNode.children.find(
          (child: any) =>
            child.type === "tag" &&
            (hasClass(child, "n") || hasClass(child, "num")),
        ) as Element | undefined;
        const number = text(numNode);
        const title = text(domNode).replace(number, "").trim();
        if (number && title) {
          return <SectionHeader number={number} title={title} />;
        }
      }

      if (domNode.name === "div" && hasClass(domNode, "callout")) {
        const titleNode = domNode.children.find(
          (child: any) =>
            child.type === "tag" && hasClass(child, "callout-title"),
        ) as Element | undefined;
        const contentNodes = domNode.children.filter(
          (child: any) =>
            !(child.type === "tag" && hasClass(child, "callout-title")),
        );

        const type = ["blue", "green", "yellow", "red", "purple"].find((c) =>
          hasClass(domNode, c),
        ) as "blue" | "green" | "yellow" | "red" | "purple" | undefined;

        if (type && titleNode) {
          return (
            <Callout type={type} title={text(titleNode)}>
              {domToReact(contentNodes as any, options)}
            </Callout>
          );
        }
      }

      if (domNode.name === "table") {
        const thead = domNode.children.find(
          (child: any) => child.type === "tag" && child.name === "thead",
        ) as Element | undefined;
        const tbody = domNode.children.find(
          (child: any) => child.type === "tag" && child.name === "tbody",
        ) as Element | undefined;

        if (thead && tbody) {
          const headerRow = thead.children.find(
            (child: any) => child.type === "tag" && child.name === "tr",
          ) as Element | undefined;
          const headers = (headerRow?.children ?? [])
            .filter((child: any) => child.type === "tag" && child.name === "th")
            .map((cell: any) => text(cell as Element));

          const rows = (tbody.children ?? [])
            .filter((child: any) => child.type === "tag" && child.name === "tr")
            .map((row: any) =>
              row.children
                .filter(
                  (child: any) => child.type === "tag" && child.name === "td",
                )
                .map((cell: any) => text(cell as Element)),
            );

          return <DataTable headers={headers} rows={rows} />;
        }
      }

      if (domNode.name === "div" && hasClass(domNode, "step")) {
        const numNode = domNode.children.find(
          (child: any) =>
            child.type === "tag" &&
            (hasClass(child, "sn") || hasClass(child, "step-num")),
        ) as Element | undefined;
        const contentNode = domNode.children.find(
          (child: any) =>
            child.type === "tag" &&
            (hasClass(child, "sc") || hasClass(child, "step-content")),
        ) as Element | undefined;

        if (numNode && contentNode) {
          return (
            <StepItem number={text(numNode)}>
              {domToReact(contentNode.children as any, options)}
            </StepItem>
          );
        }
      }

      if (domNode.name === "pre") {
        return <CodeBlock language="text">{text(domNode)}</CodeBlock>;
      }

      if (domNode.name === "code") {
        return (
          <code className="rounded border border-[#272a38] bg-[#111318] px-1.5 py-0.5">
            {text(domNode)}
          </code>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "header")) {
        return (
          <section className="mb-12 border-b border-[#272a38] pb-10">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "hdr")) {
        return (
          <section className="mb-10 border-b border-[#272a38] pb-8">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "toc")) {
        return (
          <section className="mb-12 rounded-lg border border-[#272a38] bg-[#13151c] p-6">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "diagram")) {
        return (
          <div className="my-6 rounded-lg border border-[#272a38] bg-[#111318] p-6 text-center font-mono text-sm leading-8 text-[#8f9ac2]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "blockquote") {
        return (
          <blockquote className="my-5 border-l-2 border-[#272a38] pl-5 italic text-[#9aa4c8]">
            {domToReact(domNode.children as any, options)}
          </blockquote>
        );
      }

      if (domNode.name === "hr") {
        return <hr className="my-12 border-[#272a38]" />;
      }

      return undefined;
    },
  };

  return parse(body, options);
}
