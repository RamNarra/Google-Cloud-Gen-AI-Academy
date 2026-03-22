type DataTableProps = {
  headers: string[];
  rows: string[][];
};

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-md border border-[#2a3652] bg-[#101523]">
      <table className="min-w-full border-collapse text-left text-[14px] leading-7">
        <thead>
          <tr className="border-b border-[#2a3652]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#7b8caf]"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={`row-${rowIndex}`}
              className="border-b border-[#2a3652]/50 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`px-4 py-3 align-top ${
                    cellIndex === 0
                      ? "font-mono text-[12px] text-[#7cf3c6]"
                      : "text-[#dce3f0]"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
