import { useRouter } from "next/router"

export default function weather() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return <div>About us: {id}</div>
}
