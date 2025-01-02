import React from 'react';
import TableRow from './TableRow';
import Checkbox from './Checkbox';
import './Datagrid.css';

const Datagrid = ({ data, selected, onSelectAll, onSelectRow, isAllSelected, isPartialSelected, onDownload }) => {
    const isDownloadable =
        selected.length > 0 &&
        selected.every((name) => data.find((item) => item.name === name).status === 'Available');

    return (
        <div className="datagrid-container">
            <table className="datagrid-table">
                <thead>
                    <tr className="header-row">
                        <th colSpan="5">
                            <div className="header-controls">
                                <Checkbox
                                    isChecked={isAllSelected}
                                    isIndeterminate={isPartialSelected}
                                    onChange={onSelectAll}
                                    label={selected.length > 0 ? `${selected.length} Selected` : 'None Selected'}
                                />
                                <span
                                    className={`download-text ${isDownloadable ? 'enabled' : 'disabled'}`}
                                    onClick={isDownloadable ? onDownload : undefined}
                                >
                                    Download Selected
                                </span>
                            </div>
                        </th>
                    </tr>
                    <tr className="column-header">
                        <th></th>
                        <th>Name</th>
                        <th>Device</th>
                        <th>Path</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <TableRow
                            key={item.name}
                            item={item}
                            isSelected={selected.includes(item.name)}
                            onSelectRow={onSelectRow}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Datagrid;
