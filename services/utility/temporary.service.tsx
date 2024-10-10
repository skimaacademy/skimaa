import { toast } from "sonner";

export function willBeAvailableSoon(e: any) {
  e.preventDefault();
  toast.success('This feature will be available soon');
}