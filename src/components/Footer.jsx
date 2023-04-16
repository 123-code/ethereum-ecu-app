import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
      <Image src={"https://svgshare.com/i/sA3.svg"} width={50} height={50} />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} Eth Ecuador
        </p>
      </Container>
    </footer>
  )
}
