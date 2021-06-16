import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: 'a'
      }
    },
    {
      params: {
        id: 'b'
      }
    },
  ]
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let postData:string = ''
  switch (params.id as string) {
    case 'a':
      postData = 'a data'
      break
    case 'b':
      postData = 'b data'
      break
  }
  return {
    props: {
      postData
    }
  }
}
export default function Post({postData}){
  return <div>{postData}</div>
}