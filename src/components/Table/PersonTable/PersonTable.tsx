import React, { useState } from 'react';
import { Typography, Divider, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface PersonType {
    key: number;
    name: string;
    age: number;
    identification: string;
    relationship: string;
    phonenumber: string;
    household: number;
}

const { Title } = Typography;

const columns: ColumnsType<PersonType> = [
    {
        title: "Họ và tên",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Tuổi",
        dataIndex: "age",
        key: "age",
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
    },
    {
        title: "Quan hệ với chủ hộ",
        dataIndex: "relationship",
        key: "relationship",
    },
    {
        title: "CCCD",
        dataIndex: "identification",
        key: "identification",
    },
    {
        title: "SĐT",
        dataIndex: "phonenumber",
        key: "phonenumber",
    },
    {
        title: "Mã hộ",
        dataIndex: "household",
        key: "household",
    }
]

const data: PersonType[] = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `John Brown ${i}`,
    age: 10 + Math.floor(Math.random() * 90),
    identification: '046201013152',
    phonenumber: '0932123242',
    relationship: 'Con trai',
    household: 1,
  });
}

export function PersonTable() {

    const [selectedRowKey, setSelectedRowKey] = useState<React.Key>();
    const [selectedRow, setSelectedRow] = useState<PersonType>();

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: PersonType[]) => {
            setSelectedRow(selectedRows[0]);
            setSelectedRowKey(selectedRowKeys[0]);
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        }
    };

    return (
        <div className="flex flex-row w-full justify-center">
            <div className="flex flex-col w-2/3 pt-10">
                <Title className="self-center">Quản lý nhân khẩu</Title>
                <div className="flex flex-row justify-between">        
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            bg-indigo-600 text-slate-100 border-2 border-slate-100
                            hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600
                        `}>
                        Thêm nhân khẩu
                    </button>
                    <button className={`
                            p-3
                            font-bold rounded-md cursor-pointer
                            ${selectedRow
                                ? "bg-indigo-600 text-slate-100 border-2 border-slate-100"
                                : "bg-indigo-400 text-slate-100 border-2 border-slate-100"} 
                            ${selectedRow && "hover:bg-slate-100 hover:text-indigo-600 hover:border-2 hover:border-indigo-600"} 
                        `}>
                        Câp nhật/Xóa nhân khẩu
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