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
    return "border-[#224022]";
  };

  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (!(domNode instanceof Element)) return undefined;

      if (domNode.name === "h1") {
        return (
          <h1 className="mb-3 text-3xl font-semibold leading-tight text-[#e7ffe7] sm:text-5xl">
            {domToReact(domNode.children as any, options)}
          </h1>
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
          if (
            title.toLowerCase().includes("the code") ||
            title.toLowerCase().includes("file by file")
          ) {
            return (
              <h2 className="mb-5 mt-14 flex items-center gap-3 rounded-lg border border-[#224022] bg-[#0d140d] px-4 py-3 text-3xl font-semibold text-[#b8ffb8]">
                <span className="rounded border border-[#43e8b0]/30 bg-[#43e8b0]/12 px-2.5 py-1 font-mono text-xs tracking-[0.12em] text-[#9cffc8]">
                  {number}
                </span>
                <span className="leading-tight">{title}</span>
              </h2>
            );
          }
          return <SectionHeader number={number} title={title} />;
        }
      }

      if (domNode.name === "h3") {
        return (
          <h3 className="mb-2 mt-8 text-xl font-semibold text-[#e7ffe7]">
            {domToReact(domNode.children as any, options)}
          </h3>
        );
      }

      if (domNode.name === "h4") {
        const headingText = text(domNode);
        const looksLikeFile = /\.(py|txt|md|env|json|yaml|yml)$/i.test(
          headingText,
        );
        if (looksLikeFile) {
          return (
            <h4 className="mb-2 mt-6 inline-flex rounded border border-[#224022] bg-[#0b150b] px-3 py-1 font-mono text-xs tracking-[0.08em] text-[#9cffc8]">
              {headingText}
            </h4>
          );
        }
        return (
          <h4 className="mb-2 mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[#8cb78c]">
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
          <div className="mb-4 mt-8 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8cb78c]">
            <span>{domToReact(domNode.children as any, options)}</span>
            <span className="h-px flex-1 bg-[#224022]" />
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
            className={`mb-4 rounded-xl border bg-gradient-to-b from-[#101610] to-[#0b100b] p-5 shadow-[0_10px_20px_rgba(0,0,0,0.25)] ${cardTone(domNode)} ${
              hasClass(domNode, "full") ? "md:col-span-2" : ""
            }`}
          >
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "card-title")) {
        return (
          <div className="mb-4 border-b border-[#224022] pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#8cb78c]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "row")) {
        return (
          <div className="mb-2 flex items-start gap-2.5 text-[13px] leading-6 text-[#d8ffd8]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "span" && hasClass(domNode, "dot")) {
        return (
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#43e8b0]" />
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
          <li className="flex items-start gap-3 border-b border-[#224022]/40 pb-3 last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </li>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "track-header")) {
        return (
          <div className="mb-1 grid grid-cols-[80px_1fr_1fr] gap-2 border-b border-[#224022] pb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8cb78c]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "track-row")) {
        return (
          <div className="grid grid-cols-[80px_1fr_1fr] gap-2 border-b border-[#224022]/40 py-2 text-[12px] last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "tier")) {
        return (
          <div className="flex items-start gap-3 border-b border-[#224022]/40 py-3 text-[13px] last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "qa-item")) {
        return (
          <div className="border-b border-[#224022]/40 py-3 text-[13px] leading-6 last:border-b-0">
            {domToReact(domNode.children as any, options)}
          </div>
        );
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
        const raw = text(domNode);
        const lang = raw.includes("gcloud ") ? "bash" : "text";
        return <CodeBlock language={lang}>{raw}</CodeBlock>;
      }

      if (domNode.name === "code") {
        return (
          <code className="rounded border border-[#224022] bg-[#0b150b] px-1.5 py-0.5 text-[#b8ffb8]">
            {text(domNode)}
          </code>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "header")) {
        return (
          <section className="mb-12 border-b border-[#224022] pb-10">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "hdr")) {
        return (
          <section className="mb-10 border-b border-[#224022] pb-8">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "toc")) {
        return (
          <section className="mb-12 rounded-xl border border-[#224022] bg-[#0d120d] p-6">
            {domToReact(domNode.children as any, options)}
          </section>
        );
      }

      if (domNode.name === "div" && hasClass(domNode, "diagram")) {
        return (
          <div className="my-6 rounded-lg border border-[#224022] bg-[#0b150b] p-6 text-center font-mono text-sm leading-8 text-[#a8d8a8]">
            {domToReact(domNode.children as any, options)}
          </div>
        );
      }

      if (domNode.name === "blockquote") {
        return (
          <blockquote className="my-5 border-l-2 border-[#224022] pl-5 italic text-[#8cb78c]">
            {domToReact(domNode.children as any, options)}
          </blockquote>
        );
      }

      if (domNode.name === "hr") {
        return <hr className="my-12 border-[#224022]" />;
      }

      return undefined;
    },
  };

  return parse(body, options);
}
