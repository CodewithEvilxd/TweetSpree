import { BsTwitter } from "react-icons/bs"
import { FaGithub } from "react-icons/fa6"

const Header = () => {
  return (
    <>
      <div className=" select-none flex flex-row justify-between px-4 my-5">
        <a
          href="/"
          className=" flex flex-row gap-0.5 items-center font-semibold text-3xl font-bricolage"
        >
          <BsTwitter className="text-blue-500 md:size-10 size-8" />
          <span className="text-pink-500">spree</span>
        </a>
        <a href="https://github.com/CodewithEvilxd/TweetSpree" target="_blank">
          <div className=" flex flex-row gap-1 items-center bg-blue-500 hover:bg-blue-400 w-fit rounded-md p-2 text-sm font-semibold text-white hover:cursor-pointer transition-all">
            <FaGithub className=" size-4" />
            Github
          </div>
        </a>
      </div>
    </>
  )
}

export default Header
