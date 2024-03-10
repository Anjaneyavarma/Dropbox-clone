import DropZone from '@/components/dropZone';
import Tablewrapper from '@/components/table/tablewrapper';
import { db } from '@/firebase';
import { FileType } from '@/typings';
import { auth } from '@clerk/nextjs'
import { collection, getDocs } from 'firebase/firestore';
import React from 'react'

const Dashboard = async () => {
    const { userId } = auth();

  return (
    <div className='border-l'>
        <DropZone/>
        <section className='container space-y-5'>
            <h2 className='font-bold'>All Files</h2>
            <div>
                <Tablewrapper
                />
            </div>
        </section>
    </div>
  )
}

export default Dashboard