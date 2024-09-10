import BlogCard from '@/components/shared/blog/blog-card'
import LinkButton from '@/components/shared/button/link-button'
import HomeHero from '@/components/shared/hero/home/home'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <section className="flex flex-col items-center justify-center gap-8 m-auto min-h-screen bg-base">
        <h1 className="text-5xl font-bold">
          Welcome to Appnovia Starter Template
        </h1>
        <LinkButton url={'#'} label={'Get Started'} />
        <BlogCard />
      </section>
    </div>
  )
}
