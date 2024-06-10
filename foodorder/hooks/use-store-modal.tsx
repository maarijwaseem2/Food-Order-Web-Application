import { create } from 'zustand'
import React from 'react'

interface useStoreModalProps {
    isOpen : boolean;
    onOpen: ()=> void;
    onClose: ()=> void;
}

export const useStoreModal = create<useStoreModalProps>((set)=>({
    isOpen: false,
    onOpen: ()=> set({isOpen: true}),
    onClose: ()=> set({isOpen: false})
}))