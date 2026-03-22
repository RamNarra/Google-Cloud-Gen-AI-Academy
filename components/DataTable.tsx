type DataTableProps = {
  headers: string[];
  rows: string[][];
};

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-md border border-[#272a38] bg-[#13151c]">
      <table className="min-w-full border-collapse text-left text-[14px] leading-7">
        <thead>
          <tr className="border-b border-[#272a38]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#6a7290]"
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
              className="border-b border-[#272a38]/50 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`px-4 py-3 align-top ${
                    cellIndex === 0
                      ? "font-mono text-[12px] text-[#43e8b0]"
                      : "text-[#d8e0f0]"
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
