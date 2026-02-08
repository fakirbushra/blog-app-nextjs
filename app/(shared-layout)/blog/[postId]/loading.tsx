import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 px-4 space-y-8">
        <div className="space-y-6">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="w-full h-100 rounded-xl" />
        </div>
        <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-1/5" />
        </div>
        <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
        </div>
    </div>
  )
}

