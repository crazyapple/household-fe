import React, { useState } from 'react';
import { Typography, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface HouseholdType {
    key: number;
    name: string;
    numMembers: number;
    address: string;
}

const { Title } = Typography;

const columns: ColumnsType<HouseholdType> = [
    {
        title: "Chủ hộ",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Số thành viên",
        dataIndex: "numMembers",
        key: "numMembers",
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.numMembers - b.numMembers,
    },
    {
        title: "Địa chỉ",
        dataIndex: "address",
        key: "address",
    }
]

const data: HouseholdType[] = [];
for (let i = 0; i < 30; i++) {
  data.push({
    key: i,
    name: `John Brown ${i}`,
    numMembers: 1 + Math.floor(Math.random() * 10),
    address: 'Hồ Chí Minh'
  });
}

export function HouseholdTable() {

    const [selectedRowKey, setSelectedRowKey] = useState<React.Key>();
    const [selectedRow, setSelectedRow] = useState<HouseholdType>();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: HouseholdType[]) => {
            setSelectedRow(selectedRows[0]);
            setSelectedRowKey(selectedRowKeys[0]);
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-2/3 pt-10">
                <Title className="self-center">Quản lý hộ khẩu</Title>
                <div className="flex flex-row justify-between">        
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            bg-indigo-600 text-slate-100 border-2 border-slate-100
                            hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600
                        `}>
                        Thêm hộ khẩu
                    </button>
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            ${selectedRow
                                ? "bg-indigo-600 text-slate-100 border-2 border-slate-100"
                                : "bg-indigo-400 text-slate-100 border-2 border-slate-100"} 
                            ${selectedRow && "hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600"} 
                        `}>
                        Câp nhật/Xóa hộ khẩu
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