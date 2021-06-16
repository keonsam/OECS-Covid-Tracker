import { useEffect } from "react";
import { useTable, useGlobalFilter } from "react-table";
import "./Table.css"

const Table = ({columns, data, filterStr}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
    } = useTable({ columns, data }, useGlobalFilter)

    useEffect(() => {
        setGlobalFilter(filterStr || "")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterStr])

    return (
        <table  className="data-table" {...getTableProps()}>
            <caption className="clipped">A summary of Covid 19 data in the Organisation of Eastern Caribbean States</caption>
            <thead className="data-table-head">
            {headerGroups.map(headerGroup => (
                <tr className="data-table-tr" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    <th
                    className="data-table-th"
                    {...column.getHeaderProps()}
                    scope="col"
                    >
                    {column.render('Header')}
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody className="data-table-body" {...getTableBodyProps()}>
            {rows.map(row => {
                prepareRow(row)
                return (
                <tr className="data-table-tr" {...row.getRowProps()}>
                    {row.cells.map(cell => {
                    return (
                        <td
                        className="data-table-td"
                        {...cell.getCellProps()}
                        >
                        {cell.render('Cell')}
                        </td>
                    )
                    })}
                </tr>
                )
            })}
            </tbody>
        </table>
    );
}

export default Table;