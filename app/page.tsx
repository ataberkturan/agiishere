import { Metadata, ResolvingMetadata } from 'next'
import { getRandomMessage } from '../utils/messages'
import DynamicContent from '../components/DynamicContent'

type Props = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const message = getRandomMessage()

  return {
    title: `AGI is Here | ${message.title}`,
    description: `${message.subtitle} ${message.description}`,
    openGraph: {
      title: `AGI is Here | ${message.title}`,
      description: `${message.subtitle} ${message.description}`,
      images: [
        {
          url: `https://agiishere.com/api/og?title=${encodeURIComponent(message.title)}&subtitle=${encodeURIComponent(message.subtitle)}`,
          width: 1200,
          height: 630,
          alt: 'AGI is Here - Dynamic Open Graph Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `AGI is Here | ${message.title}`,
      description: `${message.subtitle} ${message.description}`,
      images: [`https://agiishere.com/api/og?title=${encodeURIComponent(message.title)}&subtitle=${encodeURIComponent(message.subtitle)}`],
    },
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <DynamicContent />
    </div>
  )
}

