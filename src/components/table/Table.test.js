import { render, screen, } from '@testing-library/react';
import Table from './Table'


const columns = [
    {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
    },
    {
        Header: 'Column 2',
        accessor: 'col2',
    },
]

const data = [
    {
        col1: 'Hello',
        col2: 'World',
    },
    {
        col1: 'react-table',
        col2: 'rocks',
    },
]

const props = {
    columns,
    data
}
describe('Table', () => {
    it('should render Table with rows and columns', () => {
        render(<Table {...props} />);
        expect(screen.getByRole('table')).toBeInTheDocument();
        const th = screen.getAllByRole("columnheader")
        expect(th.length).toEqual(columns.length)
        th.forEach((v, i) => {
            expect(v).toHaveTextContent(columns[i].Header)
        });
        const row = screen.getAllByRole("row")
        expect(row.length).toEqual(data.length + 1)
        row.forEach((v, i) => {
            if(i > 0) {
                const obj = data[i -1]
                // eslint-disable-next-line jest/no-conditional-expect
                expect(v).toHaveTextContent(`${obj.col1}${obj.col2}`)
            }
        })

    });
})