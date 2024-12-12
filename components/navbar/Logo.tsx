import Link from 'next/link'
import { Button } from '../ui/button'
import { LuArmchair } from 'react-icons/lu'
import { FaCrown } from 'react-icons/fa6'

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <FaCrown className="w-6 h-6" />
      </Link>
    </Button>
  )
}

export default Logo
