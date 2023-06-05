
export default async function Page({ params }) {
  return (
    <div className="fixed h-full w-full flex justify-center items-center">
      <div className="text-center prose dark:prose-invert">
        <h1>Welcome to the TDP website!</h1>
        <p>You are seeing this website because you are in development mode.</p>
        <p>Production deployments redirect to the localised page.</p>
        <p className="flex gap-10 justify-center">
          <a href="/en">EN</a>
          <a href="/en">FR</a>
        </p>
      </div>
    </div>
  )
}
