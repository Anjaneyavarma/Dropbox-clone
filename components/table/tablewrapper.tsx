'use client'
import { FileType } from '@/typings'
import React, {useEffect, useState} from 'react'
import { Button } from '../ui/button'
import { DataTable } from './table'
import { columns } from './columns'
import { useUser } from '@clerk/nextjs'
import {useCollection} from "react-firebase-hooks/firestore"
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/firebase'

const Tablewrapper = () => {

    const {user} = useUser();
    const [intialFiles, setIntialFiles] = useState<FileType[]>([]);
    const [sort, setSort] = useState<"asc" | "desc">("desc");

    const [docs, loading, error] = useCollection(
        user && 
        query(
            collection(db, "users", user.id, "files"),
            orderBy("timestamp", sort)
        )
    )

    useEffect(() => {
        if(!docs) return;

        const files: FileType[] = docs.docs.map(doc => ({
            id: doc.id,
            filename: doc.data().filename || doc.id,
            timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
            fullname: doc.data().fullname,
            downloadURL: doc.data().downlaodURL,
            type: doc.data().type,
            size: doc.data().size,
        }))
        setIntialFiles(files);

    }, [docs])
    
    if(docs?.docs.length === undefined){
        return (<div>
            <p>loading.....</p>
        </div>)
    }

    return (
        <div className='flex flex-col space-y-5 pb-10'>
            <Button 
                className='ml-auto w-fit'
                variant={'outline'}
                onClick={()=> setSort(sort === "desc"?"asc":"desc")}
            >
                    Sort By {sort === "desc"? "Newest": "Oldest"} 
            </Button>
            <DataTable columns={columns} data={intialFiles}/>
        </div>
    )
}

export default Tablewrapper;