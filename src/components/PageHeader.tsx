interface PageHeaderProps {
  title: string
  description: string
}

function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="mb-4 font-serif [.dark_&]:text-white text-black">
        {title}
      </h1>
      <p className="text-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
}

export default PageHeader 