import { CreateOrganization } from '@clerk/nextjs'

export default function CreateOrganizationPage() {
  return (
    <div className="flex content-center justify-center h-full flex-wrap">
      <CreateOrganization routing="path" path="/organization/create" afterCreateOrganizationUrl='/' />
    </div>
  )
}