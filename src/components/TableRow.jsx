import React from 'react';
import './TableRow.css';

const TableRow = ({ item, isSelected, onSelectRow }) => {
    return (
        <tr className="table-row">
            <td>
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelectRow(item.name)}
                />
            </td>
            <td>{item.name}</td>
            <td>{item.device}</td>
            <td>{item.path}</td>
            <td>
                {item.status === 'Available' ? (
                    <span className="status-available">⬤ {item.status}</span>
                ) : (
                    item.status
                )}
            </td>
        </tr>
    );
};

export default TableRow;