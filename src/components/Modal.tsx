import React, { type ReactNode } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
interface Props{
    children:ReactNode

}
export default function({children}: Props) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
    <div className="mt-5">
      <Button onPress={onOpen} 
                className="dark:disabled:border-red-500 disabled:border-red-500 text-black dark:text-gray-400 rounded-md bg-transparent border dark:border-solid p-2 dark:border-gray-400"
                >Confirm</Button>
        </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">QR</ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="ghost" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
