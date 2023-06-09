import { GithubSVG } from "./githubSVG";

export function Links({ prev, next }) {
  return (
    <div className="m-5 flex items-center justify-around font-spotify text-2xl text-white">
      <a
        href={`/${prev}`}
        className="rounded-lg bg-gray-600 p-4 hover:bg-black">
        Previous
      </a>
      <GithubSVG />
      <a
        href={`/${next}`}
        className="rounded-lg bg-gray-600 p-4 hover:bg-black">
        Next
      </a>
    </div>
  );
}
