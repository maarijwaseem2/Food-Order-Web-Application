"use client"

import { StoreModal } from "@/components/modal/store-modal";
import { useEffect, useState } from "react"

export const  ModalProvider : React.FC = ()=>{
    const [isMounted, setIsMounted ]  = useState<boolean>(false);

    useEffect(()=>{
        setIsMounted(true)
    }, [])
    if(!isMounted){
        return null
    }
    return (
        <div>
            <StoreModal/>
        </div>
    )
}