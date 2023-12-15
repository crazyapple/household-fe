import React, { useState } from 'react';
import { Typography, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface CategoryType {
    key: number;
    name: string;
    amount: number;
    voluntary: boolean;
    start: string;
    end: string;
}

const { Title } = Typography;

const columns: ColumnsType<CategoryType> = [
    {
        title: "Tên khoản thu",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Số tiền",
        dataIndex: "amount",
        key: "amount",
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.amount - b.amount,
    },
    {
        title: "Tình nguyện",
        dataIndex: "voluntary",
        key: "voluntary",
    },
    {
        title: "Ngày bắt đầu",
        dataIndex: "start",
        key: "start",
    },
    {
        title: "Ngày kết thúc",
        dataIndex: "end",
        key: "end",
    }
]

const data: CategoryType[] = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    name: `John Brown ${i}`,
    amount: 1000 + Math.floor(Math.random() * 10000),
    voluntary: true,
    start: '1/2/2000',
    end: '10/2/2000'
  });
}

export function CategoryTable() {

    const [selectedRowKey, setSelectedRowKey] = useState<React.Key>();
    const [selectedRow, setSelectedRow] = useState<CategoryType>();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: CategoryType[]) => {
            setSelectedRow(selectedRows[0]);
            setSelectedRowKey(selectedRowKeys[0]);
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-2/3 pt-10">
                <Title className="self-center">Quản lý khoản thu</Title>
                <div className="flex flex-row justify-between">        
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            bg-indigo-600 text-slate-100 border-2 border-slate-100
                            hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600
                        `}>
                        Thêm khoản thu
                    </button>
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            ${selectedRow
                                ? "bg-indigo-600 text-slate-100 border-2 border-slate-100"
                                : "bg-indigo-400 text-slate-100 border-2 border-slate-100"} 
                            ${selectedRow && "hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600"} 
                        `}>
                        Câp nhật/Xóa khoản thu
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