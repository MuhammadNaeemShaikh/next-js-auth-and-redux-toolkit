'use client'


import React, { useEffect, useRef } from 'react'
import { fetchUsers } from '@/services/redux/slice/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '@/services/redux/store'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Loader from '../ui/loader/Loader'


const UserData = () => {

    const useref = useRef<Boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const { entities, loading } = useSelector((state: RootState) => state.user)

    useEffect(() => {
        if (useref.current === false) {
                dispatch(fetchUsers())
                useref.current = true;

        }

        return () => {
            useref.current === true
        }
    }, [])


    console.log(loading);

    return (
        <div>
            {
                loading ? <h1><Loader /></h1> : <div>
                    <Table>
                        <TableCaption></TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">id</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>User Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Phone</TableHead>
                                <TableHead>Website</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>

                            {entities.map((item: any, index: number) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{item.id}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.username}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.website}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </div>
            }
        </div>
    )
}

export default UserData