/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YqzC1kzdCX0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function PoolBox() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="py-12">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  alt="Image"
                  className="object-cover pt-4 pl-4 pr-4"
                  height="225"
                  src="/public/cruzeiro.jpg"
                  style={{
                    aspectRatio: "400/225",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold tracking-tight text-center">Do you prefer cats or dogs?</h3>
                    <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400 text-center">
                      Poll
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4 justify-center">
                        <div className="text-xl font-semibold">🐶 Dogs</div>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Winner</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
                        Total Votes: 2734
                      </p>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
                        Status: Finished
                      </p>
                    </div>
                    <Button className="w-full" variant="outline">
                      View Winner
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

