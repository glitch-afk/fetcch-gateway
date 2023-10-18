import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "~/components/ui/dialog"
import { Close as DialogClose } from "@radix-ui/react-dialog"

import loader from "~/public/spinner.svg"

const FetcchModal = ({
  qrImg,
  isOpen,
  setIsOpen,
}: {
  qrImg: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-[392px] flex-shrink-0">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Waiting Confirmation
            </DialogTitle>
            <DialogClose className="w-fit rounded-full border border-primary p-2 opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-primary data-[state=open]:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2B67E8"
                className="h-5 w-5"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>
        <div className="mx-auto my-5 flex w-full flex-col space-y-3 text-center">
          <span className="w-full text-center text-sm font-semibold">
            Scan the QR code and pay with your Wallet.
          </span>
          {qrImg ? (
            <img
              src={qrImg}
              className="mx-auto h-[274px] w-[274px] rounded-xl border border-primary"
              alt="qrcode"
            />
          ) : (
            <img src={loader} alt="loader" className="animate-spin" />
          )}
          <span className="font-medium">
            Please complete the payment in 05:59
          </span>
        </div>
        <DialogFooter>
          <button
            className="w-full rounded-full border-2 border-primary bg-input py-4 font-semibold text-primary"
            onClick={() => setIsOpen(false)}
          >
            Go Back
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FetcchModal
