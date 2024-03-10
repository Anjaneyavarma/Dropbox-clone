import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function DeleteModal() {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Sure you want to delete</DialogTitle>
          <DialogDescription>
            This Action cannot be undone. This will permanently delete your file!
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="px-3 flex-1"
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
