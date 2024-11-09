const Contact = () => {
  return (
    <>
    <div className="bg-orange-500 flex items-center justify-center  w-full h-screen py-96 mx-auto relative z-[10]">
        <h1 className="w-3/4 text-4xl flex justify-between items-center font-medium font-mono leading-9 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, dolore magni sunt voluptas quibusdam cumque, rerum aut ducimus aperiam dolorum possimus rem? Maxime natus consequuntur delectus cupiditate repellat voluptas odio.</h1>
    </div>
    <footer className="text-white mt-12">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row">
            <p className="text-sm animate-pulse">&copy; {new Date().getFullYear()} Aditya Goyal. All Rights Reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Contact