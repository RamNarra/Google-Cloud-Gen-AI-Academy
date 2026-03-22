type DataTableProps = {
  headers: string[];
  rows: string[][];
};

export default function DataTable({ headers, rows }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-md border border-[#224022] bg-[#0c120c]">
      <table className="min-w-full border-collapse text-left text-[14px] leading-7">
        <thead>
          <tr className="border-b border-[#224022]">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#8cb78c]"
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
              className="border-b border-[#224022]/50 last:border-b-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`cell-${rowIndex}-${cellIndex}`}
                  className={`px-4 py-3 align-top ${
                    cellIndex === 0
                      ? "font-mono text-[12px] text-[#9cffc8]"
                      : "text-[#d8ffd8]"
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
