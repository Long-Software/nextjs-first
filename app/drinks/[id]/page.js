import Image from 'next/image'
import Link from 'next/link'
// import img from './temp.jpg';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const getDrink = async id => {
  const res = await fetch(`${url}${id}`)
  if (!res.ok) throw new Error(`Drink ${id} was not found`)
  const data = await res.json()
  return data
}
const SingleDrinkPage = async ({ params }) => {
  const data = await getDrink(params.id)
  const { strDrink, strDrinkThumb } = data?.drinks[0]
  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12'>
        Go Back
      </Link>
      <Image
        src={strDrinkThumb}
        width={300}
        height={300}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
      />
      {/* <Image src={img} className='w-48 h-48 rounded' /> */}
      <h1 className='text-4xl'>{strDrink}</h1>
    </div>
  )
}

export default SingleDrinkPage
