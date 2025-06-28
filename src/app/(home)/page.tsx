import Card from "@/components/Card"

const Home = () => {
  return (
    <div className="flex items-center justify-center flex-col w-11/12 md:w-3/4 mx-auto">
      <h1 className="text-3xl font-bold mt-10">Welcome to the Home Page</h1>
      <p className="text-center mt-5">This is the home page of our Next.js application.</p>
      <div className="my-10">

      <Card/>
      </div>

    </div>
  )
}
export default Home