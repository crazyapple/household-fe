import React, { useState } from 'react';
import { Typography, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface ReceiptType {
    key: number;
    head: string;
    category: number;
    status: string;
    complete: string;
}

const { Title } = Typography;

const columns: ColumnsType<ReceiptType> = [
    {
        title: "Tên chủ hộ",
        dataIndex: "head",
        key: "head",
    },
    {
        title: "Mã khoản thu",
        dataIndex: "category",
        key: "category",
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.category - b.category,
    },
    {
        title: "Tình trạng",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Thời điểm",
        dataIndex: "complete",
        key: "complete",
    },
]

const data: ReceiptType[] = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    head: `John Brown ${i}`,
    category: 1000 + Math.floor(Math.random() * 10000),
    status: 'COMPLETE',
    complete: '8/2/2000',
  });
}

export function ReceiptTable() {

    const [selectedRowKey, setSelectedRowKey] = useState<React.Key>();
    const [selectedRow, setSelectedRow] = useState<ReceiptType>();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: ReceiptType[]) => {
            setSelectedRow(selectedRows[0]);
            setSelectedRowKey(selectedRowKeys[0]);
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-2/3 pt-10">
                <Title className="self-center">Quản lý khoản nộp</Title>
                <div className="flex flex-row justify-between">        
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            bg-indigo-600 text-slate-100 border-2 border-slate-100
                            hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600
                        `}>
                        Thêm khoản nộp
                    </button>
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            ${selectedRow
                                ? "bg-indigo-600 text-slate-100 border-2 border-slate-100"
                                : "bg-indigo-400 text-slate-100 border-2 border-slate-100"} 
                            ${selectedRow && "hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600"} 
                        `}>
                        Câp nhật/Xóa khoản nộp
                    </button>
                </div>
                <Divider/>
                <Table 
                    className="w-full"
                    bordered
                    rowSelection={{type: 'radio', ...rowSelection}}
                    columns={columns}
                    dataSource={data}
                    scroll={{ y: 550 }}
                />
            </div>
        </div>
        
    );
}