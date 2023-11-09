import Link from 'next/link'

import * as st from './storage.styled'

export default function Storage() {
  return (
    <>
      <div className="absolute z-10">
        <st.TestText>
          <Link href={'/storage/random'} className="text-white">
            랜덤보관함으로 가깅
          </Link>
        </st.TestText>
        <st.TestText>
          <Link href={'/storage/friend'} className="text-white">
            칭구보관함으로 가깅
          </Link>
        </st.TestText>
        <st.TestText>
          <Link href={'/storage/test'} className="text-white">
            테스트 페이지로 가깅
          </Link>
        </st.TestText>
        <st.TestText>
          <Link href={'/'} className="text-white">
            홈
          </Link>
        </st.TestText>
      </div>
    </>
  )
}
