import { notFound} from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon, FileTextIcon, MailIcon } from "lucide-react"
import { format } from "date-fns"
import { getRepById } from "@/app/actions/allReports"
import Markdownner from "@/components/auxComps/Markdownner"
import ShowImage from "@/components/reports/ShowImage"

export default async function page({ params }: { params: { repId: string } }) {
  let report
  try {
    report = await getRepById(params.repId)
  } catch (error) {
    notFound()
  }

  return (
    <div className="container mx-auto p-4 flex items-center w-full">
      {
        !report ? <div>no report found</div> :
        <Card className="w-full  mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">Medical Report Analysis</CardTitle>
            <ShowImage ImgLinkUrl={report.imageUrl}/>
          </div>
          <CardDescription>Report ID: {report.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm text-muted-foreground">
                {format(new Date(report.date), "PPP")}
              </span>
            </div>
            <div className="flex items-center">
              <FileTextIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm text-muted-foreground">{report.mType}</span>
            </div>
            <div className="flex items-center">
              <MailIcon className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-sm text-muted-foreground">{report.userEmail}</span>
            </div>
          </div>
          <div className="mt-6 prose prose-sm max-w-none text-sm">
            <h1 className=" text-3xl font-semibold text-green-600">Recomended Insights</h1>
            <Markdownner markdownText={report.insights}/>
           </div>
        </CardContent>
      </Card>

      }
    </div>
  )
}