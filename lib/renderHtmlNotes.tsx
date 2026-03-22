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

const parentHasClass = (node: Element, className: string) => {
  const parent = node.parent;
  if (!parent || !(parent instanceof Element)) return false;
  return hasClass(parent, className);
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

  const cardTone = (node: Element) => {
    if (hasClass(node, "g")) return "border-[#43e8b0]/30";
    if (hasClass(node, "y")) return "border-[#ffd166]/30";
    if (hasClass(node, "r")) return "border-[#ff6b6b]/30";
    if (hasClass(node, "v") || hasClass(node, "p"))
      return "border-[#7c6aff]/30";
    if (hasClass(node, "bl")) return "border-[#5b8fff]/30";
    return "border-[#2a2a2a]";
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return undefined;

      if (domNode.name === "h1") {
        return (
          <h1 className="mb-3 text-3xl font-semibold leading-tight text-white sm:text-5xl">
            {domToReact(domNode.children as any, options)}
          </h1>
        );
      }

      if (domNode.name === "h3") {
        return (
          <h3 className="mb-2 mt-8 text-xl font-semibold text-white">
            {domToReact(domNode.children as any, options)}
          </h3>
        );
      }

      if (domNode.name === "h4") {
        return (
          <h4 className="mb-2 mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[#ffd166]">
            {domToReact(domNode.children as any, options)}
          </h4>
        );
      }

      if (domNode.name === "p" && !parentHasClass(domNode, "row")) {
        return (
          <p className="mb-4 text-[1rem] leading-8">
            {domToReact(domNode.children as any, options)}
          </p>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "section-label")) {
        return (
          <div className="mb-4 mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa]">
            <span>{domToReact(domNode.children as any, options)}</span>
            <span className="h-px flex-1 bg-[#2a2a2a]" />
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "grid")) {
        return (
          <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "card")) {
        return (
          <div
            className={`mb-4 rounded-xl border bg-gradient-to-b from-[#161616] to-[#111111] p-5 shadow-[0_10px_20px_rgba(0,0,0,0.25)] ${cardTone(domNode)} ${
              hasClass(domNode, "full") ? "md:col-span-2" : ""
            }`}
          >
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "card-title")) {
        return (
          <div className="mb-4 border-b border-[#2a2a2a] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#b0b7cb]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "row")) {
        return (
          <div className="mb-2 flex items-start gap-2.5 text-[13px] leading-6 text-[#e8e8eb]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "span" && hasClass(domNode, "dot")) {
        return (
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5b8fff]" />
        );
      }

      if (domNode.name === "ul" && hasClass(domNode, "checklist")) {
        return (
          <ul className="list-none space-y-2 pl-0">
            {domToReact(domNode.children as any, options)}
          </ul>
        );
      }

      if (domNode.name === "li" && parentHasClass(domNode, "checklist")) {
        return (
          <li className="flex items-start gap-3 border-b border-[#262626] pb-3 last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </li>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "track-header")) {
        return (
          <div className="mb-1 grid grid-cols-[80px_1fr_1fr] gap-2 border-b border-[#2a2a2a] pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9da6c2]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "track-row")) {
        return (
          <div className="grid grid-cols-[80px_1fr_1fr] gap-2 border-b border-[#262626] py-2 text-[12px] last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "tier")) {
        return (
          <div className="flex items-start gap-3 border-b border-[#262626] py-3 text-[13px] last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "qa-item")) {
        return (
          <div className="border-b border-[#262626] py-3 text-[13px] leading-6 last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

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
          <section className="mb-12 border-b border-[#2a2a2a] pb-10">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "hdr")) {
        return (
          <section className="mb-10 border-b border-[#2a2a2a] pb-8">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "toc")) {
        return (
          <section className="mb-12 rounded-xl border border-[#2a2a2a] bg-[#121212] p-6">
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
