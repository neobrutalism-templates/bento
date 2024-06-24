import LINKS from '@/links'
import { ThemeSwitcher } from './theme-switcher'

export default function Home() {
  return (
    <div className="text-text dark:text-darkText relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px]">
      <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
        <img
          className="border-border dark:border-darkBorder h-28 w-28 rounded-full border-2 xl:h-[184px] xl:w-[184px]"
          src="/pfp.png"
          alt="profile picture"
        />

        <div className="mt-8">
          <h2 className="text-3xl font-heading sm:text-[44px]">John Doe</h2>
          <p className="mt-6 text-base font-base sm:text-xl">
            This is the bento neobrutalism template. Check the{' '}
            <a
              className="font-heading underline"
              href="https://github.com/neobrutalism-templates/bento"
            >
              github repo
            </a>{' '}
            for more info.
          </p>
        </div>

        <ThemeSwitcher />
      </div>
      <div className="justify-end xl:flex">
        <div
          id="grid-container"
          className="text-text dark:text-text grid w-full grid-cols-2 gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16 w450:grid-cols-1 w450:gap-7"
        >
          {Object.keys(LINKS).map((key) => (
            <a
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-main p-5 transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
              key={key}
              target="_blank"
              href={LINKS[key].link}
            >
              <img
                className="h-8 w-8 sm:h-10 sm:w-10"
                src={LINKS[key].icon.src}
                alt={LINKS[key].title}
              />
              <p className="mt-3 text-lg font-heading sm:text-xl">
                {LINKS[key].title}
              </p>
              <p className="mt-1 text-sm font-base sm:text-base">
                {LINKS[key].text}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
